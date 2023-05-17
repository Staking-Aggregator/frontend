import React from "react";
import { CardContent, CardMedia, CardActions,TextField } from "@mui/material";
import AppCard from "../CustomCard";
import AppButton from "../CustomButton";
import AppTextBox from "../CustomTextBox";
import "./index.css";

function StakingCard({
  providerLogo,
  providerName,
  tokenSymbol,
  tokenPrice,
  providerNetApr,
}) {
  return (
    <div className="staking-card-root-div">
      <AppCard styles={{ backgroundColor: "#1d1e1f",width:'fit-content',height:'fit-content' }}>
        <div className="card-container">
          <div className="provider-logo">
            <CardMedia
              component="img"
              sx={{ width: "2.5rem", height: "2.5rem" }}
              image={providerLogo}
              // alt={provider.altText}
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
            <div className="staking-inputs">
              <div>
                <h3>{providerName}</h3>
                <p className="token-symbol">
                  {tokenSymbol} {tokenPrice}
                </p>
                <div className="provider-apr">
                  <h2>{providerNetApr}</h2>
                  <span>Net APR</span>
                </div>
              </div>
              <div>
              <AppTextBox 
            //   sx={{
            //     '& .MuiInputBase-input':{
            //         color: 'white',
            //     },
            //     '& .MuiOutlinedInput-root': {
            //         '& fieldset': {
            //           borderColor: 'white',
            //         },
            //       },
            //   }}
              id="outlined-basic" 
              label="Enter ETH Amount" 
              variant="outlined" 
              />
              </div>
            </div>
          </CardContent>
        </div>
        <CardActions
          disableSpacing
          sx={{ display: "flex", justifyContent: "center", gap: "1rem",marginTop:'1rem' }}
        >
          <AppButton
            styles={{
              backgroundColor: "rgb(135,169,240)",
              color: "white",
            }}
            //   onClick={()=>state.isStakingScreen=true}
          >
            Stake
          </AppButton>
          <AppButton styles={{ backgroundColor: "rgba(238,238,238,0.1)" }}>
            Learn More
          </AppButton>
        </CardActions>
      </AppCard>
    </div>
  );
}

export default StakingCard;
