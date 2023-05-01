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
    <div className='bg-gray-300'>
      <h1 class="font- text-2xl">Dashboard </h1>
      <NewParcel/>
      <DashboardData/>
    </div>
  )
}

export default Dashboard