import React from "react";
import Button from "@mui/material/Button";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar_container">
        {/* <div className="logo_container">
          <span>LOGO</span>
        </div> */}
        <Button
          variant="outlined"
          style={{ borderRadius: "50px", marginRight: "1rem" }}
        >
          Buy ETH
        </Button>
        <Button variant="contained" style={{ borderRadius: "50px" }}>
          Connect Wallet
        </Button>
      </div>
    </div>
  );
}

export default Navbar;
