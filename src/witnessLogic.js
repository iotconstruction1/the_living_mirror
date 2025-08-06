// src/witnessLogic.js

const emotionalLog = [];

export function recordToNode1(input) {
  const timestamp = new Date().toISOString();
  const entry = {
    input,
    timestamp,
    emotionalTone: detectEmotion(input),
  };
  emotionalLog.push(entry);
  console.log("[Node 1] Logged:", entry);
}

function detectEmotion(text) {
  if (!text) return "neutral";
  const lowered = text.toLowerCase();
  if (lowered.includes("hate") || lowered.includes("angry")) return "rage";
  if (lowered.includes("love") || lowered.includes("grateful")) return "joy";
  if (lowered.includes("lost") || lowered.includes("worthless")) return "shame";
  if (lowered.includes("help") || lowered.includes("lonely")) return "pain";
  return "neutral";
}export function getEmotionLog() {
  return emotionalLog;
}
