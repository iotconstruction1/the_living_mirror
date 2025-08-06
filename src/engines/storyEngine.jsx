import React, { useState } from "react";
import { recordToNode1 } from "../witnessLogic";
import { recordToNode1, getEmotionLog } from "../witnessLogic";
export default function StoryEngine() {
  const [storyInput, setStoryInput] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = () => {
    if (!storyInput.trim()) return;

    recordToNode1(storyInput);

    const tone = storyInput.toLowerCase();
    let reply = "The mirror sees you.";
    if (tone.includes("lost")) reply = "You walk a foggy path, but there is light ahead.";
    else if (tone.includes("grateful")) reply = "Your soul reflects warmth and grace.";
    else if (tone.includes("hate")) reply = "Your mirror trembles with unresolved fire.";
    else if (tone.includes("hope")) reply = "Hope is a seed — water it.";

    setResponse(reply);
    setStoryInput("");
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-2">🌌 Begin Your Soul Journey</h2>
      <textarea
        value={storyInput}
        onChange={(e) => setStoryInput(e.target.value)}
        placeholder="Speak to the mirror..."
        className="w-full h-24 p-2 border rounded"
      />
      <button
        onClick={handleSubmit}
        className="mt-2 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
      >
        Reflect
      </button>

      {response && (
        <div className="mt-4 p-4 bg-gray-100 text-black rounded shadow">
          <p><strong>Mirror:</strong> {response}</p>
        </div>
      <div className="mt-4 text-sm text-gray-400">
  (Node 1 silently received your input.)
</div>
      <div className="mt-4 text-xs text-green-300">
  <pre>{JSON.stringify(getEmotionLog(), null, 2)}</pre>
</div>
      )}
    </div>
  );
}
