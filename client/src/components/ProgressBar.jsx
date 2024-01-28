import React from 'react';

const ProgressBar = ({ progress }) => {
  return (
    <div className="w-full h-4 bg-blue-900 rounded-lg">
      <div
        className="h-full bg-blue-500 rounded-lg"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
