import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ViewWeekIcon from "@mui/icons-material/ViewWeek";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import PeopleIcon from "@mui/icons-material/People";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import ReceiptIcon from "@mui/icons-material/Receipt";
import StorefrontIcon from "@mui/icons-material/Storefront";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import RateReviewIcon from "@mui/icons-material/RateReview";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import AssessmentIcon from "@mui/icons-material/Assessment";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";

const drawerWidth = 300;

const menuItems = [
  { text: 'Barcode', icon: <ViewWeekIcon />, route: '/barcode' },
  { text: 'Withdrawal', icon: <AccountBalanceWalletIcon />, route: '/withdrawal' },
  { text: 'Customers', icon: <PeopleIcon />, route: '/customers' },
  { text: 'Subscriptions', icon: <SubscriptionsIcon />, route: '/subscriptions' },
  { text: 'Coupons', icon: <LocalOfferIcon />, route: '/coupons' },
  { text: 'Transactions', icon: <ReceiptIcon />, route: '/transactions' },
  { text: 'Decorate Shop', icon: <StorefrontIcon />, route: '/decorate-shop' },
  { text: 'Export Products', icon: <CloudUploadIcon />, route: '/export-products' },
  { text: 'Refunds', icon: <SyncAltIcon />, route: '/refunds' },
  { text: 'Import Products', icon: <CloudDownloadIcon />, route: '/import-products' },
  { text: 'Reviews', icon: <RateReviewIcon />, route: '/reviews' },
  { text: 'KYC', icon: <VerifiedUserIcon />, route: '/kyc' },
  { text: 'Reports', icon: <AssessmentIcon />, route: '/reports' },
  { text: 'Tickets', icon: <ConfirmationNumberIcon />, route: '/tickets' }
];

export default function PermanentDrawerLeft() {
  const [selectedItem, setSelectedItem] = useState(menuItems[0].text);
  const navigate = useNavigate(); 

  const handleListItemClick = (item) => {
    setSelectedItem(item.text);
    navigate(item.route); 
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="absolute"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            {selectedItem}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "#333", 
            color: "#fff", 
            overflowY: "scroll", 
            "::-webkit-scrollbar": {
              display: "none", 
            },
            msOverflowStyle: "none", 
            scrollbarWidth: "none", 
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon sx={{ minWidth: 0, p: 0 }}>
              <img
                src="https://png.pngtree.com/png-clipart/20220605/original/pngtree-builders-logo-png-image_7965543.png"
                alt="logo"
                style={{
                  width: "100%",
                  height: "100px",
                  maxWidth: "240px",
                  marginTop: "-70px",
                  marginLeft: "70px",
                }}
              />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
        <Divider />
        <List>
          {menuItems.map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton onClick={() => handleListItemClick(item)}>
                <ListItemIcon sx={{ color: "#fff" }}>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}
