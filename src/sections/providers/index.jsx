import React from "react";
import { CardContent, CardMedia, CardActions } from "@mui/material";
import { AppCard, AppButton } from "../../components";
import LidoLogo from "../../assets/lido.png";
import RockePoolLogo from "../../assets/rocketpool.png";
import StakeWiseLogo from "../../assets/stakewise.png";
import StafiLogo from "../../assets/stafi.png";
import "./index.css";

function Providers() {
  const providers = [
    {
      providerLogo: LidoLogo,
      altText: "Lido",
      providerName: "Lido Staked ETH",
      tokenSymbol: "stEth",
      tokenPrice: "($20.5)",
      providerNetApr: "5.02%",
    },
    {
      providerLogo: RockePoolLogo,
      altText: "Rocket Pool",
      providerName: "Rocket Pool Staked ETH",
      tokenSymbol: "rETH",
      tokenPrice: "($62.1)",
      providerNetApr: "5.12%",
    },
    {
      providerLogo: StakeWiseLogo,
      altText: "Stakewise",
      providerName: "Stakewise",
      tokenSymbol: "sETH",
      tokenPrice: "($79.2)",
      providerNetApr: "5.00%",
    },
    {
      providerLogo: StafiLogo,
      altText: "Stafi",
      providerName: "Stafi",
      tokenSymbol: "tETH",
      tokenPrice: "($208.5)",
      providerNetApr: "4.89%",
    },
  ];
  return (
    <div className="providers-root-div">
      <div className="providers-container">
        <h2>Top Staking Providers</h2>
        <div className="providers">
          {providers.map((provider, index) => (
            <AppCard key={index} styles={{ backgroundColor: "#1d1e1f" }}>
              <div className="card-container">
                <div className="provider-logo">
                  <CardMedia
                    component="img"
                    sx={{ width: "2.5rem", height: "2.5rem" }}
                    image={provider.providerLogo}
                    alt={provider.altText}
                  />
                </div>
                <CardContent
                  sx={{
                    padding: 0,
                    ":last-child": { padding: 0 },
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.7rem",
                  }}
                >
                  <div>
                    <h3>{provider.providerName}</h3>
                    <p className="token-symbol">
                      {provider.tokenSymbol} {provider.tokenPrice}
                    </p>
                  </div>
                  <div className="provider-apr">
                    <h2>{provider.providerNetApr}</h2>
                    <span>Net APR</span>
                  </div>
                </CardContent>
              </div>
              <CardActions
                disableSpacing
                sx={{ display: "flex", justifyContent: "center", gap: "1rem" }}
              >
                <AppButton
                  styles={{
                    backgroundColor: "rgba(255, 63, 109, 0.1)",
                    color: "rgba(255,0,61,1)",
                  }}
                >
                  Stake
                </AppButton>
                <AppButton
                  styles={{ backgroundColor: "rgba(238,238,238,0.1)" }}
                >
                  Learn More
                </AppButton>
              </CardActions>
            </AppCard>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Providers;
