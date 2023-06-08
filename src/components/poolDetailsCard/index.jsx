import AppCard from "../CustomCard";
import { CardContent } from "@mui/material"

function PoolDetailsCard({
  poolName,
  poolTokens,
  poolSpotPrice,
}) {
  return (
    <div className="pool-details-card-root">
      <AppCard>
        <div className="card-container">
          <CardContent>
            <div className="pool-details">
              <h3>{poolName}: {poolTokens}</h3>
              <h2>SpotPrice: {poolSpotPrice}</h2>
            </div>
          </CardContent>
        </div>
      </AppCard>
    </div>
  );
}

export default PoolDetailsCard;