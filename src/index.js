import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Assuming your main App component is in App.js
import './index.css'; // This is a placeholder for a basic CSS file

// The entry point for your React application.
// This code finds the 'root' div in index.html and renders the App component inside it.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // The <React.StrictMode> tag helps find and warn about potential issues.
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Note: You can also include a reportWebVitals function here if you are using that feature.
// reportWebVitals();