import { Box } from "@mui/material";
import { BookingCard } from "../../BookingCard";

export const Completed = () => {
  return (
    <Box sx={{ display: "flex", gap: "40px", flexFlow: "wrap" }}>
      <BookingCard status="completed" />
      <BookingCard status="completed" />
      <BookingCard status="completed" />
    </Box>
  );
};
