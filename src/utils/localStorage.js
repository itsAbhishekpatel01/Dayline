const STORAGE_KEYS = {
  TASKS: 'taskflow_tasks',
  USER: 'taskflow_user',
};

const getTasksKey = (username) => {
  return `${STORAGE_KEYS.TASKS}_${username}`;
};

export const loadTasksFromStorage = (username) => {
  try {
    if (!username) {
      console.log('No username provided, returning empty tasks');
      return [];
    }
    const tasksKey = getTasksKey(username);
    const savedTasks = localStorage.getItem(tasksKey);
    const tasks = savedTasks ? JSON.parse(savedTasks) : [];
    console.log(`Loading tasks for user ${username}:`, tasks);
    return tasks;
  } catch (error) {
    console.error('Error loading tasks from localStorage:', error);
    return [];
  }
};

export const saveTasksToStorage = (tasks, username) => {
  try {
    if (!username) {
      console.log('No username provided, skipping save');
      return;
    }
    const tasksKey = getTasksKey(username);
    console.log(`Saving tasks for user ${username}:`, tasks);
    localStorage.setItem(tasksKey, JSON.stringify(tasks));
  } catch (error) {
    console.error('Error saving tasks to localStorage:', error);
  }
};

export const loadUserFromStorage = () => {
  try {
    return localStorage.getItem(STORAGE_KEYS.USER);
  } catch (error) {
    console.error('Error loading user from localStorage:', error);
    return null;
  }
};

export const saveUserToStorage = (username) => {
  try {
    localStorage.setItem(STORAGE_KEYS.USER, username);
  } catch (error) {
    console.error('Error saving user to localStorage:', error);
  }
};

export const clearUserFromStorage = () => {
  try {
    localStorage.removeItem(STORAGE_KEYS.USER);
  } catch (error) {
    console.error('Error clearing user from localStorage:', error);
  }
};

export const clearTasksForUser = (username) => {
  try {
    if (!username) return;
    const tasksKey = getTasksKey(username);
    localStorage.removeItem(tasksKey);
    console.log(`Cleared tasks for user: ${username}`);
  } catch (error) {
    console.error('Error clearing tasks for user:', error);
  }
};
