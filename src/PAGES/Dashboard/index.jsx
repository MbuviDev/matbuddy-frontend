import React, { useState, useRef } from 'react'
import DashboardDataComponent from '../../components/DashboardDataComponent'
import TextInput from '../../components/InputComponents/textInput'
import NewParcel from './Features/NewParcel';
import DashboardData from './Features/DashboardData';

function Dashboard() {
  
  const input = useRef({ form: {}, err: {} });

  function handleSub(e){
    e.preventDefault();
    console.log(input)
  }
  
  return (
    <div className='bg-gray-50'>
      <DashboardData/>
      <NewParcel/>
    </div>
  )
}

export default Dashboard