import React, { useEffect, useState } from 'react';

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import ProgressBar from '../components/ProgressBar';
import NetworkCard from '../components/NetworkCard';
import axios from "axios";


export const Network = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [machines, setMachines] = useState([]);
    

    const renderMachines = machines.map((row, rowIndex) => (
      <NetworkCard ipAddress={row[0]} osVersion={"linux"}  macAddress={"00-B0-D0-63-C2-26"} data={row}></NetworkCard>
  ))


    useEffect(() => {
      axios.get("/machines")
      .then((res) => {
        setMachines(res.data.machines)
      })
    }, []);
    
    useEffect(() => {},[machines])

  return ( 
  <div className="flex h-screen overflow-hidden">

  {/* Sidebar */}
  <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

  {/* Content area */}
  <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

    {/*  Site header */}
    <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

    <main>
      
      <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
      <h1 className='flex justify-center text-2xl text-slate-800 dark:text-slate-300 font-bold pb-5'>Network Summary</h1>
        <div className='grid lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-2 gap-6'>
          
          <NetworkCard ipAddress={"192.168.0.1"} osVersion={"windows"} macAddress={"2132131"} ports={[{21:"vsftpd 2.3.4"}, {22:"OpenSSH 4.7p1 Debian 8ubuntu1 (protocol 2.0)"},{21:"vsftpd 2.3.4"}, {21:"vsftpd 2.3.4"}, {21:"vsftpd 2.3.4"} ]}  />
          {renderMachines}
        
        </div>
        {/* <ProgressBar/> */}
      </div>

    </main>


  </div>
</div>
  )
}
