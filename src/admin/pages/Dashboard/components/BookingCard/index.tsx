import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";

interface IBookingCardProps {
  status: string;
}

export const BookingCard = ({ status }: IBookingCardProps) => {
  const card = (
    <React.Fragment>
      <CardContent>
        <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
          Período:
          <br />
          14/07/2025 - 18/07/2025
        </Typography>
        <Typography variant="h5" component="div">
          Manga
        </Typography>
        <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
          Cliente: Lucas Bastos
        </Typography>
        <Typography variant="body2">Serviços: Estadia, Banho</Typography>
      </CardContent>
      <Typography align="center" color="success" variant="h5" component="div">
        R$1849,00
      </Typography>
      {status === "pending" && (
        <CardActions sx={{ justifyContent: "center" }}>
          <Button color="success" size="small">
            Aceitar
          </Button>
          <Button color="error" size="small">
            Recusar
          </Button>
        </CardActions>
      )}
    </React.Fragment>
  );
  return (
    <Box sx={{ maxWidth: 275 }}>
      <Card elevation={3}>{card}</Card>
    </Box>
  );
};
