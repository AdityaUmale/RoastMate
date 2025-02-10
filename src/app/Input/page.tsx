// src/app/page.tsx
'use client'; // Mark this as a Client Component

import { useState } from 'react';
import InputForm from '../../components/InputForm';
import RoastCard from '../../components/RoastCard';

export default function Home() {
  const [roast, setRoast] = useState('');

  const handleSubmit = async (crushInfo: {
    hobbies: string;
    quirks: string;
    favorites: string;
    relationship: string;
  }) => {
    try {
      // Call the API route
      const response = await fetch('/api/generateRoast', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(crushInfo),
      });

      // Handle errors
      if (!response.ok) {
        throw new Error('Failed to generate roast');
      }

      // Parse the response
      const data = await response.json();
      setRoast(data.roast);
    } catch (error) {
      console.error(error);
      alert('Error generating roast. Please try again.');
    }
  };

  return (
    <div>
      <h1>Valentine Roast Generator</h1>
      <InputForm onSubmit={handleSubmit} />
      {roast && <RoastCard roast={roast} />}
    </div>
  );
}