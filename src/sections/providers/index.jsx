import React, { useState, useEffect } from "react";
import { CardContent, CardMedia, CardActions } from "@mui/material";
import { useSnapshot } from "valtio";
import { AppCard, AppButton, StakingCard } from "../../components";
import state from "../../store";
import { LidoAPR } from "../../utils";
import LidoLogo from "../../assets/lido.png";
import RockePoolLogo from "../../assets/rocketpool.png";
import StakeWiseLogo from "../../assets/stakewise.png";
import StafiLogo from "../../assets/stafi.png";
// import BalancerLogo from "../../assets/balancer.png";
import BalancerLogo from "../../assets/balancer-symbol-logo.svg";
// import BalancernamedLogo from "../../assets/balancer-logo.jpg";
import BalancernamedLogo from "../../assets/balancer-logo.svg";
import LidoABI from "../../contracts-abi/Lido.json";
import "./index.css";

function Providers() {
  const snap = useSnapshot(state);
  const [selectedProvider, setSelectedProvider] = useState();
  const [lidoAPR, setLidoAPR] = useState('');
  const [providers, setProviders] = useState([
    {
      providerLogo: LidoLogo,
      altText: "Lido",
      providerName: "Lido Staked ETH",
      tokenSymbol: "wstEth",
      tokenPrice: "($20.5)",
      providerNetApr: "5.02%",
      providerContractAddress:import.meta.env.VITE_LIDO_ADDRESS,
      providerABI:LidoABI,
      providerPage:"https://stake.lido.fi/",
    },
    {
      providerLogo: RockePoolLogo,
      altText: "Rocket Pool",
      providerName: "Rocket Pool Staked ETH",
      tokenSymbol: "rETH",
      tokenPrice: "($62.1)",
      providerNetApr: "5.12%",
      providerContractAddress:import.meta.env.VITE_ROCKETPOOL_ADDRESS,
      providerABI:LidoABI,
      providerPage:"https://stake.rocketpool.net/",
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
  ]);
  async function toBeFixedAPR(service) {
    let response = await service();
    return response.toFixed(2);
  }
  useEffect(() => {
    fetchLidoAPR()
  }, [])
  const fetchLidoAPR = async ()=>{
    const response = await toBeFixedAPR(LidoAPR);
    let allProviders =providers.map(e=>{
      if(e.providerName === "Lido Staked ETH"){
        let provider = {...e};
        provider.providerNetApr = `${response}%`;
        return provider;
      }
      return e;
    })
    setProviders(allProviders);
  }
  const openProvider = (provider)=>{
    window.open(provider,'_blank');
  }
  // const providers = [
  //   {
  //     providerLogo: LidoLogo,
  //     altText: "Lido",
  //     providerName: "Lido Staked ETH",
  //     tokenSymbol: "stEth",
  //     tokenPrice: "($20.5)",
  //     providerNetApr: "5.02%",
  //   },
  //   {
  //     providerLogo: RockePoolLogo,
  //     altText: "Rocket Pool",
  //     providerName: "Rocket Pool Staked ETH",
  //     tokenSymbol: "rETH",
  //     tokenPrice: "($62.1)",
  //     providerNetApr: "5.12%",
  //   },
  //   {
  //     providerLogo: StakeWiseLogo,
  //     altText: "Stakewise",
  //     providerName: "Stakewise",
  //     tokenSymbol: "sETH",
  //     tokenPrice: "($79.2)",
  //     providerNetApr: "5.00%",
  //   },
  //   {
  //     providerLogo: StafiLogo,
  //     altText: "Stafi",
  //     providerName: "Stafi",
  //     tokenSymbol: "tETH",
  //     tokenPrice: "($208.5)",
  //     providerNetApr: "4.89%",
  //   },
  // ];
  return (
    <div className="providers-root-div">
      {!snap.isStakingScreen ? (
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
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "1rem",
                  }}
                >
                  <AppButton
                    styles={{
                      backgroundColor: "rgb(135,169,240)",
                      color: "white",
                    }}
                    onClick={() => {
                      openProvider(provider.providerPage)
                    }}
                  >
                    Stake
                  </AppButton>
                  <AppButton
                    styles={{ backgroundColor: "rgba(238,238,238,0.1)" }}
                    onClick={()=>{
                      state.isStakingScreen = true;
                      setSelectedProvider(provider);
                    }}
                  >
                    Buy {provider.tokenSymbol.toLowerCase()}
                  </AppButton>
                </CardActions>
              </AppCard>
            ))}
          </div>
          <section className="boost_container">
            <span className="boost_heading">Boost your Rewards</span>
            <AppCard
              styles={{ backgroundColor: "#1d1e1f", width: "fit-content" }}
            >
              <CardContent>
                <span>
                  Boost your rewards by joining our Staking Pool. You can gain
                  another x.xx % in APR. How? Extra yield is coming from both
                  from fees within the balancer pool and from lending via AAVE
                  How? Extra yield is coming from both from fees within the
                  balancer pool and from lending via AAVE How? Extra yield is
                  coming from both from fees within the balancer pool and from
                  lending via AAVE
                </span>
                <div className="boost_staking-card">
                <AppCard
                  className="balancer"
                  styles={{ width: "fit-content", marginTop: "1rem" }}
                >
                  <span className="balancer_container">
                    <img
                      src={BalancerLogo}
                      alt=""
                      style={{ width: "2rem" }}
                    ></img>
                    <p>Balancer</p>
                  </span>
                  <div className="provider-apr">
                    <h2>4.89%</h2>
                    <span>Net APR</span>
                  </div>
                <AppButton
                  styles={{
                    backgroundColor: "rgb(135,169,240)",
                    color: "white",
                    marginTop: "2rem",
                  }}
                >
                  BOOST YOUR STAKING
                </AppButton>
                </AppCard>
              </div>
                <div className="poweredby_container">
                  <span>Powered by</span>
                  <span>
                    <img
                      src={BalancernamedLogo}
                      alt=""
                      style={{ width: "9rem", height: "2.5rem" }}
                    ></img>
                  </span>
                </div>
              </CardContent>
            </AppCard>
          </section>
          <div className="cardheading-container">
            <div className="heading">
              <span className="heading_text">How to stake</span>
            </div>
            <div className="infocard-conatiner">
              <div>
                <p>step1: </p>
                <AppCard styles={{ backgroundColor: "#1d1e1f" }}>
                  <CardContent>
                    Connect your Wallet
                    <p>
                      Click “Connect Wallet” and allow Metamask to connect your
                      account to the website.
                    </p>
                  </CardContent>
                </AppCard>
              </div>
              <div>
                <p>step2: </p>
                <AppCard styles={{ backgroundColor: "#1d1e1f" }}>
                  <CardContent>
                    <p>
                      Either stake with the provider of your choice or click
                      “Auto stake” to use our unique auto-stake-function that
                      always guarantees you the best interest rates.
                    </p>
                  </CardContent>
                </AppCard>
              </div>
              <div>
                <p>step3: </p>
                <AppCard styles={{ backgroundColor: "#1d1e1f" }}>
                  <CardContent>
                    <p>
                      Enter the amount of ETH you want to stake and click stake.
                    </p>
                  </CardContent>
                </AppCard>
              </div>
              <div>
                <p>step3: </p>
                <AppCard styles={{ backgroundColor: "#1d1e1f" }}>
                  <CardContent>
                    <p>
                      Again Metamask will popup. Just sign the transaction there
                      and you are good to go.
                    </p>
                  </CardContent>
                </AppCard>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <StakingCard {...selectedProvider} onBack={()=>{
          state.isStakingScreen = false;
          setSelectedProvider();
        }}/>
      )}
    </div>
  );
}

export default Providers;
