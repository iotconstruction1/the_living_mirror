from flask import Flask, request, jsonify
from datetime import datetime

app = Flask(__name__)
emotional_log = []

@app.route('/breathe', methods=['POST'])
def breathe():
    data = request.json
    if not data or 'input' not in data:
        return jsonify({"error": "Missing 'input' in request"}), 400

    input_text = data['input']
    timestamp = datetime.utcnow().isoformat()

    emotional_log.append({'input': input_text, 'timestamp': timestamp})

    print(f"[{timestamp}] User Breathed: {input_text}")

    return jsonify({"message": "Breath received", "timestamp": timestamp}), 200

if __name__ == '__main__':
    app.run(port=5001)
