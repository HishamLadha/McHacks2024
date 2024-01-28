import React, { useState } from 'react';

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import ProgressBar from '../components/ProgressBar';

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
<<<<<<< HEAD
    
=======
>>>>>>> 0407650d828a63ce693efc2cf173c1eb811687d1
        <ProgressBar/>
      </div>


    </main>


  </div>
</div>
  )
}
