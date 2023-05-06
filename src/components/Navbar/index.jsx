import React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { alpha, styled } from "@mui/material/styles";
import AppButton from "../CustomButton";
import "./Navbar.css";

const CustomNavbar = styled(AppBar)(({ theme }) => ({
  backgroundColor:'#161616',
}));

function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <CustomNavbar position="static">
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Title Here
          </Typography>
          <div className="navbar-action-buttons">
          <AppButton color="inherit">Chain</AppButton>
          <AppButton styles={{backgroundColor:'rgba(255, 63, 109, 0.1)',color:'rgba(255,0,61,1)'}}>Connect Wallet</AppButton>
          </div>
        </Toolbar>
      </CustomNavbar>
    </Box>
  );
}

export default Navbar;
