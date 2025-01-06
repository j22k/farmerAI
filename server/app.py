from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # This will enable CORS for all routes

@app.route('/')
def home():
    return "Hello, Flask!"

@app.route('/login', methods=['POST'])
def login():
    data = request.json
    print("Received request data:", data)  # Debug log

    if not data:
        return jsonify({"message": "Invalid request format"}), 400

    username = data.get('username')
    password = data.get('password')

    print(f"Received username: {username}")
    print(f"Received password: {password}")

    if username == 'admin' and password == 'password':
        return jsonify({"message": "Login successful"}), 200
    else:
        return jsonify({"message": "Invalid credentials"}), 401

if __name__ == '__main__':
    app.run(debug=True)