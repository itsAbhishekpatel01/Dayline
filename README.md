# 📋 TaskFlow - Personal Task Management App

<div align="center">
  <img src="https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React">
  <img src="https://img.shields.io/badge/Vite-5.4.2-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite">
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.4.1-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
</div>

<div align="center">
  <h3>✨ A beautiful and intuitive personal task management application built with React and modern web technologies</h3>
</div>

---

## 🚀 Features

### 📝 **Task Management**
- ✅ Create, edit, and delete tasks with ease
- 🎯 Set task priorities (Low, Medium, High)
- 📅 Add due dates with overdue indicators
- ✏️ Rich task descriptions
- ☑️ Mark tasks as complete/incomplete

### 🔍 **Smart Filtering & Search**
- 🔎 Real-time search across task titles and descriptions
- 📊 Filter tasks by status (All, Pending, Completed)
- 📈 Task count indicators for each filter
- 🎨 Visual priority indicators with color coding

### 👤 **User Management**
- 🔐 Simple username-based authentication
- 💾 User-specific data storage
- 🔄 Persistent sessions across browser refreshes
- 🎭 Multi-user support with isolated data

### 🎨 **Modern UI/UX**
- 🌟 Clean, flat design with consistent color scheme
- 📱 Fully responsive design for all devices
- ⚡ Smooth transitions and hover effects
- 🎯 Intuitive user interface
- 🌈 Beautiful icons powered by Lucide React

---

## 🛠️ Tech Stack

| Technology | Purpose | Version |
|------------|---------|---------|
| **React** | Frontend Framework | 18.3.1 |
| **Vite** | Build Tool & Dev Server | 5.4.2 |
| **Tailwind CSS** | Utility-First Styling | 3.4.1 |
| **Lucide React** | Beautiful Icons | 0.344.0 |
| **JavaScript** | Programming Language | ES6+ |
| **LocalStorage** | Data Persistence | Browser API |

---

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/itsAbhishekpatel01/Dayline.git
   cd Dayline
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:5173
   ```

---

## 🎯 Usage

### Getting Started
1. **Enter your username** on the login screen
2. **Add your first task** using the "Add Task" button
3. **Set priority levels** and due dates as needed
4. **Use filters** to organize your view
5. **Search tasks** using the search bar

### Task Management
- **Create**: Click "Add Task" and fill in the details
- **Edit**: Click the pencil icon on any task
- **Delete**: Click the trash icon and confirm deletion
- **Complete**: Click the checkbox to mark as done
- **Filter**: Use the filter buttons to view specific task types

---

## 🏗️ Project Structure

```
Dayline/
├── src/
│   ├── components/
│   │   ├── App.jsx                 # Main application component
│   │   ├── Login.jsx               # User authentication
│   │   ├── TaskDashboard.jsx       # Main dashboard
│   │   ├── TaskForm.jsx            # Task creation/editing
│   │   ├── TaskList.jsx            # Task list container
│   │   ├── TaskItem.jsx            # Individual task component
│   │   └── TaskFilter.jsx          # Filter buttons
│   ├── utils/
│   │   └── localStorage.js         # Local storage utilities
│   ├── main.jsx                    # Application entry point
│   └── index.css                   # Global styles
├── public/
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

---

## 🎨 Design Philosophy

### Color Scheme
- **Primary**: Blue (#2563eb) - Trust and productivity
- **Success**: Green (#10b981) - Completion and achievement
- **Warning**: Yellow (#f59e0b) - Attention and priority
- **Danger**: Red (#ef4444) - Urgency and deletion
- **Neutral**: Gray shades - Balance and sophistication

### UI Principles
- **Simplicity**: Clean, uncluttered interface
- **Consistency**: Uniform design patterns throughout
- **Accessibility**: High contrast ratios and clear typography
- **Responsiveness**: Seamless experience across all devices

---

## 🚀 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint code analysis |

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Abhishek Patel**
- GitHub: [@itsAbhishekpatel01](https://github.com/itsAbhishekpatel01)
- Project: [TaskFlow](https://github.com/itsAbhishekpatel01/Dayline)

---

## 🙏 Acknowledgments

- **React Team** for the amazing framework
- **Tailwind CSS** for the utility-first approach
- **Lucide** for the beautiful icons
- **Vite** for the lightning-fast build tool

---

<div align="center">
  <p>Made with ❤️ by Abhishek Patel</p>
  <p>⭐ Star this repo if you find it helpful!</p>
</div>
