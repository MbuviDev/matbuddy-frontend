import React from 'react'
import DashboardDataComponent from '../../components/DashboardDataComponent'

function Dashboard() {
  return (
    <div className='flex flex-wrap'>
        <DashboardDataComponent heading="Title Here"/>
        <DashboardDataComponent heading="Title Here" image="dollarSign"/>
        <DashboardDataComponent heading="Title Here"/>
    </div>
  )
}

export default Dashboard