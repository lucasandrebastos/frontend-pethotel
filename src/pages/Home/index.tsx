import * as React from "react";
import dayjs, { Dayjs } from "dayjs";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export const Home = () => {
  const [checkIn, setCheckIn] = React.useState<Dayjs | null>(dayjs());
  const [checkOut, setCheckOut] = React.useState<Dayjs | null>(dayjs());
  return (
    <>
      <Autocomplete
        disablePortal
        options={[]}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Pet" />}
      />

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
    </>
  );
};
