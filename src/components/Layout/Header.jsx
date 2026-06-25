import React, { useState } from 'react'
import { Bell, ChevronDown, Filter, Menu, Plus, Search, Settings, Sun, Moon, LogOut, User } from 'lucide-react'

const Header = ({ sideBarCollapsed, onToggleSideBar, darkMode, onToggleDarkMode, onPageChange }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      alert(`Searching system data for: "${searchQuery}"`);
      
    }
  };

  return (
    <div className='bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-6 py-4 relative z-20'>
      <div className='flex items-center justify-between'>
          
          {/* Left section */}
          <div className='flex items-center space-x-4'>
            <button 
              className='p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors'
              onClick={onToggleSideBar}
            >
              <Menu className='w-5 h-5' />
            </button>
            <div className='hidden md:block'>
              <h1 className='text-2xl font-black text-slate-800 dark:text-white'>Dashboard</h1>
              <p className='text-sm text-slate-500 dark:text-slate-400'>Welcome back, Alex! Here's what's happening today.</p>
            </div>
          </div>

          {/* Center Section (Search Bar Form) */}
          <form onSubmit={handleSearchSubmit} className='flex-1 max-w-md mx-8'>
            <div className='relative flex items-center'>
              <Search className='w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400' />
              <input 
                type='text'
                placeholder='Search Anything'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className='w-full pl-10 pr-10 py-2 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-800 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all' 
              />
              <button type="submit">
                <Filter className='absolute right-2 top-1/2 transform -translate-y-1/2 p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300' />
              </button>
            </div>
          </form>

          {/* Right Section */}
          <div className='flex items-center space-x-3 relative'>
           
            <button 
              onClick={() => onPageChange('products')}
              className='hidden lg:flex items-center space-x-2 py-2 px-4 bg-linear-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all active:scale-95'
            >
              <Plus className='w-4 h-4 '/>
              <span className='text-sm font-medium'>New Product</span>
            </button>

            {/* Dynamic Dark Mode Toggle Button */}
            <button 
              onClick={onToggleDarkMode}
              className='p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors'
            >
              {darkMode ? <Sun className='w-5 h-5 text-yellow-500' /> : <Moon className='w-5 h-5' />}
            </button>

            {/* Notification Bell Dropdown Button */}
            <div className="relative">
              <button 
                onClick={() => {
                  setShowNotifications(!showNotifications);
                  setShowProfileMenu(false);
                }}
                className='relative p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors'
              >
                <Bell className='w-5 h-5'/> 
                <span className='absolute -top-1 right-0 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold animate-pulse'>3</span>
              </button>

              {/* Notification Menu Card */}
              {showNotifications && (
                <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl p-4 space-y-3">
                  <h4 className="font-bold text-sm text-slate-800 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-2">Recent Alerts</h4>
                  <div className="text-xs space-y-2 text-slate-600 dark:text-slate-400">
                    <p className="p-2 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg cursor-pointer">⚠️ <b>Low stock alert:</b> iPhone 15 Pro stock running out.</p>
                    <p className="p-2 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg cursor-pointer">📦 <b>New order received:</b> Order #3847 confirmed.</p>
                    <p className="p-2 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg cursor-pointer">⚙️ <b>System Update:</b> Core database backup finished.</p>
                  </div>
                </div>
              )}
            </div>

            {/* Settings Quick-link Icon Button */}
            <button 
              onClick={() => onPageChange('settings')}
              className='p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors'
            >
              <Settings className='h-5 w-5' />
            </button>

            {/* User Profile Action Link Container */}
            <div className='relative'>
              <div 
                onClick={() => {
                  setShowProfileMenu(!showProfileMenu);
                  setShowNotifications(false);
                }}
                className='flex items-center space-x-3 pl-3 border-l border-slate-200 dark:border-slate-700 cursor-pointer group'
              >
                <img
                  src='https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces'
                  alt='user'
                  className='w-8 h-8 rounded-full ring-2 ring-blue-500 group-hover:opacity-80 transition-opacity'   
                />
                <div className='hidden md:block'>
                  <p className='text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-blue-500 transition-colors'>
                    Alex Johnson
                  </p>
                  <p className='text-xs text-slate-500 dark:text-slate-400'>Administrator</p>
                </div>
                <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${showProfileMenu ? 'rotate-180' : ''}`}/>
              </div>

              {/* Profile Context Options Overlay Menu */}
              {showProfileMenu && (
                <div className="absolute right-0 mt-3 w-48 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-xl overflow-hidden py-1">
                  <button 
                    onClick={() => { onPageChange('settings'); setShowProfileMenu(false); }}
                    className="w-full flex items-center space-x-2 px-4 py-2.5 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/60"
                  >
                    <User size={16} />
                    <span>My Profile</span>
                  </button>
                  <button 
                    onClick={() => { onPageChange('settings'); setShowProfileMenu(false); }}
                    className="w-full flex items-center space-x-2 px-4 py-2.5 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/60"
                  >
                    <Settings size={16} />
                    <span>Account Config</span>
                  </button>
                  <hr className="border-slate-100 dark:border-slate-800" />
                  <button 
                    onClick={() => alert("Logging out of administrator panel session...")}
                    className="w-full flex items-center space-x-2 px-4 py-2.5 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/20"
                  >
                    <LogOut size={16} />
                    <span>Log Out</span>
                  </button>
                </div>
              )}
            </div>

          </div>
      </div>
    </div>
  )
}

export default Header