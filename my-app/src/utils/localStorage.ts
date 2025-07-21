// Local storage keys
const STORAGE_KEYS = {
  HABITS: 'healthyHabits_habits',
  USER_PREFERENCES: 'healthyHabits_preferences',
};

// Save data to localStorage
export const saveToStorage = <T>(key: string, data: T): void => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error('Error saving to localStorage:', error);
  }
};

// Get data from localStorage
export const getFromStorage = <T>(key: string): T | null => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  } catch (error) {
    console.error('Error reading from localStorage:', error);
    return null;
  }
};

export { STORAGE_KEYS };
