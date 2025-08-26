import React from "react";

const DefaultGallery = () => {
  return (
    <div style={{ textAlign: "center", marginBottom: "30px" }}>
      <picture>
        {/* Mobile image */}
        <source media="(max-width: 768px)" srcSet="./pooja.jpg" />
        {/* Desktop fallback */}
        <img
          src="./land.jpg"
          alt="Default placeholder"
          style={{
            width: "100%",      // takes full width of container
            maxWidth: "100%",   // ensures no overflow
            height: "auto",     // keeps aspect ratio
            borderRadius: "10px",
          }}
        />
      </picture>
    </div>
  );
};

export default DefaultGallery;
