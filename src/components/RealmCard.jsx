import React from 'react';

export default function RealmCard({ data }) {
  return (
    <div className={`realm-card ${data.color}`}>
      <p className="tagline">{data.tagline}</p>
      <div className="realm-icon">{data.icon}</div>
      <h2 className="realm-name">{data.name}</h2>
      <button className="enter-button">Enter</button>
    </div>
  );
}
