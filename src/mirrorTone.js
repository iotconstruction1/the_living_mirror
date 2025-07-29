export function applyMirrorTone(emotion, message) {
  switch (emotion) {
    case 'sad':
      return `I'm with you. ${message}`;
    case 'angry':
      return `I can feel the heat. ${message}`;
    case 'happy':
      return `That's awesome! ${message}`;
    case 'anxious':
      return `You're not alone. ${message}`;
    case 'neutral':
    default:
      return message;
  }
}
