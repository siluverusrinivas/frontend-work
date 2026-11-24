import {
    Box,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Toolbar,
    Typography,
    IconButton,
    AppBar,
    Divider,
  } from "@mui/material";
  import DashboardIcon from "@mui/icons-material/Dashboard";
  import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
  import LogoutIcon from "@mui/icons-material/Logout";
  import { useNavigate } from "react-router-dom";
import { useState } from "react";

const expandedWidth = 240;
const collapsedWidth = 65;

const Dashboard = () =>{
    const navigate = useNavigate();
    const [open, setOpen] = useState(true);
    const currentDrawerWidth = open ? expandedWidth : collapsedWidth;
    return (
      <Box sx={{ display: "flex", height: "100vh" }}>
     
        <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${currentDrawerWidth}px)`, ml: `${currentDrawerWidth}px`,
        transition: "width 0.2s ease, margin-left 0.2s ease", }}
        >
<Toolbar>
    <Typography variant="h6" noWrap>Dashboard</Typography>
</Toolbar>

        </AppBar>

        <Drawer
        variant="permanent"
        sx={{
            width: currentDrawerWidth,
            flexShrink: 0,
            whiteSpace: "nowrap",
            transition: "width 0.2s ease",
            "& .MuiDrawer-paper": {
                width: currentDrawerWidth,
                boxSizing: "border-box",
                transition: "width 0.2s ease",
                overflowX: "hidden",
            }
        }}>

<Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: open ? "flex-end" : "center",
            px: 1,
          }}
        >
          <IconButton onClick={() => setOpen(!open)}>
            {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </Toolbar>
        <Divider />
        <List>
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              onClick={() => navigate("/dashboard")}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 0,
                  justifyContent: "center",
                }}
              >
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText
                primary="Overview"
                sx={{ opacity: open ? 1 : 0 ,
                    display: open ? "block" : "none",
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              onClick={() => navigate("/login")}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText
                primary="Logout"
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>

      {/* Main Content Box */}
      <Box
        component="main"
        sx={{
            flexGrow: 1,
            minWidth: 0,
            minHeight: "100vh",
            p: 3,
            boxSizing: "border-box",
        }}
      >
        <Toolbar />
        <Typography>Welcome to the Dashboard</Typography>
      </Box>
    </Box>
      
    )
}



export default Dashboard;