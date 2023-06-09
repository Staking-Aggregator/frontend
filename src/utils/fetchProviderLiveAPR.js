import axios from 'axios';
import { BalancerSDK, Network, BalancerError, BalancerErrorCode } from '@balancer-labs/sdk';

const balancerConfig = {
  network: Network.MAINNET,
  rpcUrl: import.meta.env.ALCHEMY_MAINNET_RPC_URL,
}

const balancerPools = [{
  id: '0x5c6ee304399dbdb9c8ef030ab642b10820db8f56000200000000000000000014',
  tokens: 'BAL/WETH',
}];
const TokenAddress = {
  BAL: '0xba100000625a3754423978a60c9317c58a424e3D',
  WETH: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
}

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
  const poolItem = balancerPools[0];
  const poolId = poolItem.id;
  const pool = await balancer.pools.find(poolId);
  console.log("pool info: ", pool);
  if (!pool) throw new BalancerError(BalancerErrorCode.POOL_DOESNT_EXIST);
  const spotPrice = await pool.calcSpotPrice(
    TokenAddress.BAL,
    TokenAddress.WETH
  );
  return {
    name: pool.name,
    tokens: poolItem.tokens,
    // volume: Number(pool.totalSwapVolume),
    apr: pool.apr,
    spotPrice: Number(spotPrice).toFixed(2),
    swapFees: pool.swapFee,
  };
}