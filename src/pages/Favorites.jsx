import React, { useState, useEffect } from "react";
import DestinationCard from "../components/DestinationCard";


export default function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("favorites")
    setFavorites(saved ? JSON.parse(saved) : []);
  }, []);

  const toggleFavorite = (place) => {
    const updated = favorites.filter((fav) => fav.id !== place.id);
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  return (
    <div className="destinations-page">
      <h1>❤️ Favorite Destinations</h1>

      {favorites.length === 0 ? (
        <p>No favorites yet</p>
      ) : (
        <div className="destinations-grid">
          {favorites.map((place) => (
            <DestinationCard
              key={place.id}
              place={place}
              toggleFavorite={toggleFavorite}
              isFavorite={true}
            />
          ))}
        </div>
      )}
    </div>
  );
}
