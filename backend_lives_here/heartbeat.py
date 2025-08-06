from flask import Flask

app = Flask(__name__)

@app.route('/')
def pulse():
    return "Node 1 is breathing."

if __name__ == '__main__':
    app.run(port=5001)
