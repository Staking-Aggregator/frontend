import React from "react";
import { CardContent, CardMedia } from "@mui/material";
import { AppCard } from "../../components";
import LidoLogo from "../../assets/lido.png";
import RocketPoolLogo from "../../assets/rocketpool.png";
import StakeWiseLogo from "../../assets/stakewise.png";
import StafiLogo from "../../assets/stafi.png";
import "./index.css";

function Stats() {
  const tokens = [
    {
      tokenLogo:LidoLogo,
      altText:"Lido token",
      tokenName:"Lido Staked ETH",
      tokenSymbol:'stETH',
      currentPrice:'$9.00',
    },
    {
      tokenLogo:RocketPoolLogo,
      altText:"RocketPool token",
      tokenName:"RocketPool Staked ETH",
      tokenSymbol:'rETH',
      currentPrice:'$10.00',
    },
    {
      tokenLogo:StakeWiseLogo,
      altText:'Stakewise',
      tokenName:'Stakewise',
      tokenSymbol:'sETH',
      currentPrice:'$7.00',
    },
    {
      tokenLogo:StafiLogo,
      altText:'Stafi',
      tokenName:'Stafi',
      tokenSymbol:'tETH',
      currentPrice:'$9.25',
    },
  ]
  return (
    <div className="stats-root-div">
      <div className="stats-container">
        <h2>LSTs Price</h2>
        <div className="lsts-token-prices">
          {tokens.map((token,index)=>(
          <AppCard key={index} styles={{ flex: 1, display: "flex",gap:'0.5rem' }}>
            <div className="lst-logo">
            <CardMedia
              component="img"
              sx={{ width: '2.5rem',height:'2.5rem' }}
              image={token.tokenLogo}
              alt={token.altText}
            />
            </div>
            <CardContent sx={{padding:0, ':last-child':{padding:0}}}>
              <h3>{token.tokenName}</h3>
              <p className="token-symbol">{token.tokenSymbol}</p>
              <div className="token-price">
                <span>Current Price: </span>
                <h3>{token.currentPrice}</h3>
              </div>
            </CardContent>
          </AppCard>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Stats;
