import React from "react";

const Footer= () => {
  return (
    <footer
      style={{
        backgroundColor: "#222",
        color: "#fff",
        textAlign: "center",
        padding: "15px 20px",
        fontFamily: "Arial, sans-serif",
        position: "fixed",
        bottom: 0,
        width: "100%",
      }}
    >
      <p style={{ margin: 0, fontSize: "14px" }}>
        © {new Date().getFullYear()} Hritik. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
