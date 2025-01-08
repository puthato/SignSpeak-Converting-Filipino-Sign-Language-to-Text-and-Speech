import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ThirdPage() {
  const [translatedText, setTranslatedText] = useState('');
  const navigate = useNavigate(); // React Router hook for navigation

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(to top, green, white)',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <div
        style={{
          background: 'rgba(0, 100, 0, 0.8)', // Dark green box
          width: '600px',
          height: '500px',
          borderRadius: '15px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          padding: '20px',
          textAlign: 'center',
        }}
      >
        {/* Camera Box */}
        <div
          style={{
            width: '90%',
            height: '300px',
            border: '2px solid white',
            borderRadius: '10px',
            marginBottom: '20px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'black',
            color: 'white',
          }}
        >
          {/* Placeholder for Camera */}
          <p>Camera Feed</p>
        </div>

        {/* Text Box for Translated Text */}
        <div
          style={{
            width: '90%',
            height: '100px',
            border: '2px solid white',
            borderRadius: '10px',
            padding: '10px',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            color: 'black',
            textAlign: 'left',
            overflowY: 'auto',
            marginBottom: '20px',
          }}
        >
          {translatedText || 'Translation will appear here...'}
        </div>

        {/* Navigation Buttons */}
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '90%' }}>
          {/* Back Button */}
          <button
            style={{
              backgroundColor: 'white',
              color: 'green',
              border: '2px solid white',
              borderRadius: '10px',
              padding: '10px 20px',
              fontSize: '16px',
              cursor: 'pointer',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              transition: 'background-color 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'green';
              e.target.style.color = 'white';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'white';
              e.target.style.color = 'green';
            }}
            onClick={() => navigate('/second')} // Navigate back to the second page
          >
            Back
          </button>

          {/* Continue Button (Optional Placeholder for Future Use) */}
          <button
            style={{
              backgroundColor: 'green',
              color: 'white',
              border: '2px solid white',
              borderRadius: '10px',
              padding: '10px 20px',
              fontSize: '16px',
              cursor: 'pointer',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              transition: 'background-color 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'darkgreen';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'green';
            }}
            onClick={() => alert('Continue functionality here!')} // Placeholder for next action
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default ThirdPage;
