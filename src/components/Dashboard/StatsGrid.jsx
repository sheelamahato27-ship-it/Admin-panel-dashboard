import { ArrowDownRight, ArrowUpRight, DollarSign, Eye, ShoppingCart, Users } from 'lucide-react';
import React from 'react';

const StatsGrid = () => {
    const stats = [
        {
            title: 'Total Revenue',
            value: '$124,563',
            change: '+12.5%',
            trend: 'up',
            icon: DollarSign,
            color: 'from-emerald-500 to-teal-600', 
            bgColor: 'bg-emerald-50 dark:bg-emerald-900/50',
            textColor: 'text-emerald-600 dark:text-emerald-400',
        },
        {
            title: 'Active users',
            value: '8,549',
            change: '+8.2%',
            trend: 'up',
            icon: Users,
            color: 'from-blue-500 to-indigo-600', 
            bgColor: 'bg-blue-50 dark:bg-blue-900/50',
            textColor: 'text-blue-600 dark:text-blue-400',
        },
        {
            title: 'Total Orders',
            value: '2,847',
            change: '+15.3%',
            trend: 'up',
            icon: ShoppingCart,
            color: 'from-purple-500 to-pink-600', 
            bgColor: 'bg-purple-50 dark:bg-purple-900/50', 
            textColor: 'text-purple-600 dark:text-purple-400', 
        },
        {
            title: 'Page Views',
            value: '45,892',
            change: '-2.1%',
            trend: 'down',
            icon: Eye,
            color: 'from-orange-500 to-red-600', 
            bgColor: 'bg-orange-50 dark:bg-orange-900/50', 
            textColor: 'text-orange-600 dark:text-orange-400', 
        },
    ];

    return (
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4 w-full'>
            {stats.map((stat, index) => { 
                // warm_greeting Store the component icon in a capitalized reference variable
                const IconComponent = stat.icon;

                return (
                    <div 
                        className='bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-6
                        border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl 
                        transition-all duration-300 group flex flex-col justify-between w-full min-w-0'
                        key={index}
                    > 
                        <div className='flex items-start justify-between gap-2'> 
                            <div className='flex-1 min-w-0'>
                                <p className='text-[11px] sm:text-xs font-medium text-slate-500 dark:text-slate-400 mb-1 sm:mb-2 uppercase tracking-wider truncate'>
                                    {stat.title}
                                </p>
                                <p className='text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white mb-3 sm:mb-4 tracking-tight truncate'>
                                    {stat.value}
                                </p>
                                <div className='flex items-center flex-wrap gap-1 sm:space-x-2 sm:gap-0'>
                                    <div className="flex items-center space-x-0.5">
                                        {stat.trend === 'up' ? (
                                            <ArrowUpRight className='w-3.5 h-3.5 text-emerald-500 shrink-0' />
                                        ) : (
                                            <ArrowDownRight className='w-3.5 h-3.5 text-red-500 shrink-0' />
                                        )}
                                        <span className={`text-xs font-bold ${stat.trend === 'up' ? 'text-emerald-500' : 'text-red-500'}`}>
                                            {stat.change}
                                        </span>
                                    </div>
                                    <span className='text-[11px] sm:text-xs text-slate-400 dark:text-slate-500 whitespace-nowrap'>
                                        vs Last Month
                                    </span>
                                </div>
                            </div>

                            {/* Render using the normalized capital component reference */}
                            <div className={`p-2.5 sm:p-3 rounded-xl ${stat.bgColor} group-hover:scale-105 transition-all duration-300 shrink-0`}>
                                <IconComponent className={`w-5 h-5 sm:w-6 sm:h-6 ${stat.textColor}`}/>
                            </div>
                        </div>

                        {/* ProgressBar */}
                        <div className='mt-4 h-1.5 sm:h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden'> 
                            <div 
                                className={`h-full bg-linear-to-r ${stat.color} rounded-full transition-all duration-300`} 
                                style={{ width: stat.trend === 'up' ? '75%' : '45%' }}
                            />
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default StatsGrid;