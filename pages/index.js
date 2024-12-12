"use client";

import { useState } from "react";
import axios from "axios";
import "../styles.css";
import "@mui/icons-material"
import "@mui/material"

export default function Home() {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post("/api/analyze", { url });
    setResult(response.data);
  };

  return (
    <div>

    {/* Background Video */}
    <video autoPlay muted loop id="backgroundVideo">
        <source src="/bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Header */}
      <header>
        <div className="logo">AI Environmental Impact Analyzer</div>
        <nav className="menu">
          <a href="#">History</a>
          <a href="#">Sign In</a>
          <a href="#">Register</a>
        </nav>
      </header>

      {/* Hero Section */}
      <div className="hero">
  <h1>The environmental impact analyzer you've been looking for</h1>
  <p>Analyze products with lightning-fast AI for a cleaner tomorrow.</p>

  <div className="search">
    <div className="search__input">
      <span className="material-icons"></span>
      <input
        type="url"
        placeholder="Paste product URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
    </div>
  </div>

  <div className="buttons">
    <button onClick={handleSubmit} className="primary-btn">Analyze</button>
  </div>


      </div>
    </div>
  );
}
