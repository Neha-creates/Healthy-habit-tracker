import React, { createContext, useContext, useState } from 'react';

interface Habit {
  id: string;
  name: string;
  category: string;
  goal: string;
  progress: number;
  streak: number;
}

interface HabitContextType {
  habits: Habit[];
  loading: boolean;
  addHabit: (habit: Omit<Habit, 'id'>) => void;
  updateHabit: (id: string, updates: Partial<Habit>) => void;
  deleteHabit: (id: string) => void;
}

const HabitContext = createContext<HabitContextType | undefined>(undefined);

export const HabitProvider = ({ children }: { children: React.ReactNode }) => {
  const [habits, setHabits] = useState<Habit[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const addHabit = (habit: Omit<Habit, 'id'>) => {
    setLoading(true);
    const newHabit = {
      ...habit,
      id: Date.now().toString(),
    };
    setHabits([...habits, newHabit]);
    setLoading(false);
  };

  const updateHabit = (id: string, updates: Partial<Habit>) => {
    setHabits(habits.map(habit => 
      habit.id === id ? { ...habit, ...updates } : habit
    ));
  };

  const deleteHabit = (id: string) => {
    setHabits(habits.filter(habit => habit.id !== id));
  };

  return (
    <HabitContext.Provider value={{ habits, loading, addHabit, updateHabit, deleteHabit }}>
      {children}
    </HabitContext.Provider>
  );
};

export const useHabits = () => {
  const context = useContext(HabitContext);
  if (context === undefined) {
    throw new Error('useHabits must be used within a HabitProvider');
  }
  return context;
};
