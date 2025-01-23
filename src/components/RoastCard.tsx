// components/RoastCard.js
import { useRef } from 'react';
import html2canvas from 'html2canvas';

interface RoastCardProps {
    roast: string;
}

export default function RoastCard({ roast: roast }: RoastCardProps) {
  const cardRef = useRef(null);

  const handleDownload = () => {
    if (cardRef.current) {
      html2canvas(cardRef.current).then((canvas) => {
        const link = document.createElement('a');
        link.download = 'roast-card.png';
        link.href = canvas.toDataURL();
        link.click();
      });
    }
  };

  return (
    <div>
      <div ref={cardRef} style={{ border: '1px solid #000', padding: '20px', maxWidth: '400px' }}>
        <p>{roast}</p>
      </div>
      <button onClick={handleDownload}>Download Card</button>
    </div>
  );
}