# Modern Responsive Admin Dashboard

A sleek, fast, and fully responsive Admin Panel Dashboard built using **React**, **Vite**, **Tailwind CSS**, and **Recharts**. This dashboard features a highly modular architecture, dynamic data visualizations, advanced data sorting, and a fully integrated Dark Mode theme toggle.

Vercel Link-> admin-panel-dashboard-mu.vercel.app


## 🚀 Features

*   **📱 100% Fully Responsive Layout:** Tailored with explicit breakpoints ensuring pixel-perfect display across mobile, tablet, and ultra-wide monitor screens.
*   **🌓 Native Dark Mode:** Dynamic dark theme synchronization across all UI components and dashboard elements.
*   **📊 Rich Data Visualizations:** Clean, animated statistical charts powered by `recharts` reflecting active category distributions and analytical revenue tracking.
*   **🗂️ Interactive Data Tables:** Live client-side sorting algorithms targeting specific metrics like financial values, tracking identifiers, and order status timelines.
*   **⚡ Powered by Vite:** Optimized asset delivery pipelines resulting in near-instantaneous Hot Module Replacement (HMR) and ultra-fast builds.

---

## 🛠️ Tech Stack & Architecture

*   **Frontend Library:** React (Functional Components, Hooks, `useMemo`)
*   **Build Tooling:** Vite (Next-generation frontend tooling)
*   **Styling Engine:** Tailwind CSS (Utility-first styling approach)
*   **Iconography:** Lucide React (Clean, consistent SVG icons)
*   **Data Layouts:** Recharts (Composed declarative charting library)

---

## 📦 Getting Started

Follow these steps to set up the dashboard development environment locally.

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### 1. Clone the Repository
```bash
git clone [https://github.com/sheelamahato27-ship-it/YAdmin-panel-dashboard.git](https://github.com/sheelamahato27-ship-it/Admin-panel-dashboard.git)
cd Admin-panel

**Install Project Dependencies**
Bash
npm install


**Launch the Local Development Server**
Bash
npm run dev


**Project Directory Structure**

├── src/
│   ├── components/
│   │   ├── Sidebar.jsx        # Dynamic structural navigation menu
│   │   ├── Header.jsx         # Global top navigation bar with Theme Toggles
│   │   ├── StatsGrid.jsx      # Mobile-responsive analytics cards & progress tracking
│   │   ├── SalesChart.jsx     # Recharts Pie/Donut category distribution breakdown
│   │   └── TableSection.jsx   # Interactive recent orders grid & top products list
│   ├── pages/
│   │   └── Dashboard.jsx      # Core page compilation wrapper
│   ├── App.jsx                # Layout orchestrator and global state controller
│   └── main.jsx               # Application DOM mounting entry point
