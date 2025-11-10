import React from 'react';
import { neha } from '../../assets/neha/neha';

const Neha = () => {

  const canShare = !!navigator.share;

  const handleShare = async () => {
    if (canShare) {
      try {
        await navigator.share({
          "number one doors",
          "checout the doors",
          "https://angular.mynicksbuilding.com/view-door-details?data=U2FsdGVkX1%252BH%252FWwKrHZ%252FXGNNKvY0W60BPX5eQ6coj%252FEOW1OoPQYLeyYLQ4TIVgJhtcm0WRXgDadgUznT%252FhC0rD3PcQmSE2dqQEjfL8X9nMk%253D",
        });
        console.log('Shared successfully');
      } catch (error) {
        console.error('Sharing failed', error);
      }
    } else {
      // Fallback for unsupported browsers: copy url to clipboard or show a message
      navigator.clipboard.writeText(url);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div
      style={{
        padding: '20px',
        backgroundColor: '#f4f6f8',
        minHeight: '100vh',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      {/* Page Title */}
      <h1
        style={{
          textAlign: 'center',
          marginBottom: '30px',
          color: '#ff69b4',
        }}
      >
        Neha Gallery
      </h1>
 <button onClick={handleShare} disabled={!canShare} style={{ padding: '8px 16px', cursor: 'pointer' }}>
      Share This
    </button>
      {/* Responsive Image Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px',
        }}
      >
        {neha.map((item, index) => (
          <div
            key={index}
            style={{
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              background: '#fff',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            }}
          >
            <img
              src={item.src}
              alt={`Neha ${index + 1}`}
              style={{
                width: '100%',
                height: '300px',
                objectFit: 'contain', // shows full image without cropping
                display: 'block',
                backgroundColor: '#f4f6f8', // optional for padding effect
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Neha;
