import { Box } from "@mui/material";

import { Outlet } from "react-router";

export const Dashboard = () => {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Outlet />
      </Box>
    </>
  );
};
