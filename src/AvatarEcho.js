function generateAvatarEcho(reflection, emotion, memoryHints = []) {
  let message = '';

  switch (emotion) {
    case 'happy':
      message = `😊 I'm glad that brought you peace.`;
      break;
    case 'sad':
      message = `💙 I hear the weight in that. You’re not alone.`;
      break;
    case 'angry':
      message = `🔥 I can feel the fire. Let’s focus it.`;
      break;
    case 'anxious':
      message = `🌙 Take a breath. You’re safe here.`;
      break;
    default:
      message = `🪞 I’m reflecting with you.`;
  }

  // If memory hints are available, weave them in
  if (memoryHints.length > 0) {
    message += `\nRemember this too: "${memoryHints[memoryHints.length - 1]}"`;
  }

  return message;
}

export default generateAvatarEcho;
