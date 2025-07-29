import { applyMirrorTone } from './nodes/mirrorTone';
import { storeMemory, getRecentMemories } from './nodes/AdaptiveMemory';
import { detectEmotion } from './nodes/emotionNode';import React, { useState } from 'react';

// Inside handleSubmit
function getEmotionColor(emotion) {
  switch (emotion) {
    case 'happy':
      return '#d4edda'; // light green
    case 'sad':
      return '#d1ecf1'; // soft blue
    case 'angry':
      return '#f8d7da'; // soft red
    case 'anxious':
      return '#fff3cd'; // pale yellow
    default:
      return '#ffffff'; // white
  }
}
function App() {
  const [input, setInput] = useState('');
  const [mirrorResponse, setMirrorResponse] = useState('');
const [emotionColor, setEmotionColor] = useState('#ffffff');
  const [memoryLog, setMemoryLog] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const reflection = generateReflection(input);
    setMirrorResponse(reflection);
    setInput('');
  };

const generateReflection = (text) => {
  const emotion = detectEmotion(text);
  setEmotionColor(getEmotionColor(emotion));
  const tonedMessage = applyMirrorTone(emotion, baseMessage);

  storeMemory(input, tonedMessage);
  const memoryHints = getRecentMemories();

  return tonedMessage;
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
