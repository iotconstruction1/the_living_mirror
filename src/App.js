import React, { useState } from 'react';

function App() {
  const [input, setInput] = useState('');
  const [mirrorResponse, setMirrorResponse] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const reflection = generateReflection(input);
    setMirrorResponse(reflection);
    setInput('');
  };

  const generateReflection = (text) => {
    // Node 1 Gateway logic — this can route to other nodes later
    return `You said: "${text}". Let's begin there.`;
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial', maxWidth: '600px', margin: 'auto' }}>
      <h1>The Living Mirror</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Reflect here..."
          rows="4"
          style={{ width: '100%', padding: '10px', fontSize: '1rem' }}
        />
        <button type="submit" style={{ marginTop: '1rem', padding: '10px 20px' }}>
          Reflect
        </button>
      </form>
      {mirrorResponse && (
        <div style={{ marginTop: '2rem', backgroundColor: '#f0f0f0', padding: '1rem', borderRadius: '8px' }}>
          <strong>Mirror:</strong> {mirrorResponse}
        </div>
      )}
    </div>
  );
}

export default App;
