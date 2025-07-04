import React, { useState } from 'react';
import { Edit2, Trash2, Calendar, Flag, Check, X } from 'lucide-react';

const TaskItem = ({
  task,
  onToggleComplete,
  onEditTask,
  onDeleteTask,
}) => {
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const handleDelete = () => {
    onDeleteTask(task.id);
    setShowDeleteConfirm(false);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const isOverdue = task.dueDate && new Date(task.dueDate) < new Date() && !task.completed;

  const priorityColors = {
    low: 'bg-green-100 text-green-800',
    medium: 'bg-yellow-100 text-yellow-800',
    high: 'bg-red-100 text-red-800',
  };

  return (
    <div className={`bg-white rounded-lg shadow-sm border p-4 transition-all hover:shadow-md ${
      task.completed ? 'opacity-75' : ''
    }`}>
      <div className="flex items-start space-x-3">
        <button
          onClick={() => onToggleComplete(task.id)}
          className={`mt-1 w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${
            task.completed
              ? 'bg-green-500 border-green-500 text-white'
              : 'border-gray-300 hover:border-green-500'
          }`}
        >
          {task.completed && <Check className="h-3 w-3" />}
        </button>

        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <h3 className={`font-medium ${
              task.completed ? 'line-through text-gray-500' : 'text-gray-900'
            }`}>
              {task.title}
            </h3>
            
            <div className="flex items-center space-x-2">
              <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                priorityColors[task.priority]
              }`}>
                <Flag className="h-3 w-3 mr-1" />
                {task.priority}
              </span>
              
              <button
                onClick={() => onEditTask(task)}
                className="text-gray-400 hover:text-blue-600 transition-colors"
              >
                <Edit2 className="h-4 w-4" />
              </button>
              
              <button
                onClick={() => setShowDeleteConfirm(true)}
                className="text-gray-400 hover:text-red-600 transition-colors"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          </div>

          {task.description && (
            <p className={`mt-1 text-sm ${
              task.completed ? 'text-gray-400' : 'text-gray-600'
            }`}>
              {task.description}
            </p>
          )}

          <div className="flex items-center space-x-4 mt-2 text-xs text-gray-500">
            <span>Created {formatDate(task.createdAt)}</span>
            {task.dueDate && (
              <span className={`flex items-center ${
                isOverdue ? 'text-red-600 font-medium' : ''
              }`}>
                <Calendar className="h-3 w-3 mr-1" />
                Due {formatDate(task.dueDate)}
                {isOverdue && <span className="ml-1">(Overdue)</span>}
              </span>
            )}
          </div>
        </div>
      </div>

      {showDeleteConfirm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full">
            <h3 className="text-lg font-medium text-gray-900 mb-2">Delete Task</h3>
            <p className="text-gray-600 mb-4">
              Are you sure you want to delete "{task.title}"? This action cannot be undone.
            </p>
            <div className="flex space-x-3">
              <button
                onClick={() => setShowDeleteConfirm(false)}
                className="flex-1 px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskItem;
