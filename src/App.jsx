import React from 'react';
import RealmCard from './components/RealmCard';
import './styles.css';

const realmData = [
  {
    name: 'Realm of Echoed Emotion',
    tagline: 'The heart never lies… but it does whisper.',
    icon: '💓',
    color: 'emotion',
  },
  {
    name: 'Realm of Shifting Thought',
    tagline: 'What you believe becomes the map… or the cage.',
    icon: '🧠',
    color: 'thought',
  },
];

export default function App() {
  return (
    <div className="app-container">
      <h1 className="title">The Living Mirror</h1>
      <div className="realm-wrapper">
        {realmData.map((realm, index) => (
          <RealmCard key={index} data={realm} />
        ))}
      </div>
    </div>
  );
}
