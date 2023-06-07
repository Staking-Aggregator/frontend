import AppCard from "../CustomCard";
import { CardContent } from "@mui/material"

function PoolDetailsCard({
  poolName,
  poolNetApr,
}) {
  return (
    <div className="pool-details-card-root">
      <AppCard>
        <div className="card-container">
          <CardContent>
            <div className="pool-details">
              <h3>{poolName}</h3>
              <div className="provider-apr">
                <h2>{poolNetApr}</h2>
                <span>Net APR</span>
              </div>
            </div>
          </CardContent>
        </div>
      </AppCard>
    </div>
  );
}

export default PoolDetailsCard;