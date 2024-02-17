"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Home() {
  const router = useRouter();
  const [location, setLocation] = useState("");
  const [error, setError] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

  const handleChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSubmit = () => {
    router.push({
      pathname: `/location/${encodeURIComponent(location)}`,
      query: { location },
    });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        height: "100vh",
        background: "#5d0b9c",
      }}
    >
      <div style={{ marginTop: "10px" }}>
        <h1>Weather App</h1>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "50px",
          marginTop: "20px",
        }}
      >
        <input
          type="text"
          value={location}
          onChange={handleChange}
          placeholder="Enter location"
          style={{
            padding: "8px 12px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            outline: "none",
            fontSize: "16px",
          }}
        />
        <button
          onClick={handleSubmit}
          style={{
            marginLeft: "10px",
            padding: "8px 16px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            outline: "none",
            fontSize: "16px",
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

