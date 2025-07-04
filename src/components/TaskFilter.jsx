import React from 'react';
import { CheckCircle, Circle, List } from 'lucide-react';

const TaskFilter = ({
  currentFilter,
  onFilterChange,
  taskCounts,
}) => {
  const filters = [
    { key: 'all', label: 'All Tasks', icon: List, count: taskCounts.all },
    { key: 'pending', label: 'Pending', icon: Circle, count: taskCounts.pending },
    { key: 'completed', label: 'Completed', icon: CheckCircle, count: taskCounts.completed },
  ];

  return (
    <div className="flex flex-wrap gap-2">
      {filters.map(({ key, label, icon: Icon, count }) => (
        <button
          key={key}
          onClick={() => onFilterChange(key)}
          className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all ${
            currentFilter === key
              ? 'bg-blue-100 text-blue-700 border-2 border-blue-200'
              : 'bg-white text-gray-600 border-2 border-gray-200 hover:bg-gray-50'
          }`}
        >
          <Icon className="h-4 w-4" />
          <span>{label}</span>
          <span className={`px-2 py-1 rounded-full text-xs ${
            currentFilter === key
              ? 'bg-blue-200 text-blue-800'
              : 'bg-gray-200 text-gray-600'
          }`}>
            {count}
          </span>
        </button>
      ))}
    </div>
  );
};

export default TaskFilter;
