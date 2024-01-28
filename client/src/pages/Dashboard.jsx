import React, { useState } from 'react';

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import InputForm from '../components/InputForm';
import axios from "axios";

function Dashboard() {

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [ipRange, setIpRange] = useState("");

  const handleScan = (ev) => {
    ev.preventDefault();
    try {

      axios.post("/scan",{
        ip_range: 
      })


    } catch (error) {
      console.log(error)
    }
    
  }

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

            {/* Cards */}

            <form action="" className='gap-4' onSubmit={handleScan}>
              <h4>Ip Range</h4>
              <input type="text"  value={ipRange} onChange={ev => setIpRange(ev.target.value)}/>
              <input type="submit" value="Scan" className='ml-4 p-4 rounded-md bg-blue-400'/>
            </form>
             
          

          </div>
        </main>


      </div>
    </div>
  );
}

export default Dashboard;