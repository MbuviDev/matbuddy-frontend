import React from 'react'
import DashboardDataComponent from '../../../../components/DashboardDataComponent'

function DashboardData() {
  return (
    <>
    <div className='flex flex-wrap bg-green-500 rounded-2xl bg-opacity-20'>
          <DashboardDataComponent heading="AFYA CENTRE Parcel Stats" percentageColor='#6EFF56' image="user"/>
          <DashboardDataComponent heading="AFYA CENTRE Station Summary" image="user" percentageColor='#6EFF56'/>

        
      </div>
    </>
  )
}

export default DashboardData