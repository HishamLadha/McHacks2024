import React from 'react';
import { useState } from 'react';

function PortCard({ port, service }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <div className="bg-gray-100 rounded-lg p-2 flex justify-between items-center">
        <div className="text-gray-700 font-medium truncate w-5/6" onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>{port} - {service}</div>
        {isHovered && (
        <div className="absolute w-auto px-2 py-1 bg-black text-white text-xs rounded shadow-lg -translate-y-full left-1/2 transform -translate-x-1/2 z-10">
          {service}
        </div>
      )}
        <button className="text-xs text-white bg-orange-400 hover:bg-orange-600 rounded px-2 py-1">
            🕹️
        </button>
      </div>
    );
  }

function NetworkCard({ ipAddress, osVersion, macAddress, ports }) {
    const [showPorts, setShowPorts] = useState(false); // State to control the visibility of the port cards
    let linux = false;
    
    if(osVersion.toLowerCase() == "linux"){
        linux = true;
    } 
    const togglePorts = () => {
        setShowPorts(!showPorts); // Toggle the visibility
    };
  return (
    
    <div className="p-6 max-w-2xl mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
    <div className='shrink-0'>
      <img className="h-12 w-12" src={linux ? "https://upload.wikimedia.org/wikipedia/commons/f/f1/Icons8_flat_linux.svg" : "https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fencrypted-tbn0.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcSJkR6K8pXj2569lwyj-4y4aE0_h4xAUQxsIJiWkkLkZAj4IfzQFcHiFdc%26s&sp=1706417989T661fc04df1ccc2934fae6fcecd8be05c9e57bb25d8ac9c13181cb1e556cdbda6"} alt="OS version" />
    </div>
    <div className="flex-grow">
      <div className="text-lg font-bold text-black">IP address: <span className="text-gray-600 text-md font-medium">{ipAddress}</span></div>
      <div className="text-lg font-bold text-black">OS version: <span className="text-gray-600 text-md font-medium">{osVersion}</span></div>
      <div className="text-lg font-bold text-black">MAC address: <span className="text-gray-600 text-md font-medium">{macAddress}</span></div>
      <div className="flex justify-between items-center">
          
          <div className="text-lg font-bold text-black">
            Port list: 
          </div>
          {Object.entries(ports)[0] ? (<button
            onClick={togglePorts}
            className="text-xl text-gray-500 bg-transparent hover:bg-gray-100 rounded px-2 py-1"
          >
            {showPorts ? '⬆️' : '⬇️'}
          </button>) : <span className="text-gray-600 text-md font-medium px-2">No open ports 🙁</span>}
          
        </div>

        {showPorts && (
          <div className="grid grid-cols-2 gap-3">
            {ports.map((portObj, index) => {
              const [port, service] = Object.entries(portObj)[0];
              return <PortCard key={index} port={port} service={service} />;
            })}
          </div>
        )}

    </div>
    <div className="flex items-center">
    {Object.entries(ports)[0] ? <span className="block w-3 h-3 bg-green-500 rounded-full"></span> :  <span className="block w-3 h-3 bg-red-500 rounded-full mr-2"></span>}
     
      
    </div>

  </div>

  )
}

export default NetworkCard