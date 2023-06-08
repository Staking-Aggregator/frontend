import state from "../store";
import { ethers } from 'ethers';

const connectWallet = async () =>{
    if(window.ethereum){
      const walletAddress = await window.ethereum.request({ method: 'eth_requestAccounts' });
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      state.provider = provider;
      state.signer = signer;
      state.walletAddress = walletAddress[0];
      try {
        await provider.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: "0x13881"}],
        });
        console.log("You have switched to the right network")
      } catch (error) {
        console.log("Not able to switch network");
      }
    }
    else{
      alert("Your browser don't have metamask installed. Please install it first.")
    }
}
export default connectWallet;