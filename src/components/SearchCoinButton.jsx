import React, { useEffect, useState } from "react";
import "./SearchCoinButton.css";

export default function SearchCoinButton({ onSearch }) {
  const [animation, setAnimation] = useState("landing"); // landing | idle | rising
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // after landing animation completes, switch to idle
    const timer = setTimeout(() => setAnimation("idle"), 600);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    
    if (loading) return;
    setLoading(true);
    setAnimation("rising");
    

    // simulate loading or call parent callback
    setTimeout(() => {
      setLoading(false);
      setAnimation("idle");
      onSearch && onSearch();
    }, 1400);
      // main();
  };

  return (
    <button
      className={`search-coin ${animation} ${loading ? "loading" : ""}`}
      onClick={handleClick}
    >
      🔍
    </button>
  );
}
