import AppCard from "../CustomCard";
import { CardContent } from "@mui/material"

function PoolDetailsCard({
  name,
  tokens,
  apr,
  spotPrice,
  swapFees,
}) {
  return (
    <div className="pool-details-card-root">
      <AppCard>
        <div className="card-container">
          <CardContent>
            <div className="pool-details">
              <h2>{name}: {tokens}</h2>
              {/* {!apr ? (<span>APR: {apr}   </span>) : {}} */}
              <span>SpotPrice: {spotPrice}</span>
              <span>SwapFees: {swapFees}</span>
            </div>
          </CardContent>
        </div>
      </AppCard>
    </div>
  );
}

export default PoolDetailsCard;