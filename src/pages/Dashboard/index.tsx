// import { useEffect, useState } from "react";

// import { getAllUsers } from "../../service/userService";

import { Box } from "@mui/material";
import BasicTabs from "./components/Tabs";
import { Menu } from "./components/Menu";

export const Dashboard = () => {
  // const [users, setUsers] = useState();

  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     try {
  //       const response = await getAllUsers();
  //       console.log("response", response);
  //       setUsers(response);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   fetchUsers();
  // }, []);

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Menu />
        <BasicTabs />
      </Box>
    </>
  );
};
