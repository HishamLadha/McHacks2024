import React, { useState } from 'react';

function SessionsCard() {
  const [command, setCommand] = useState('');
  const [result, setResult] = useState('');

  const handleCommandChange = (event) => {
    setCommand(event.target.value);
  };

  const executeCommand = () => {
    // Placeholder for command execution logic
    setResult(`Executed command: ${command}`);
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-md">
      <h2 className="text-lg font-bold mb-4">IP address: 192.168.0.1</h2>
      <h2 className="text-lg font-bold mb-4">Machine name: server-name</h2>
      <div className="mb-4">
        <label className="text-lg font-bold">Command:</label>
        <div className="flex mt-1">
          <input
            type="text"
            value={command}
            onChange={handleCommandChange}
            className="flex-grow p-2 border rounded-l-lg"
            placeholder="Enter command"
          />
          <button
            onClick={executeCommand}
            className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded-r-lg"
          >
            🔍
          </button>
        </div>
      </div>
      <div>
        <label className="text-lg font-bold">Result:</label>
        <div className="mt-1 p-2 border rounded-lg bg-gray-50 h-32">
          {result}
        </div>
      </div>
    </div>
  );
}

export default SessionsCard;
