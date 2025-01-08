import React from 'react';
import { useNavigate } from 'react-router-dom';

function FirstPage() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(to top, green, white)',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <div
        style={{
          background: 'rgba(0, 100, 0, 0.8)',
          width: '400px',
          height: '350px',
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
        <h1 style={{ color: 'white', fontSize: '24px', marginBottom: '20px' }}>
          SignSpeak
        </h1>
        <img
          src="./images/phinmalogo.jpg"
          alt="Phinma Logo"
          style={{
            width: '150px',
            height: '150px',
            objectFit: 'cover',
            marginBottom: '20px',
          }}
        />
        <button
          style={{
            backgroundColor: 'white',
            color: 'green',
            border: '2px solid green',
            borderRadius: '10px',
            padding: '10px 20px',
            fontSize: '16px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease, color 0.3s ease',
          }}
          onClick={() => navigate('/second')}
        >
          Start
        </button>
      </div>
    </div>
  );
}

export default FirstPage;
