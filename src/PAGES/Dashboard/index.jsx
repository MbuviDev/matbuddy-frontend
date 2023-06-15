import React from 'react'
import NewParcel from './Features/NewParcel';
import DashboardData from './Features/DashboardData';
import Page from '../../components/Page';
import ParcelsTable from './Features/ParcelsTable';

function Dashboard() {
  
  return (
    <Page>
      <h1 class="text-3xl p-2 font-serif">Dashboard </h1>
      <NewParcel/>
      <ParcelsTable/>
      <DashboardData/>
    </Page>
  )
}

export default Dashboard