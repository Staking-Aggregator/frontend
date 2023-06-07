import axios from 'axios';
import { BalancerSDK, Network, BalancerError, BalancerErrorCode } from '@balancer-labs/sdk';

const balancerConfig = {
  network: Network.MAINNET,
  rpcUrl: "https://eth-mainnet.g.alchemy.com/v2/X3pWptWZZw8U_ihy_DmLoZaS8THtFomu"
}

// 80/20 BAL/WETH pool
const balancerPoolId = '0x5c6ee304399dbdb9c8ef030ab642b10820db8f56000200000000000000000014';

export async function LidoAPR() {
  try {
    const response = await axios.get('https://eth-api.lido.fi/v1/protocol/steth/apr/sma');
    return response.data.data.smaApr;
  } catch (error) {
    console.error("Error while getting LidoAPR: ", error);
  }
}
// export async function RocketPoolAPR() {
//   try {
//     const response = await axios.get('https://api.rocketpool.net/api/apr', {
//       headers: {
//         'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36'
//       }
//     });
//     console.log("response :", response.data);
//     return response;
//   } catch (error) {
//     console.error("Error while getting RocketPool: ", error);
//   }
// }

export async function BalancerPoolApr() {
  const balancer = new BalancerSDK(balancerConfig);
  const poolId = balancerPoolId;
  const pool = await balancer.pools.find(poolId);
  if (!pool) throw new BalancerError(BalancerErrorCode.POOL_DOESNT_EXIST);
  const spotPrice = await pool.calcSpotPrice(
    '0xba100000625a3754423978a60c9317c58a424e3D', // BAL
    '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2' // WETH
  );
  return Number(spotPrice).toFixed(2);
}