import React from 'react'
import NewParcel from './Features/NewParcel';
import DashboardData from './Features/DashboardData';
import Page from '../../components/Page';
import ParcelsTable from './Features/ParcelsTable';

function Dashboard() {
  
  return (
    <Page>
      <h1 class="text-2xl">Dashboard </h1>
      <NewParcel/>
      <DashboardData/>
      <ParcelsTable/>
    </Page>
  )
}

export default Dashboard