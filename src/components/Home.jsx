import React from "react";
import Button from "@mui/material/Button";

function Home() {
  return (
    <div
      className="home_container"
      style={{ backgroundColor: "black", height: "100vh" }}
    >
      <div
        className="card_container"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          gap: "2.5rem",
          paddingTop: "4rem",
        }}
      >
        <div
          className="container1"
          style={{
            backgroundColor: "#85CFCB",
            height: "30vh",
            border: "2px solid blue",
            marginLeft: "1rem",
          }}
        >
          <h1>Rocket Pool staked ETH </h1>
          <div style={{ float: "right" }}>
            <Button variant="contained" style={{ borderRadius: "50px" }}>
              Stake
            </Button>
          </div>
        </div>

        <div
          className="container1"
          style={{ backgroundColor: "#85CFCB", border: "2px solid blue" }}
        >
          <h1>lido staked ETH</h1>
          <div style={{ float: "right" }}>
            <Button variant="contained" style={{ borderRadius: "50px" }}>
              Stake
            </Button>
          </div>
        </div>

        <div
          className="container1"
          style={{ backgroundColor: "#85CFCB", border: "2px solid blue" }}
        >
          <h1>Frax staked ETH</h1>
          <div style={{ float: "right" }}>
            <Button variant="contained" style={{ borderRadius: "50px" }}>
              Stake
            </Button>
          </div>
        </div>
        <div
          className="container1"
          style={{
            backgroundColor: "#85CFCB",
            marginRight: "1rem",
            border: "2px solid blue",
          }}
        >
          <h1>Stakewise staked ETH</h1>
          <div style={{ float: "right" }}>
            <Button variant="contained" style={{ borderRadius: "50px" }}>
              Stake
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
