import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Logo from "../Logo";

export const Menu = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const navigate = useNavigate();
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (event.clientX < 10) {
        setOpen(true);
      } else if (event.clientX > 210) {
        setOpen(false);
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <Drawer open={open}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
        >
          <Box sx={{ padding: "12px 40px 12px 40px" }}>
            <Logo />
          </Box>
          <List>
            {["Dashboard", "Tutores", "Tesourinhos", "neworder"].map((text) => (
              <ListItem key={text} disablePadding>
                <ListItemButton
                  onClick={() => navigate(`/${text.toLowerCase()}`)}
                >
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};
