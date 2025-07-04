import React, { useState, useEffect } from 'react';
import { Plus, Search, Filter } from 'lucide-react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import TaskFilter from './TaskFilter';
import { loadTasksFromStorage, saveTasksToStorage } from '../utils/localStorage';

const TaskDashboard = ({ username }) => {
  const [tasks, setTasks] = useState([]);
  const [showTaskForm, setShowTaskForm] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const savedTasks = loadTasksFromStorage(username);
    setTasks(savedTasks);
    setIsLoaded(true);
  }, [username]);

  useEffect(() => {
    // Only save to localStorage after initial load to avoid overwriting with empty array
    if (isLoaded && username) {
      saveTasksToStorage(tasks, username);
    }
  }, [tasks, isLoaded, username]);

  const addTask = (taskData) => {
    const newTask = {
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      ...taskData,
    };
    setTasks(prev => [newTask, ...prev]);
    setShowTaskForm(false);
  };

  const updateTask = (updatedTask) => {
    setTasks(prev => prev.map(task => 
      task.id === updatedTask.id ? updatedTask : task
    ));
    setEditingTask(null);
  };

  const deleteTask = (taskId) => {
    setTasks(prev => prev.filter(task => task.id !== taskId));
  };

  const toggleTaskComplete = (taskId) => {
    setTasks(prev => prev.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const filteredTasks = tasks.filter(task => {
    const matchesFilter = 
      filter === 'all' || 
      (filter === 'completed' && task.completed) ||
      (filter === 'pending' && !task.completed);
    
    const matchesSearch = 
      task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      task.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesFilter && matchesSearch;
  });

  const taskCounts = {
    all: tasks.length,
    completed: tasks.filter(t => t.completed).length,
    pending: tasks.filter(t => !t.completed).length,
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Tasks</h2>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search tasks..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
            />
          </div>
          
          <button
            onClick={() => setShowTaskForm(true)}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 flex items-center space-x-2"
          >
            <Plus className="h-5 w-5" />
            <span>Add Task</span>
          </button>
        </div>

        <TaskFilter
          currentFilter={filter}
          onFilterChange={setFilter}
          taskCounts={taskCounts}
        />
      </div>

      <TaskList
        tasks={filteredTasks}
        onToggleComplete={toggleTaskComplete}
        onEditTask={setEditingTask}
        onDeleteTask={deleteTask}
      />

      {showTaskForm && (
        <TaskForm
          onSubmit={addTask}
          onCancel={() => setShowTaskForm(false)}
        />
      )}

      {editingTask && (
        <TaskForm
          task={editingTask}
          onSubmit={updateTask}
          onCancel={() => setEditingTask(null)}
        />
      )}
    </div>
  );
};

export default TaskDashboard;
