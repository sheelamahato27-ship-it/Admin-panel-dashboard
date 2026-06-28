import React, { useState } from 'react'
import Sidebar from './components/Layout/Sidebar'
import Header from './components/Layout/Header'
import Dashbboard from './components/Dashboard/Dashbboard';

const App = () => {
  const [sideBarCollapsed, setSideBarCollapsed] = useState(false);
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [darkMode, setDarkMode] = useState(true); 

  return (
    
    <div className={darkMode ? 'dark' : ''}>
      <div className="flex min-h-screen w-full bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-50">
        
        <Sidebar 
          collapsed={sideBarCollapsed}
          onToggle={() => setSideBarCollapsed(!sideBarCollapsed)}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />

        <div className="flex-1 flex flex-col min-w-0">
          <Header  
            sideBarCollapsed={sideBarCollapsed}
            onToggleSideBar={() => setSideBarCollapsed(!sideBarCollapsed)}
            darkMode={darkMode}
            onToggleDarkMode={() => setDarkMode(!darkMode)}
            onPageChange={setCurrentPage}
          />
          
          <main className="p-6 flex-1 overflow-y-auto bg-transparent w-full overflow-x-hidden">
            <div className='p-6 space-y-6 max-w-7xl mx-auto'>
              {currentPage === 'dashboard' && <Dashbboard />}
              {currentPage === 'overview' && <div className="text-xl font-bold">Analytics Overview Page</div>}
              {currentPage === 'reports' && <div className="text-xl font-bold">Analytics Reports Page</div>}
              {currentPage === 'insights' && <div className="text-xl font-bold">Insights Panel</div>}
              {currentPage === 'all-users' && <div className="text-xl font-bold">User Directory Grid</div>}
              {currentPage === 'products' && <div className="text-xl font-bold">E-commerce Products list</div>}
              {currentPage === 'customers' && <div className="text-xl font-bold">Customer Management Hub</div>}
              {currentPage === 'inventory' && <div className="text-xl font-bold">Inventory System Dashboard</div>}
              {currentPage === 'messages' && <div className="text-xl font-bold">Direct Messaging Center</div>}
              {currentPage === 'calendar' && <div className="text-xl font-bold">Interactive Calendar View</div>}
              {currentPage === 'settings' && <div className="text-xl font-bold">System Configuration Settings</div>}
            </div>
          </main>
        </div>

      </div>
    </div>
  )
}

export default App