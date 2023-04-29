import React from 'react'
import DashboardDataComponent from '../../../../components/DashboardDataComponent'

function DashboardData() {
  return (
    <>
    <div className='flex flex-wrap'>
          <DashboardDataComponent heading="Parcels" percentageColor='#6EFF56'/>
          <DashboardDataComponent heading="Title Here" image="dollarSign" percentageColor='#6EFF56'/>
          <DashboardDataComponent heading="Title Here" percentageColor='#6EFF56'/>
        
      </div>
    </>
  )
}

export default DashboardData