// Node 2: Emotion Detection
export function detectEmotion(text) {
  const emotions = {
    joy: ['happy', 'grateful', 'joy', 'excited', 'love'],
    sadness: ['sad', 'lonely', 'tired', 'lost', 'depressed'],
    anger: ['mad', 'angry', 'frustrated', 'furious', 'hate'],
    fear: ['scared', 'anxious', 'nervous', 'afraid'],
    peace: ['calm', 'relieved', 'free', 'okay'],
  };

  const lowered = text.toLowerCase();
  for (const [emotion, keywords] of Object.entries(emotions)) {
    for (const word of keywords) {
      if (lowered.includes(word)) {
        return emotion;
      }
    }
  }

  return 'neutral';
}
