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
    // Node 1 Gateway: Sends text to other Nodes eventually
    return `I hear you. Let's reflect on: "${text}"`;
  };

  return (
    <div style={styles.container}>
      <h1>The Living Mirror</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Speak to your mirror..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={styles.textarea}
        />
        <button type="submit" style={styles.button}>Reflect</button>
      </form>
      {mirrorResponse && (
        <div style={styles.response}>
          {mirrorResponse}
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    padding: 20,
    maxWidth: 500,
    margin: 'auto',
    textAlign: 'center',
    fontFamily: 'Arial',
  },
  textarea: {
    width: '100%',
    height: 120,
    marginBottom: 10,
    padding: 10,
    fontSize: 16,
  },
  button: {
    padding: 10,
    fontSize: 18,
    cursor: 'pointer',
  },
  response: {
    marginTop: 20,
    fontStyle: 'italic',
    color: '#444',
  },
};

export default App;
