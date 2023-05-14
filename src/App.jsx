import { useEffect } from "react";
import { Navbar } from "./components";
import { Stats, Providers } from "./sections";
import { connectWallet } from "./utils";
import "./App.css";

function App() {
  useEffect(()=>{
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
