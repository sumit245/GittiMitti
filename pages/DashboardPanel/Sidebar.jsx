import React from "react";
import '../../src/dashboard.css'
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
} from "@mui/material";
import {
  Dashboard,
  ShoppingCart,
  AccountCircle,
  Favorite,
  RateReview,
  Book,
  Replay,
  Settings,
  ExitToApp,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <Drawer variant="permanent" className="good">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        padding={2}
      >
        <img
          src="https://png.pngtree.com/png-clipart/20220605/original/pngtree-builders-logo-png-image_7965543.png"
          alt="Logo"
          style={{ width: "80%", height: "auto" }}
        />
      </Box>
      <List>
        <ListItem button component={Link} to="/dashboard">
          <ListItemIcon>
            <Dashboard />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component={Link} to="/orders">
          <ListItemIcon>
            <ShoppingCart />
          </ListItemIcon>
          <ListItemText primary="Orders" />
        </ListItem>
        <ListItem button component={Link} to="/profile">
          <ListItemIcon>
            <AccountCircle />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItem>
        <ListItem button component={Link} to="/wishlist">
          <ListItemIcon>
            <Favorite />
          </ListItemIcon>
          <ListItemText primary="Wishlist" />
        </ListItem>
        <ListItem button component={Link} to="/reviews">
          <ListItemIcon>
            <RateReview />
          </ListItemIcon>
          <ListItemText primary="Reviews" />
        </ListItem>
        <ListItem button component={Link} to="/address-book">
          <ListItemIcon>
            <Book />
          </ListItemIcon>
          <ListItemText primary="Address Book" />
        </ListItem>
        <ListItem button component={Link} to="/refunds">
          <ListItemIcon>
            <Replay />
          </ListItemIcon>
          <ListItemText primary="Refunds" />
        </ListItem>
        <ListItem button component={Link} to="/settings">
          <ListItemIcon>
            <Settings />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
        <ListItem button component={Link} to="/logout">
          <ListItemIcon>
            <ExitToApp />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;