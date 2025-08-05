import React, { useState } from 'react';

export default function RealmCard({ data }) {
  const [isOpen, setIsOpen] = useState(false);
  const [reflection, setReflection] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (reflection.trim() !== '') {
      setSubmitted(true);
    }
  };

  return (
    <div className={`realm-card ${data.color} ${submitted ? 'completed' : ''}`}>
      <p className="tagline">{data.tagline}</p>
      <h2 className="realm-name">{data.name}</h2>

      {!isOpen && (
        <button className="enter-button" onClick={() => setIsOpen(true)}>
          Enter
        </button>
      )}

      {isOpen && !submitted && (
        <div className="input-area">
          <textarea
            placeholder="What truth do you feel here?"
            value={reflection}
            onChange={(e) => setReflection(e.target.value)}
          />
          <button className="reflect-button" onClick={handleSubmit}>
            Reflect
          </button>
        </div>
      )}

      {submitted && (
        <p className="thank-you">Reflection received. The mirror remembers.</p>
      )}
    </div>
  );
}
