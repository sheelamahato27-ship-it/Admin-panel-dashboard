import React from 'react'
import StatsGrid from './StatsGrid'
import ChartSection from './ChartSection'
import TableSection from './TableSection'
import ActivityFeed from './ActivityFeed'

const Dashbboard = () => {
  return (
    <div className='space-y-6'>
      {/*Stats grid */}
      <StatsGrid />
      {/* charts section */}
      <ChartSection />
      <div className='grid grid-cols-1 xl:grid-cols-3 gap-6'>
        <div className='xl:col-span-2'>
          <TableSection />

        </div>

      </div>
      <ActivityFeed />
    </div>
  )
}

export default Dashbboard
