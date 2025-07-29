import React, { useState, useRef, useEffect } from 'react';
import generateAvatarEcho from './nodes/AvatarEcho';
import MemoryScroll from './nodes/MemoryScroll';
import MiniRitual from './nodes/MiniRitual';
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

}
function App() {
  const [avatarImage, setAvatarImage] = useState(null);
const fileInputRef = useRef(null);
  const handlePhotoUpload = (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onloadend = () => {
      setAvatarImage(reader.result); // store base64 image
    };
    reader.readAsDataURL(file);
  }
};
  const [input, setInput] = useState('');
  const [mirrorResponse, setMirrorResponse] = useState('');
const [emotionColor, setEmotionColor] = useState('#ffffff');
  const [memoryLog, setMemoryLog] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const generateReflection = (text) => {
  const emotion = detectEmotion(text);
  setEmotionColor(getEmotionColor(emotion));
  const tonedMessage = applyMirrorTone(emotion, baseMessage);
  const renderMemoryLog = () => {
  return memoryLog.slice().reverse().map((entry, index) => (
    <div
      key={index}
      style={{
        backgroundColor: '#f9f9f9',
        borderLeft: '4px solid #ccc',
        padding: '1rem',
        marginBottom: '1rem',
        borderRadius: '8px',
      }}
    >
      <p style={{ fontWeight: 'bold' }}>You:</p>
      <p>{entry.input}</p>
      <p style={{ fontWeight: 'bold', marginTop: '0.5rem' }}>Mirror:</p>
      <p>{entry.response}</p>
    </div>
  ));
};
    const reflection = generateReflection(input);
    setMirrorResponse(reflection);
    setInput('');
    
  };
  speakReflection(reflection);


  storeMemory(input, tonedMessage);
  const memoryHints = getRecentMemories();
const patternInsights = analyzePatterns(memoryLog);
const mirrorNudge = generateMirrorNudge(patternInsights.dominantEmotion);
  const echo = generateAvatarEcho(tonedMessage, emotion, memoryHints);
return `${tonedMessage}\n\n${echo}\n\n${mirrorNudge}`;
  
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
  <>
    <div style={{ marginTop: '2rem', backgroundColor: emotionColor }}>
      <strong>Mirror:</strong> {mirrorResponse}
    </div>
    <MiniRitual emotion={emotionColor} />
  </>
)}
<MemoryScroll memoryLog={memoryLog} />
export default App;
