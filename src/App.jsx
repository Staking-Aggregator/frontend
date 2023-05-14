import { useEffect } from "react";
import { ethers } from 'ethers';
import { Navbar } from "./components";
import { Stats, Providers } from "./sections";
import { connectWallet } from "./utils";
import ETHStakingChainlinkDataFeedABI from "./contracts-abi/ETHStakingChainlinkDataFeed.json";
import "./App.css";

function App() {
  useEffect(()=>{
    // const provider = new ethers.providers.JsonRpcProvider('https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID');
    // const ethStakingDataFeedContract = '0xceA6Aa74E6A86a7f85B571Ce1C34f1A60B77CD29';
    // const contract = new ethers.Contract(contractAddress, ETHStakingChainlinkDataFeedABI, provider);
    // (async ()=>{
    //   try {
    //     const result = await contract.latestRoundData();
    //     console.log('Result:', result);
    //   } catch (error) {
    //     console.error('Error while fetching ETH Staking APR:', error); 
    //   }
    // })();
    if (window.ethereum && window.ethereum.isConnected()) {
      // Wallet is already connected
      connectWallet();
    }
  },[])
  return (
    <>
      <Navbar></Navbar>
      <div className="app-root-div">
        {/* <Stats/> */}
        <Providers />
      </div>
    </>
  );
}

export default App;
