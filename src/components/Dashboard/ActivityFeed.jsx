import { Bell, Clock, CreditCard, Settings, ShoppingCart, User } from 'lucide-react'
import React from 'react'

const ActivityFeed = () => {
   
    const activities = [
        {
            id: 1,
            type: 'user',
            icon: User,
            title: "New user registered",
            description: 'John Smith created an account',
            color: 'text-blue-500',
            time: '2 minutes ago',
            bgColor: 'bg-blue-100 dark:bg-blue-900',
        },
        {
            id: 2,
            type: 'order',
            icon: ShoppingCart,
            title: 'New order received',
            description: 'order #3847 for $2,399',
            time: '5 minutes ago',
            color: 'text-emerald-500',
            bgColor: 'bg-emerald-100 dark:bg-emerald-900',
        },
        {
            id: 3,
            type: 'payment',
            icon: CreditCard,
            title: 'Payment processed', 
            description: 'payment of $1,999 completed',
            time: '12 minutes ago',
            color: 'text-purple-500', 
            bgColor: 'bg-purple-100 dark:bg-purple-900',
        },
        {
            id: 4,
            type: 'system',
            icon: Settings,
            title: 'System Update',
            description: 'Database backup completed',
            time: '1 hour ago',
            color: 'text-orange-500',
            bgColor: 'bg-orange-100 dark:bg-orange-900',
        },
        {
            id: 5,
            type: 'notification',
            icon: Bell,
            title: 'Low stock alert',
            description: 'iPhone 15 pro stock is low',
            time: '2 hours ago',
            color: 'text-red-500',
            bgColor: 'bg-red-100 dark:bg-red-900', 
        },
    ];

    return (
        <div className='bg-white dark:bg-slate-900 backdrop-blur-xl border border-slate-200 rounded-2xl dark:border-slate-700'>
            <div className='p-6 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center'>
                <div>
                    <h3 className='text-lg font-bold text-slate-800 dark:text-white'>
                        Activity Feed
                    </h3>
                    <p className='text-sm text-slate-500 dark:text-slate-400'>
                        Recent System Activities
                    </p>
                </div>
                <button className='text-blue-600 hover:text-blue-700 text-sm font-medium'>
                    View All
                </button>
            </div>
            <div className='p-6'>
                <div className='space-y-4'>
                    
                    {activities.map((activity) => {
                       
                        const IconComponent = activity.icon;

                        return (
                            
                            <div className='flex items-center space-x-4 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors' key={activity.id}>
                                
                                {/* Dynamically applied color, bgColor, and rendered the Icon */}
                                <div className={`p-2 rounded-lg ${activity.bgColor} `}>
                                    <activity.icon className={`w-5 h-5 ${activity.color}`} />
                                </div>

                                <div className='flex-1 min-w-0'>
                                    <h1 className='text-sm font-semibold text-slate-800 dark:text-white'>
                                        {activity.title}
                                    </h1>
                                    <p className='text-sm text-slate-600 dark:text-slate-400 truncate'>
                                        {activity.description}
                                    </p>
                                   
                                    <div className='flex items-center space-x-1 mt-1'>
                                        <Clock className='w-3 h-3 text-slate-400' />
                                        <span className='text-xs text-slate-500 dark:text-slate-400'>
                                            {activity.time}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default ActivityFeed