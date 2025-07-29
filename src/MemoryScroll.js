import React from 'react';

function MemoryScroll({ memoryLog }) {
  return (
    <div style={{
      marginTop: '2rem',
      maxHeight: '200px',
      overflowY: 'scroll',
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '1rem',
      backgroundColor: '#f9f9f9'
    }}>
      <h3>Past Reflections</h3>
      {memoryLog.length === 0 && <p>No reflections yet.</p>}
      {memoryLog.map((entry, index) => (
        <div key={index} style={{
          marginBottom: '1rem',
          backgroundColor: entry.color,
          padding: '0.5rem',
          borderRadius: '4px'
        }}>
          <strong>Reflection:</strong> {entry.message}
        </div>
      ))}
    </div>
  );
}

export default MemoryScroll;
