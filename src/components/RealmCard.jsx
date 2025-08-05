import React from 'react';

export default function RealmCard({ data }) {
  return (
    <div className={`realm-card ${data.color}`}>
      <p className="tagline">{data.tagline}</p>
      
      <h2 className="realm-name">{data.name}</h2>
      <button className="enter-button">Enter</button>
    </div>
  );
}
