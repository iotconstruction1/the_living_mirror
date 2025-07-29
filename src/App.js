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
const [feedbackLog, setFeedbackLog] = useState([]);
const [avatarPersonality, setAvatarPersonality] = useState({
  warmth: 0.5,
  logic: 0.5,
  depth: 0.5
});
const generateReflection = (text) => {
  const memoryHints = getRecentMemories();
  const patternInsights = analyzePatterns(memoryHints);
  const mirrorNudge = generateMirrorNudge(patternInsights);
  const echo = generateAvatarEcho(text);
  return `${text}\n\n${echo}\n\n${mirrorNudge}`;
};
const adaptAvatarToFeedback = (entry) => {
  const { emotion, response } = entry;

  const updatedPersonality = { ...avatarPersonality };

  if (emotion === 'sad') updatedPersonality.warmth += 0.05;
  if (emotion === 'angry') updatedPersonality.logic += 0.05;
  if (response && response.includes('?')) updatedPersonality.depth += 0.03;

  Object.keys(updatedPersonality).forEach(key => {
    updatedPersonality[key] = Math.min(1, Math.max(0, updatedPersonality[key]));
  });

  setAvatarPersonality(updatedPersonality);
};
  const [input, setInput] = useState('');
  const [mirrorResponse, setMirrorResponse] = useState('');
const [emotionColor, setEmotionColor] = useState('#ffffff');
  const [memoryLog, setMemoryLog] = useState([]);
  const handleSubmit = (e) => {
    const speak = (message) => {
  const utterance = new SpeechSynthesisUtterance(message);
  utterance.rate = 1;
  utterance.pitch = avatarPersonality.warmth * 2; // personalize voice
  window.speechSynthesis.speak(utterance);
}

speak(tonedMessage);
    e.preventDefault();
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
    
  <div style={{
  backgroundColor: '#ffffff',
  border: '2px solid #aaa',
  padding: '1rem',
  marginTop: '1rem',
  borderRadius: '10px',
  boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
  width: '100%',
  maxWidth: '400px'
}}>
  <h3 style={{ marginBottom: '0.5rem' }}>Mirror State</h3>
  <p><strong>Warmth:</strong> {Math.round(avatarPersonality.warmth * 100)}%</p>
  <p><strong>Logic:</strong> {Math.round(avatarPersonality.logic * 100)}%</p>
  <p><strong>Depth:</strong> {Math.round(avatarPersonality.depth * 100)}%</p>
</div>
    </div>
    <MiniRitual emotion={emotionColor} />
  </>
)}
<MemoryScroll memoryLog={memoryLog} />
export default App;
