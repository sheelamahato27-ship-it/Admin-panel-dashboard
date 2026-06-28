import { MoreHorizontal, TrendingDown, TrendingUp, ArrowUpDown, ArrowUp, ArrowDown } from 'lucide-react'
import React, { useState, useMemo } from 'react'

const TableSection = () => {
    const [recentOrders, setRecentOrders] = useState([
        { id: '#3847', customer: 'John Smith', product: 'Macbook pro 15', amount: '$2,399', status: 'completed', date: '2024-01-15' },
        { id: '#3848', customer: 'Johny Depp', product: 'Iphone 15 pro', amount: '$1,199', status: 'pending', date: '2024-01-15' },
        { id: '#3849', customer: 'Edward Elric', product: 'Airpods pro', amount: '$249', status: 'completed', date: '2024-01-14' },
        { id: '#3850', customer: 'Roy Mustang', product: 'Ipad Air', amount: '$599', status: 'cancelled', date: '2024-01-14' },
    ]);

    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

    const topProducts = [
        { name: 'Macbook Pro 16', sales: 1247, revenue: '$2,987,538', trend: 'up', change: '+12%' },
        { name: 'Iphone 13 pro', sales: 2156, revenue: '$2,587,044', trend: 'up', change: '+8%' },
        { name: 'Airpods pro', sales: 3421, revenue: '$852,229', trend: 'down', change: '-3%' },
        { name: 'Ipad Air', sales: 987, revenue: '$591,213', trend: 'up', change: '+15%' },
    ];

    const sortedOrders = useMemo(() => {
        let sortableItems = [...recentOrders];
        if (sortConfig.key !== null) {
            sortableItems.sort((a, b) => {
                let aValue = a[sortConfig.key];
                let bValue = b[sortConfig.key];

                if (sortConfig.key === 'amount') {
                    aValue = parseFloat(a.amount.replace(/[^0-9.-]+/g, ""));
                    bValue = parseFloat(b.amount.replace(/[^0-9.-]+/g, ""));
                }

                if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1;
                if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1;
                return 0;
            });
        }
        return sortableItems;
    }, [recentOrders, sortConfig]);

    const requestSort = (key) => {
        let direction = 'asc';
        if (sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig({ key, direction });
    };

    const getSortIcon = (key) => {
        if (sortConfig.key !== key) {
            return <ArrowUpDown className="w-3.5 h-3.5 ml-1.5 opacity-40 group-hover:opacity-100 transition-opacity" />;
        }
        return sortConfig.direction === 'asc' 
            ? <ArrowUp className="w-3.5 h-3.5 ml-1.5 text-blue-500" />
            : <ArrowDown className="w-3.5 h-3.5 ml-1.5 text-blue-500" />;
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'completed':
                return 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-400';
            case 'pending':
                return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-400';
            case 'cancelled':
                return 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-400';
            default:
                return 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-400';
        }
    }

    return (
        <div className='space-y-6 w-full min-w-0'>
            {/* Unified Order Table Container */}
            <div className='bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm w-full'>
                <div className='p-4 sm:p-6 border-b border-slate-200 dark:border-slate-700'>
                    <div className='flex items-center justify-between gap-2'>
                        <div>
                            <h3 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white">Recent Orders</h3>
                            <p className='text-xs sm:text-sm text-slate-500 dark:text-slate-400'>Latest customer transactions</p>
                        </div>
                        <button className='text-blue-600 hover:text-blue-700 text-xs sm:text-sm font-medium whitespace-nowrap'>View All</button>
                    </div>
                </div>

                {/* Secure horizontal scrolling window */}
                <div className='overflow-x-auto w-full block sscrollbar-thin'>
                    {/* warm_greeting Swapped broken min-w-150 to valid explicit pixel min-width */}
                    <table className='w-full text-left border-collapse min-w-162.5'>
                        <thead>
                            <tr className='border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50'>
                                <th onClick={() => requestSort('id')} className='p-4 text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-300 cursor-pointer select-none group'>
                                    <div className="flex items-center">Order ID {getSortIcon('id')}</div>
                                </th>
                                <th onClick={() => requestSort('customer')} className='p-4 text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-300 cursor-pointer select-none group'>
                                    <div className="flex items-center">Customer {getSortIcon('customer')}</div>
                                </th>
                                <th onClick={() => requestSort('product')} className='p-4 text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-300 cursor-pointer select-none group'>
                                    <div className="flex items-center">Product {getSortIcon('product')}</div>
                                </th>
                                <th onClick={() => requestSort('amount')} className='p-4 text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-300 cursor-pointer select-none group'>
                                    <div className="flex items-center">Amount {getSortIcon('amount')}</div>
                                </th>
                                <th onClick={() => requestSort('status')} className='p-4 text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-300 cursor-pointer select-none group'>
                                    <div className="flex items-center">Status {getSortIcon('status')}</div>
                                </th>
                                <th onClick={() => requestSort('date')} className='p-4 text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-300 cursor-pointer select-none group w-32'>
                                    <div className="flex items-center">Date {getSortIcon('date')}</div>
                                </th>
                                <th className='p-4 w-10'></th>
                            </tr>
                        </thead>
                        <tbody>
                            {sortedOrders.map((order, index) => (
                                <tr key={order.id || index} className='border-b border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors'>
                                    <td className='p-4 text-xs sm:text-sm'>
                                        <span className='font-medium text-blue-600 dark:text-blue-400'>{order.id}</span>
                                    </td>
                                    <td className='p-4 text-xs sm:text-sm'>
                                        <span className='text-slate-800 dark:text-slate-200'>{order.customer}</span>
                                    </td>
                                    <td className='p-4 text-xs sm:text-sm'>
                                        <span className='text-slate-800 dark:text-slate-200'>{order.product}</span>
                                    </td>
                                    <td className='p-4 text-xs sm:text-sm'>
                                        <span className='text-slate-800 dark:text-slate-200'>{order.amount}</span>
                                    </td>
                                    <td className='p-4 text-xs sm:text-sm'>
                                        <span className={`text-[10px] sm:text-xs px-2 py-0.5 sm:py-1 rounded-full font-medium ${getStatusColor(order.status)}`}>
                                            {order.status}
                                        </span>
                                    </td>
                                    <td className='p-4 text-xs sm:text-sm whitespace-nowrap'>
                                        <span className='text-slate-800 dark:text-slate-200'>{order.date}</span>
                                    </td>
                                    <td className='p-4 text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 cursor-pointer'>
                                        <MoreHorizontal className='w-4 h-4' />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Top Products View Card */}
            <div className='bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm w-full'>
                <div className='p-4 sm:p-6 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center gap-2'>
                    <div>
                        <h3 className='text-base sm:text-lg font-bold text-slate-800 dark:text-white'>Top Products</h3>
                        <p className='text-xs sm:text-sm text-slate-500 dark:text-slate-400'>Best performing items</p>
                    </div>
                    <button className='text-blue-600 hover:text-blue-700 text-xs sm:text-sm font-medium whitespace-nowrap'>View All</button>
                </div>
                <div className='p-4 sm:p-6 space-y-3 sm:space-y-4'>
                    {topProducts.map((product, index) => (
                        <div className='flex items-center justify-between p-3 sm:p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors gap-2' key={index}>
                            <div className='flex-1 min-w-0'>
                                <h4 className='text-xs sm:text-sm font-semibold text-slate-800 dark:text-white truncate'>{product.name}</h4>
                                <p className='text-[11px] sm:text-xs text-slate-500 dark:text-slate-400'>{product.sales} orders</p>
                            </div>
                            <div className='text-right shrink-0'>
                                <p className='text-xs sm:text-sm font-semibold text-slate-800 dark:text-white'>{product.revenue}</p>
                                <div className='flex items-center space-x-1 justify-end'>
                                    {product.trend === 'up' ? <TrendingUp className='w-3 h-3 text-emerald-500' /> : <TrendingDown className='w-3 h-3 text-red-500' />}
                                    <span className={`text-[11px] sm:text-xs font-medium ${product.trend === 'up' ? 'text-emerald-500' : 'text-red-500'}`}>{product.change}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TableSection;