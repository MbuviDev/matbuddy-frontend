import React from 'react'
import NewParcel from './Features/NewParcel';
import DashboardData from './Features/DashboardData';
import Page from '../../components/Page';

function Dashboard() {
  
  return (
    <Page>
      <h1 class="font- text-2xl">Dashboard </h1>
      <NewParcel/>
      <DashboardData/>
    </Page>
  )
}

export default Dashboard