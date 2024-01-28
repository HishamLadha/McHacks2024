import React, { useEffect, useState } from 'react';

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import ProgressBar from '../components/ProgressBar';
import NetworkCard from '../components/NetworkCard';



export const Network = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [machines, setMachines] = useState({});
    // {'192.168.17.130': [
    //   [[21, '2.3.4', 'exploit/unix/ftp/vsftpd_234_backdoor', '']],
    //    [[5432, '8.3.0 - 8.3.7', 'exploit/linux/postgres/postgres_payload', 'LHOST']]
    // ]}

    // const renderMachines = machines.map((item, index) => (
    //   <NetworkCard ipAddress={i.status} vm_name={item.name} vm_path={item.path} vm_ip={item.ip} vm_os={item.os}></VMCard>
  // ))

    useEffect(() => {
      axios.get("/machines")
      .then((data) => {
        console.log(data);
      })
    }, []);

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
          <NetworkCard ipAddress={"192.168.0.1"} osVersion={"linux"} macAddress={"2132131"} ports={[{21:"vsftpd 2.3.4"}, {22:"OpenSSH 4.7p1 Debian 8ubuntu1 (protocol 2.0)"}, {21:"vsftpd 2.3.4"}, {21:"vsftpd 2.3.4"}, {21:"vsftpd 2.3.4"} ]}  />
          <NetworkCard ipAddress={"192.168.0.1"} osVersion={"linux"} macAddress={"2132131"} ports={[{21:"vsftpd 2.3.4"}, {22:"OpenSSH 4.7p1 Debian 8ubuntu1 (protocol 2.0)"},{21:"vsftpd 2.3.4"}, {21:"vsftpd 2.3.4"}, {21:"vsftpd 2.3.4"} ]}  />
          <NetworkCard ipAddress={"192.168.0.1"} osVersion={"linux"} macAddress={"2132131"} ports={[]}  />
        
        </div>
        {/* <ProgressBar/> */}
      </div>

    </main>


  </div>
</div>
  )
}
