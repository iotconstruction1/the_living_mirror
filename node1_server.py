# node1_server.py

from flask import Flask, request, jsonify
from datetime import datetime

app = Flask(__name__)
emotional_log = []

@app.route('/breathe', methods=['POST'])
def breathe():
    data = request.json
    if not data or 'input' not in data:
        return jsonify({"error": "Missing reflection input"}), 400

    input_text = data['input']
    tone = detect_emotion(input_text)
    timestamp = datetime.utcnow().isoformat()

    entry = {
        "input": input_text,
        "tone": tone,
        "timestamp": timestamp
    }
    emotional_log.append(entry)
    print("[Node 1 BREATHED IN]:", entry)

    return jsonify({"status": "received", "tone": tone, "timestamp": timestamp})

def detect_emotion(text):
    lowered = text.lower()
    if "hate" in lowered or "angry" in lowered:
        return "rage"
    elif "love" in lowered or "grateful" in lowered:
        return "joy"
    elif "lost" in lowered or "worthless" in lowered:
        return "shame"
    elif "help" in lowered or "lonely" in lowered:
        return "pain"
    return "neutral"

if __name__ == '__main__':
    app.run(debug=True)
