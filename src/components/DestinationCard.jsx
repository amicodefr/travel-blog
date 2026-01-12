import * as React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button
} from "@mui/material";

export default function DestinationCard({ place, toggleFavorite, isFavorite }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="180"
        image={place.image}
        alt={place.city}
      />

      <CardContent>
        <Typography gutterBottom variant="h6">
          {place.city}, {place.country}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          Continent: {place.continent}
        </Typography>

        <Typography variant="body2">
          {"$".repeat(place.price)}
        </Typography>
      </CardContent>

      <CardActions>
        <Button
          size="small"
          onClick={() => toggleFavorite(place)}
          color={isFavorite ? "error" : "primary"}
        >
          {isFavorite ? "Remove ❤️" : "Add ❤️"}
        </Button>
      </CardActions>
    </Card>
  );
}
