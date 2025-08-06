from heartbeat import check_pulse
from flask import Flask, request, jsonify
from datetime import datetime

app = Flask(__name__)
emotional_log = []

@app.route('/breathe', methods=['POST'])
def breathe():
    data = request.json
    if not data or 'input' not in data:
        return jsonify({"error": "Missing 'input'"})
    
    input_text = data['input']
    timestamp = datetime.utcnow().isoformat()

    emotional_log.append({'input': input_text, 'timestamp': timestamp})
    print(f"[{timestamp}] User Breathed: {input_text}")

    return jsonify({"message": "Breath received", "timestamp": timestamp})

@app.route('/heartbeat', methods=['GET'])
def heartbeat():
    return jsonify({"message": check_pulse()})

if __name__ == '__main__':
    app.run(port=5001)
