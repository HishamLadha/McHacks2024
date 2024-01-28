import React, { useState } from 'react';

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import ProgressBar from '../components/ProgressBar';
import NetworkCard from '../components/NetworkCard';



export const Network = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

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
      <h1 className='flex justify-center text-2xl text-black font-bold pb-5'>Network Summary:</h1>
        <div className='grid lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-2 gap-6'>
          <NetworkCard ipAddress={"192.168.0.1"} osVersion={"87q9824"} macAddress={"2132131"} ports={[{21:"vsftpd 2.3.4"}, {22:"OpenSSH 4.7p1 Debian 8ubuntu1 (protocol 2.0)"},{21:"vsftpd 2.3.4"}, {21:"vsftpd 2.3.4"}, {21:"vsftpd 2.3.4"} ]}  />
          <NetworkCard ipAddress={"192.168.0.1"} osVersion={"87q9824"} macAddress={"2132131"} ports={[{21:"vsftpd 2.3.4"}, {22:"OpenSSH 4.7p1 Debian 8ubuntu1 (protocol 2.0)"}, {21:"vsftpd 2.3.4"}, {21:"vsftpd 2.3.4"}, {21:"vsftpd 2.3.4"} ]}  />
          <NetworkCard ipAddress={"192.168.0.1"} osVersion={"87q9824"} macAddress={"2132131"} ports={[{21:"vsftpd 2.3.4"}, {22:"OpenSSH 4.7p1 Debian 8ubuntu1 (protocol 2.0)"},{21:"vsftpd 2.3.4"}, {21:"vsftpd 2.3.4"}, {21:"vsftpd 2.3.4"} ]}  />
          <NetworkCard ipAddress={"192.168.0.1"} osVersion={"87q9824"} macAddress={"2132131"} ports={[{21:"vsftpd 2.3.4"}, {22:"OpenSSH 4.7p1 Debian 8ubuntu1 (protocol 2.0)"}, {21:"vsftpd 2.3.4"}, {21:"vsftpd 2.3.4"}, {21:"vsftpd 2.3.4"} ]}  />
        
        </div>
        {/* <ProgressBar/> */}
      </div>

    </main>


  </div>
</div>
  )
}
