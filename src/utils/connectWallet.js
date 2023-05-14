import state from "../store";

const connectWallet = async () =>{
    if(window.ethereum){
      const walletAddress = await window.ethereum.request({ method: 'eth_requestAccounts' });
      state.walletAddress = walletAddress[0];
      console.log("click: ",walletAddress)
    }
    else{
      alert("Your browser don't have metamask installed. Please install it first.")
    }
}
export default connectWallet;