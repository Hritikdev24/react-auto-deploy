// src/components/Skeleton.js
import React from "react";

const Skeleton = ({ count = 6 }) => {
  const items = Array.from({ length: count });

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "20px",
        padding: "20px",
      }}
    >
      {items.map((_, index) => (
        <div
          key={index}
          style={{
            height: "250px",
            borderRadius: "12px",
            backgroundColor: "#e0e0e0",
            animation: "pulse 1.5s infinite",
          }}
        />
      ))}

      {/* Add the pulse animation */}
      <style>{`
        @keyframes pulse {
          0% { opacity: 1; }
          50% { opacity: 0.4; }
          100% { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default Skeleton;
