import { db } from "../config/firebase";
import { ref, set, get, remove } from "firebase/database";

export const getHabits = async (uid: string): Promise<string[]> => {
  const snapshot = await get(ref(db, `habits/${uid}/selectedHabits`));
  return snapshot.exists() ? snapshot.val() : [];
};

export const setHabits = async (uid: string, habits: string[]) => {
  await set(ref(db, `habits/${uid}/selectedHabits`), habits);
};

export const updateHabits = async (uid: string, newHabit: string) => {
  const current = await getHabits(uid);
  if (current.includes(newHabit)) {
    await setHabits(uid, current.filter(h => h !== newHabit));
  } else {
    await setHabits(uid, [...current, newHabit]);
  }
};

export const clearHabits = async (uid: string) => {
  await remove(ref(db, `habits/${uid}/selectedHabits`));
};
