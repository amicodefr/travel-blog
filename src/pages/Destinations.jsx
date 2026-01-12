import React, { useState, useEffect } from "react";
import { destinations } from "../data/destinations";
import "./Destinations.css";
import DestinationCard from "../components/DestinationCard";

export default function Destinations() {
  const [continentFilter, setContinentFilter] = useState("All");
  const [priceFilter, setPriceFilter] = useState("All");

  // favorites state
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });

  // save to localStorage
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // toggle favorite
  const toggleFavorite = (place) => {
    const isFavorite = favorites.some((fav) => fav.id === place.id);

    if (isFavorite) {
      setFavorites(favorites.filter((fav) => fav.id !== place.id));
    } else {
      setFavorites([...favorites, place]);
    }
  };

  //  filtering
  const filteredDestinations = destinations.filter((place) => {
    return (
      (continentFilter === "All" || place.continent === continentFilter) &&
      (priceFilter === "All" || place.price === Number(priceFilter))
    );
  });

  return (
    <div className="destinations-page">
      <h1>Travel Destinations</h1>

      <div className="filters">
        <select
          value={continentFilter}
          onChange={(e) => setContinentFilter(e.target.value)}
        >
          <option value="All">All Continents</option>
          <option value="Europe">Europe</option>
          <option value="Asia">Asia</option>
          <option value="North America">North America</option>
          <option value="South America">South America</option>
          <option value="Australia">Australia</option>
        </select>

        <select
          value={priceFilter}
          onChange={(e) => setPriceFilter(e.target.value)}
        >
          <option value="All">All Prices</option>
          <option value="1">$</option>
          <option value="2">$$</option>
          <option value="3">$$$</option>
        </select>
      </div>

      <div className="destinations-grid">
        {filteredDestinations.map((place) => (
          <DestinationCard
            key={place.id}
            place={place}
            toggleFavorite={toggleFavorite}
            isFavorite={favorites.some((fav) => fav.id === place.id)}
          />
        ))}
      </div>
    </div>
  );
}
