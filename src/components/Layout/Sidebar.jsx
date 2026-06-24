import React, { useState } from 'react'
import {
  BarChart3,
  Calendar,       
  FileText,
  LayoutDashboard,
  MessageSquare,
  Package,
  Settings,
  ShoppingBag,    
  Users,
  Zap,
  ChevronDown     
} from 'lucide-react'

const Sidebar = ({ collapsed, onToggle, currentPage, onPageChange }) => {
  const [expandedItems, setExpandedItems] = useState(new Set(['analytics']));

  const toggleExpanded = (itemid) => {
    const newExpanded = new Set(expandedItems);

    if (newExpanded.has(itemid)) {
      newExpanded.delete(itemid);
    } else {
      newExpanded.add(itemid);
    }
    setExpandedItems(newExpanded);
  };

  const menuItems = [
    {
      id: 'dashboard',
      icon: LayoutDashboard,
      label: 'Dashboard',
      active: true,
      badge: 'new',
    },
    {
      id: 'analytics',
      icon: BarChart3,
      label: 'Analytics',
      submenu: [
        { id: 'overview', label: 'Overview' },
        { id: 'reports', label: 'Reports' },
        { id: 'insights', label: 'Insights' }
      ],
    },
    {
      id: 'users',
      icon: Users,
      label: 'Users',
      count: '2.4k',
      submenu: [
        { id: 'all-users', label: 'All users' },
        { id: 'roles', label: 'Roles & Permissions' },
        { id: 'activity', label: 'User Activity' }
      ],
    },
    {
      id: 'ecommerce',
      icon: ShoppingBag, 
      label: 'E-commerce',
      submenu: [
        { id: 'products', label: 'Products' },
        { id: 'orders', label: 'Orders' },
        { id: 'customers', label: 'Customers' }
      ],
    },
    {
      id: 'inventory',
      icon: Package,
      label: 'Inventory',
      count: '847',
    },
    {
      id: 'messages',
      icon: MessageSquare,
      label: 'Messages',
      badge: '12',
    },
    {
      id: 'calendar',
      icon: Calendar, 
      label: 'Calendar',
    },
    {
      id: 'reports-file',
      icon: FileText,
      label: 'Reports',
    },
    {
      id: 'settings',
      icon: Settings,
      label: 'Settings',
      path: '/settings'
    },
  ];

  return (
   
    <div className={`${collapsed ? 'w-20' : 'w-72'} min-h-screen bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col relative z-10 transition-all duration-300`}>
      
      {/* LOGO */}
      <div className='p-6'>
        <div className='flex items-center space-x-3'>
          <div className='w-10 h-10 bg-linear-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shrink-0'>
            <Zap className='w-6 h-6 text-white' />
          </div>
          {!collapsed && (
            <div>
              <h1 className='text-xl font-bold text-slate-800 dark:text-white'>
                Nexus
              </h1>
              <p className='text-xs text-slate-500 dark:text-slate-400'>
                Admin Panel
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Navbar Navigation List */}
      <nav className='flex-1 p-4 space-y-1 overflow-y-auto'>
        {menuItems.map((item) => {
          const IconComponent = item.icon;
          const isExpanded = expandedItems.has(item.id);
          
          return (
            <div key={item.id} className="w-full">
              <button 
                className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-200 group font-medium text-sm
                  ${currentPage === item.id || item.active 
                    ? 'bg-blue-50 text-blue-600 dark:bg-blue-950/50 dark:text-blue-400' 
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/60 hover:text-slate-900 dark:hover:text-slate-200'
                  } `} 
                onClick={() => {
                  // FIX 1: Changed item.subitem to item.submenu
                  if (item.submenu) {
                    toggleExpanded(item.id);
                  } else {
                    onPageChange(item.id);
                  }
                }}
              >  {/* Conditional Rendering*/}
                <div className='flex items-center space-x-3 min-w-0'>
                  <IconComponent className='w-5 h-5 shrink-0' />
                  <>
                  {!collapsed && <span className='font-medium truncate'>{item.label}</span>}
                  
                  {!collapsed && item.badge && (
                    <span className='px-2 py-0.5 text-xs font-semibold uppercase tracking-wider bg-blue-100 dark:bg-blue-900/60 text-blue-600 dark:text-blue-400 rounded-md'>
                      {item.badge}
                    </span>
                  )}
                  {!collapsed && item.count && (
                    <span className='px-2 py-0.5 text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 rounded-md'>
                      {item.count}
                    </span>
                  )}
                   </>
                </div>

                {!collapsed && item.submenu && (
                  <ChevronDown className={`w-4 h-4 text-slate-400 dark:text-slate-500 group-hover:text-slate-600 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
                )} 
              </button>

              {/* Submenu rendering */}
              {!collapsed && item.submenu && isExpanded && (
                <div className='ml-9 mt-1 space-y-1 border-l border-slate-100 dark:border-slate-800 pl-3'>
                  {item.submenu.map((subitem) => (
                    <button 
                      key={subitem.id}
                      onClick={() => onPageChange(subitem.id)}
                      className={`w-full text-left p-2 rounded-lg text-sm transition-all duration-150 font-medium
                        ${currentPage === subitem.id 
                          ? 'text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-950/20' 
                          : 'text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/40 hover:text-slate-900 dark:hover:text-slate-200'
                        }`}
                    >
                      {subitem.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      {/* User Profile */}
      {!collapsed && (
        <div className='p-4'>
          <div className='flex items-center space-x-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 transition-colors'>
            <img 
              src='https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces'
              alt='user' 
              className='w-10 h-10 rounded-full object-cover ring-2 ring-blue-500'  
            />
            <div className='flex-1 min-w-0'>
              <p className='text-sm font-medium text-slate-800 dark:text-slate-200 truncate'>
                Alex Johnson
              </p>
              <p className='text-xs text-slate-500 dark:text-slate-400 truncate'>
                Administrator
              </p>
            </div>
          </div>
        </div>
      )}
      
    </div>
  )
}

export default Sidebar