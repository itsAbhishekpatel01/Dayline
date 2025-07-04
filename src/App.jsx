import React, { useState, useEffect } from 'react';
import { User, LogOut } from 'lucide-react';
import Login from './components/Login';
import TaskDashboard from './components/TaskDashboard';
import { loadUserFromStorage, saveUserToStorage, clearUserFromStorage } from './utils/localStorage';

function App() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const savedUser = loadUserFromStorage();
    setUser(savedUser);
    setIsLoading(false);
  }, []);

  const handleLogin = (username) => {
    setUser(username);
    saveUserToStorage(username);
  };

  const handleLogout = () => {
    setUser(null);
    clearUserFromStorage();
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {user ? (
        <div>
          <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-16">
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-600 p-2 rounded-lg">
                    <User className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h1 className="text-xl font-bold text-gray-900">TaskFlow</h1>
                    <p className="text-sm text-gray-600">Welcome back, {user}</p>
                  </div>
                </div>
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <LogOut className="h-4 w-4" />
                  <span>Logout</span>
                </button>
              </div>
            </div>
          </header>
          <TaskDashboard username={user} />
        </div>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
