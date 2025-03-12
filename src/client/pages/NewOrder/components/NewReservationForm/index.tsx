import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import dayjs, { Dayjs } from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import React from "react";
import { Box, Checkbox, FormControlLabel, FormGroup } from "@mui/material";

export const NewReservationForm = () => {
  const [checkIn, setCheckIn] = React.useState<Dayjs | null>(dayjs());
  const [checkOut, setCheckOut] = React.useState<Dayjs | null>(dayjs());
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker", "DatePicker"]}>
          <DatePicker
            label="Check-in"
            value={checkIn}
            onChange={(newValue) => {
              setCheckIn(newValue), console.log(checkIn);
            }}
          />
          <DatePicker
            label="Check-out"
            value={checkOut}
            onChange={(newValue) => {
              setCheckOut(newValue), console.log(checkOut);
            }}
          />
        </DemoContainer>
      </LocalizationProvider>
      <FormGroup sx={{ display: "flex", flexDirection: "row" }}>
        <FormControlLabel control={<Checkbox />} label="Estadia" />
        <FormControlLabel control={<Checkbox />} label="Creche" />
        <FormControlLabel control={<Checkbox />} label="Banho" />
      </FormGroup>
    </Box>
  );
};
