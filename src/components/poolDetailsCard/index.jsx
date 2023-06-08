import AppCard from "../CustomCard";
import { CardContent } from "@mui/material"
import { AppButton } from "../../components"
import BalancerLogo from "../../assets/balancer-symbol-logo.svg";

function PoolDetailsCard({
  name,
  tokens,
  apr,
  spotPrice,
  swapFees,
}) {
  return (
    <div className="pool-details-card-root">
      <AppCard
        className="card-container"
        styles={{ width: "fit-content", marginTop: "1rem" }}
      >
        <span>
          <img
            src={BalancerLogo}
            alt=""
            style={{ width: "2rem" }}
          ></img>
          <p>{name}: {tokens}</p>
          <div className="pool-details">
            <h2>{spotPrice}</h2>
            <span>SpotPrice</span>
            <h2>{swapFees}</h2>
            <span>SwapFees</span>
          </div>
        </span>
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
  );
}

export default PoolDetailsCard;