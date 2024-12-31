import React from 'react';

const Output = ({ content }) => {
  return (
    <div
      className="bg-dark text-white p-2"
      style={{
        height: '100%',
        width: '100%',
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <h5>Output</h5>
      <iframe
        title="Output"
        srcDoc={content}
        sandbox="allow-scripts"
        style={{ width: '100%', height: '90%' }}
      />
    </div>
  );
};

export default Output;
