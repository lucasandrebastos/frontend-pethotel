import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import dayjs, { Dayjs } from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import React from "react";
import { Autocomplete, TextField } from "@mui/material";

export const NewReservationForm = () => {
  const [checkIn, setCheckIn] = React.useState<Dayjs | null>(dayjs());
  const [checkOut, setCheckOut] = React.useState<Dayjs | null>(dayjs());
  return (
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
      <Autocomplete
        disablePortal
        options={[]}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Pet" />}
      />
    </LocalizationProvider>
  );
};
