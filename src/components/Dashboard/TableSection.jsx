import { MoreHorizontal, TrendingDown, TrendingUp } from 'lucide-react'
import React from 'react'

const TableSection = () => {

    const recentOrders = [
        {
            id:'#3847',
            customer:'John Smith',
            product:'Macbook pro 15',
            amount:'$2,399',
            status:'completed',
            date:'2024-01-15'
        },
        {
            id:'#3848',
            customer:'Johny Depp',
            product:'Iphone 15 pro',
            amount:'$1,199',
            status:'pending',
            date:'2024-01-15'
        },
        {
            id:'#3849',
            customer:'Edward Elric',
            product:'Airpods pro',
            amount:'$249',
            status:'completed',
            date:'2024-01-14'
        },
        {
            id:'#3850',
            customer:'Roy Mustang',
            product:'Ipad Air',
            amount:'$599',
            status:'cancelled',
            date:'2024-01-14'
        },
    ];
     const topProducts = [
        {
            name:'Macbook Pro 16',
            sales:1247 ,
            revenue:'$2,987,538' ,
            trend:'up' ,
            change: '+12%',

        },
        {
            name:'Iphone 13 pro',
            sales:2156 ,
            revenue:'$2,587,044' ,
            trend:'up' ,
            change:'+8%' ,

        },

        {
            name:'Airpods pro',
            sales:3421 ,
            revenue: '$852,229',
            trend:'down' ,
            change:'-3%' ,

        },

        {
            name:'Ipad Air',
            sales:987 ,
            revenue:'$591,213' ,
            trend:'up' ,
            change:'+15%' ,

        },
     ];

    const getStatusColor = (status) => {
        switch(status){
          case'completed':
            return 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900  dark:text-emerald-400';

          case'pending':
             return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-400';            
          
          case 'cancelled':
             return 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-400';
             
          default:
             return 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-400';   

        }

    }
  return (
    <div className='space-y-6'>
        {/* Recent Order Header */}
        <div className='bg-white dark:bg-slate-900 backdrop-blur-xl rounded-t-2xl border border-slate-200 dark:border-slate-700 overflow-hidden'>
            <div className='p-6 border-b border-slate-200 dark:border-slate-700'>
                <div className='flex items-center justify-between'>
                    <div>
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Recent Order</h3>
                        <p className='text-sm text-slate-500 dark:text-slate-400'>
                            Latest customer order
                        </p>
                    </div>
                    <button className='text-blue-600 hover:text-blue-700 text-sm font-medium'>
                        View All
                    </button>
                </div>
            </div>
        </div>

        {/* Table Content */}
        <div className='overflow-x-auto bg-white dark:bg-slate-900 rounded-b-2xl border-x border-b border-slate-200 dark:border-slate-700'>
            <table className='w-full text-left border-collapse'>
                <thead>
                    <tr className='border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50'>
                        <th className='p-4 text-sm font-semibold text-slate-600 dark:text-slate-300'>Order ID</th>
                        <th className='p-4 text-sm font-semibold text-slate-600 dark:text-slate-300'>Customer</th>
                        <th className='p-4 text-sm font-semibold text-slate-600 dark:text-slate-300'>Product</th>
                        <th className='p-4 text-sm font-semibold text-slate-600 dark:text-slate-300'>Amount</th>
                        <th className='p-4 text-sm font-semibold text-slate-600 dark:text-slate-300'>Status</th>
                        <th className='p-4 text-sm font-semibold text-slate-600 dark:text-slate-300 w-10'>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {recentOrders.map((order, index) => {
                        return    <tr className='border-b border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors'>
                        <td className='p-4' key={index}>
                            <span className='text-sm font-medium text-blue-600 dark:text-blue-400'>
                               {order.id}
                            </span>
                        </td>
                        <td className='p-4'>
                            <span className='text-sm text-slate-800 dark:text-slate-200'>
                               {order.customer}
                            </span>
                        </td>
                        <td className='p-4'>
                            <span className='text-sm text-slate-800 dark:text-slate-200'>
                              {order.product}
                            </span>
                        </td>
                        <td className='p-4'>
                            <span className='text-sm text-slate-800 dark:text-slate-200'>
                                {order.amount}
                            </span>
                        </td>
                        <td className='p-4'>
                            <span className={`text-xs px-2 py-1 rounded-full bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 font-medium 
                                ${getStatusColor(order.status)}`}>
                                {order.status}
                            </span>
                        </td>
                        <td className='p-4'>
                            <span className='text-sm text-slate-800 dark:text-slate-200'>
                                {order.date}
                            </span>
                        </td>
                        <td className='p-4 text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 cursor-pointer'>
                            <MoreHorizontal className='w-4 h-4' />
                        </td>
                    </tr>
                    })}
                </tbody>
            </table>
        </div>
        {/*Top products */}
        <div className='bg-white dark:bg-slate-900 backdrop-blur-xl rounded-2xlborder border-slate-200
        dark:border-slate-700 overflow-hidden'>
            <div className='p-6 border-b border-slate-200 dark:border-slate-700'>
                <div className='flex items-center justify-between'>
                    <div className='text-lg font-bold text-slate-800 dark:text-white'>
                        <h3 className='text-lg font-bold text-slate-800 dark:text-white'>
                            Top Products
                        </h3>
                    </div>
                    <p className='text-sm text-slate-500 dark:text-slate-400'>
                        Best performing products </p>
                </div>
                <button className='text-blue-600 hover:text-blue-700
                text-sm font-medium'>View All</button>
            </div>
            {/*Dynamic Data*/}
            <div className='p-6 space-y-4'>
           {topProducts.map((product, index) => {
             return  <div className='flex items-center justify-between p-4
            rounded-xl hover:bg-slate-50dark:hover:bg-slate-800 transition-colors'>
                <div className='flex-1'>
                    <h4 className='text-sm font-semibold text-slate-800 dark:text-white'>
                        {product.name}
                    </h4>
                    <p className='text-xs text-slate-50 dark:text-slate-400'>
                        {product.sales}
                    </p>

                </div>
                <div className='text-right'>
                    <p className='text-sm font-semibold text-slate-800 dark:text-white'>
                        {product.revenue}</p>
                        <div className='flex items-center space-x-1'>
                            {product.trend === 'up' ? (<TrendingUp className='w-3 h-3 text-emerald-500' />): (<TrendingDown className='w-3 h-3 text-red-500'/>) }
                            <span className={`text-xs font-medium ${product.trend === 'up' ? 
                                'text-emerald-500' : 'text-red-500'
                            }`}>{product.change}</span>
                        </div>

                </div>
            </div>
           })}
        </div>
        </div>
    </div>
  )
}

export default TableSection