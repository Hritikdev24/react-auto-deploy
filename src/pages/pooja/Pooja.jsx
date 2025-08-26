import React from "react";
import { pooja } from "../../assets/pooja/pooja";

const Pooja = () => {
  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f4f6f8",
        minHeight: "100vh",
      }}
    >
      {/* Page Title */}
      <h1
        style={{
          textAlign: "center",
          marginBottom: "30px",
          color: "#333",
        }}
      >
        Pooja Gallery
      </h1>

      {/* Responsive Image Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        {pooja.map((item, index) => (
          <div
            key={index}
            style={{
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              background: "#fff",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
            }}
          >
            <img
              src={item.src}
              alt={`Pooja ${index + 1}`}
              style={{
                width: "100%",
                height: "300px",
                objectFit: "contain", // ensures full image visible
                display: "block",
                backgroundColor: "#f4f6f8", // optional, for padding effect
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pooja;
