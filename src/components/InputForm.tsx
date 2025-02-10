// components/InputForm.js
import { useState } from 'react';

interface InputFormProps {
  onSubmit: (crushInfo: {
    hobbies: string;
    quirks: string;
    favorites: string;
    relationship: string;
  }) => void;
}

export default function InputForm({ onSubmit }: InputFormProps) {
  const [crushInfo, setCrushInfo] = useState({
    hobbies: '',
    quirks: '',
    favorites: '',
    relationship: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCrushInfo({ ...crushInfo, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(crushInfo);
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        name="hobbies"
        placeholder="Hobbies"
        value={crushInfo.hobbies}
        onChange={handleChange}
      />
      <textarea
        name="quirks"
        placeholder="Funny Quirks"
        value={crushInfo.quirks}
        onChange={handleChange}
      />
      <textarea
        name="favorites"
        placeholder="Favorite Things"
        value={crushInfo.favorites}
        onChange={handleChange}
      />
      <textarea
        name="relationship"
        placeholder="Relationship Dynamics"
        value={crushInfo.relationship}
        onChange={handleChange}
      />
      <button type="submit">Generate Roast</button>
    </form>
  );
}