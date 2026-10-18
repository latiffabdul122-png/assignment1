import React, { useState } from 'react';
import ProductList from './components/ProductList';

// Main Application Root Component
export default function App() {
  const [showProducts, setShowProducts] = useState(true);
  const [name, setName] = useState('');

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', maxWidth: '600px', margin: '0 auto' }}>
      <h1>React Product Dashboard</h1>

      <div style={{ marginBottom: '15px' }}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p>Hello, {name}</p>
      </div>

      <div style={{ marginBottom: '15px' }}>
        <button onClick={() => setShowProducts(!showProducts)}>
          {showProducts ? 'Hide Products' : 'Show Products'}
        </button>
      </div>

      {showProducts && <ProductList />}
    </div>
  );
}
