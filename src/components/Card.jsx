import React from 'react';

export default function Card({ children }) {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '16px',
      margin: '10px 0',
      backgroundColor: '#f9f9f9'
    }}>
      {children}
    </div>
  );
}
