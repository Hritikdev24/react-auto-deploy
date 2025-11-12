import React from 'react';
import { neha } from '../../assets/neha/neha';

const Neha = () => {
  // Detect mobile devices (very basic check) and Web Share API support
  const isMobile = /Mobi|Android/i.test(navigator.userAgent);
  const canShare = !!navigator.share && isMobile;

  const currentUrl = "https://angular.mynicksbuilding.com/view-door-details?data=U2FsdGVkX1%252BH%252FWwKrHZ%252FXGNNKvY0W60BPX5eQ6coj%252FEOW1OoPQYLeyYLQ4TIVgJhtcm0WRXgDadgUznT%252FhC0rD3PcQmSE2dqQEjfL8X9nMk%253D";

  const handleShare = async () => {
    if (canShare) {
      try {
        // Fetch the first image from the gallery and convert to file for sharing preview
        const response = await fetch(neha[0].src);
        const blob = await response.blob();
        const file = new File([blob], 'preview.jpg', { type: blob.type });

        const shareData = {
          title: "Number One Doors",
          text: "Check out the doors",
          url: currentUrl,
          // files: [file],
        };

        if (navigator.canShare && navigator.canShare({ files: [file] })) {
          await navigator.share(shareData);
          console.log('Shared successfully');
        } else {
          alert('Sharing files is not supported on this device/browser');
        }
      } catch (error) {
        console.error('Sharing failed', error);
      }
    } else {
      try {
        await navigator.clipboard.writeText(currentUrl);
        alert('Link copied to clipboard!');
      } catch {
        alert('Failed to copy link to clipboard');
      }
    }
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#f4f6f8', minHeight: '100vh', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px', color: '#ff69b4' }}>
        Neha Gallery
      </h1>

      <button
        onClick={handleShare}
        disabled={!canShare && !navigator.clipboard}
        style={{ padding: '8px 16px', cursor: 'pointer', marginBottom: '20px' }}
        aria-label="Share this page"
      >
        Share This
      </button>

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
                objectFit: 'contain',
                display: 'block',
                backgroundColor: '#f4f6f8',
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Neha;
