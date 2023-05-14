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
import { useSnapshot } from "valtio";
import state from "../../store";
import {connectWallet} from '../../utils';
import AppButton from "../CustomButton";
import EthereumLogo from "../../assets/etherem-logo.png";
import NameLogo from "../../assets/name-logo.png";
import "./Navbar.css";

const CustomNavbar = styled(AppBar)(({ theme }) => ({
  backgroundColor: "#161616",
}));

function Navbar() {
  const snap = useSnapshot(state);

  const handleClickByETH = () => {
    window.open("https://app.uniswap.org/#/swap", "_blank");
  };
  
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
          </IconButton> 
          */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <img src={NameLogo} height={80}></img>
          </Typography>
          <div className="navbar-action-buttons">
            <div className="navbar-average">
              <p>Avrg. APR: 4.89%</p>
            </div>
            <AppButton
              color="inherit"
              styles={{ display: "flex", gap: "0.5rem" }}
              onClick={handleClickByETH}
            >
              Buy ETH
            </AppButton>
            <div className="ethlogo-container">
              <img src={EthereumLogo} width={"auto"} height={20} />
            </div>
            <AppButton
            onClick={connectWallet}
              styles={{
                backgroundColor: "rgba(255, 63, 109, 0.1)",
                color: "rgba(255,0,61,1)",
              }}
            >
              {console.log("snap: ",snap.walletAddress)}
              {snap.walletAddress?`${snap.walletAddress?.slice(0,5)}...${snap.walletAddress?.slice(-3)}`:'Connect Wallet'}
            </AppButton>
          </div>
        </Toolbar>
      </CustomNavbar>
    </Box>
  );
}

export default Navbar;
