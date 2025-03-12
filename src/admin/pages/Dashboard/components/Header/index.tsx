import { Avatar, Box, Divider, IconButton } from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

export const Header = () => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "right",
          paddingRight: "20px",
          gap: "20px",
        }}
      >
        <IconButton>
          <NotificationsNoneIcon />
        </IconButton>
        <IconButton>
          <Avatar />
        </IconButton>
      </Box>
      <Box>
        <Divider />
      </Box>
    </Box>
  );
};
