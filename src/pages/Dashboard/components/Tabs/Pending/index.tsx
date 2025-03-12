import { Box } from "@mui/material";
import { BookingCard } from "../../BookingCard";

export const Pending = () => {
  return (
    <Box sx={{ display: "flex", gap: "40px", flexFlow: "wrap" }}>
      <BookingCard />
      <BookingCard />
      <BookingCard />
      <BookingCard />
      <BookingCard />
    </Box>
  );
};
