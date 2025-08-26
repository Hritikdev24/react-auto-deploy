import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 30px",
        background: "linear-gradient(90deg, #ff6ec4, #7873f5)", // pink to purple gradient
        color: "#fff",
        fontFamily: "Arial, sans-serif",
        borderRadius: "0 0 10px 10px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
      }}
    >
      <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>

      <Link
          to="/"
          style={{
            color: "#fff",
            textDecoration: "none",
            fontSize: "16px",
            padding: "5px 12px",
            borderRadius: "8px",
            transition: "background 0.3s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.2)")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
        >
          Home
        </Link>
      </div>
      <nav style={{ display: "flex", gap: "20px" }}>
        <Link
          to="neha"
          style={{
            color: "#fff",
            textDecoration: "none",
            fontSize: "16px",
            padding: "5px 12px",
            borderRadius: "8px",
            transition: "background 0.3s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.2)")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
        >
          Neha
        </Link>
        <Link
          to="pooja"
          style={{
            color: "#fff",
            textDecoration: "none",
            fontSize: "16px",
            padding: "5px 12px",
            borderRadius: "8px",
            transition: "background 0.3s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.2)")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
        >
          Pooja
        </Link>
      </nav>
    </header>
  );
};

export default Header;
