import React from 'react'
import RevenueChart from './RevenueChart'
import SalesChart from './SalesChart'

const ChartSection = () => {
  return (
    
    <div className='grid grid-cols-1 xl:grid-cols-3 gap-6 w-full'>
        
       
        <div className='xl:col-span-2 w-full min-w-0'>
            <RevenueChart />
        </div>
        
        
        <div className='space-y-6 w-full min-w-0'>
          <SalesChart />
        </div>
      
    </div>
  )
}

export default ChartSection