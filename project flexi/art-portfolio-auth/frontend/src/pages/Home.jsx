import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const artworks = [
  { title: "Color Chaos", img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308" },
  { title: "Forest Whisper", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb" },
  { title: "Dreamy Reflections", img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470" },
  { title: "Urban Bloom", img: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29" },
  { title: "Golden Hour", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330" },
  { title: "Mystic Waves", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e" },
];

export default function Home() {
  const { user, logout } = useContext(AuthContext);
  const [darkMode, setDarkMode] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  // Loop artwork carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % artworks.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode");
  };

  return (
    <div className="home-container">
      <nav className="navbar">
        <h2>🎨 Art Gallery</h2>
        <div>
          <button onClick={toggleTheme} className="toggle-btn">
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>
          <button onClick={logout} className="logout-btn">
            Logout
          </button>
        </div>
      </nav>

      <div className="welcome">
        <h1>Welcome, {user?.name || "Artist"} 👋</h1>
        <p>Explore your personal art collection below.</p>
      </div>

      <div className="gallery">
        {artworks.slice(currentIndex, currentIndex + 3).map((art, i) => (
          <div className="card" key={i}>
            <img src={art.img} alt={art.title} />
            <h3>{art.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
