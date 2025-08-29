import React, { useEffect, useState } from "react";

const Other = () => {
  // State to store image list
  const [images, setImages] = useState([]);

  // Fetch images on mount
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await fetch(
          "https://nest-rest-service-k0ad.onrender.com/api/auth/images"
        );
        const data = await res.json();
        if (data.success) {
          setImages(data.data);
        }
      } catch (err) {
        console.error("Error fetching images:", err);
      }
    };

    fetchImages();
  }, []);

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#f4f6f8",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Page Title */}
      <h1
        style={{
          textAlign: "center",
          marginBottom: "30px",
          color: "#ff69b4",
        }}
      >
        Other Gallery
      </h1>

      {/* Responsive Image Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        {images.map((img, index) => (
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
              src={`https://nest-rest-service-k0ad.onrender.com/images/images/${img}`}
              alt={`Other ${index + 1}`}
              style={{
                width: "100%",
                height: "250px",
                objectFit: "cover", // fills card nicely
                display: "block",
              }}
            />
          </div>
        ))}
      </div>

      {/* Video Section */}
      <div
        style={{
          marginTop: "40px",
          textAlign: "center",
        }}
      >
        <h2 style={{ color: "#333", marginBottom: "15px" }}>Featured Video</h2>
        <video
          src={`https://nest-rest-service-k0ad.onrender.com/images/videos/vibhu.mp4`}
          controls
          poster={images[images.length-0]}
          style={{
            maxWidth: "100%",
            height: "auto",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
          }}
        ></video>
      </div>
    </div>
  );
};

export default Other;
