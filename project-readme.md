# Full Stack Application Setup Guide

This project consists of a React frontend in the `my-app` directory and a Flask backend in the `server` directory.

## Prerequisites

- Node.js (v16 or higher)
- Python (v3.8 or higher)
- npm or yarn package manager
- pip (Python package manager)

## Frontend Setup (React)

1. Navigate to the frontend directory:
   ```bash
   cd my-app
   ```

2. Install dependencies:
   ```bash
   npm install
   # or if you're using yarn
   yarn install
   ```

3. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```

The React application will run on `http://localhost:3000`

## Backend Setup (Flask)

1. Navigate to the backend directory:
   ```bash
   cd server
   ```

2. Create a virtual environment:
   ```bash
   # Windows
   python -m venv venv
   .\venv\Scripts\activate

   # macOS/Linux
   python3 -m venv venv
   source venv/bin/activate
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

   If requirements.txt is not present, create one with:
   ```bash
   pip freeze > requirements.txt
   ```

4. Start the Flask server:
   ```bash
   # Windows
   python app.py
   # or
   flask run

   # macOS/Linux
   python3 app.py
   # or
   flask run
   ```

The Flask backend will run on `http://localhost:5000`

## Running the Full Stack Application

1. First, start the Flask backend server
2. Then, in a separate terminal, start the React frontend
3. Make sure both servers are running simultaneously

## Common Issues and Solutions

1. Port already in use:
   - For React: Change port by using `PORT=3001 npm start`
   - For Flask: Change port in `app.py` or use `flask run -p 5001`

2. CORS issues:
   - Ensure CORS is properly configured in the Flask backend
   - Check if API urls in React are correctly pointing to the backend

3. Dependencies not found:
   - Run `npm install` in frontend directory
   - Run `pip install -r requirements.txt` in backend directory

## Project Structure

```
project-root/
├── my-app/             # React frontend
│   ├── src/
│   ├── public/
│   └── package.json
│
└── server/             # Flask backend
    ├── app.py
    ├── requirements.txt
    └── venv/
```

## Additional Notes

- Make sure you have the correct versions of Node.js and Python installed
- Always activate the virtual environment before running the Flask server
- Check the console/terminal for any error messages if either application fails to start
- The frontend and backend must both be running for the full application to work properly
