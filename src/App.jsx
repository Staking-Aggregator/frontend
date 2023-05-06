import "./App.css";
import {Navbar} from "./components";
import { Stats,Providers } from "./sections";

function App() {
  return (
    <>
        <Navbar></Navbar>
      <div className="app-root-div">
        <Stats/>
        <Providers/>
      </div>
    </>
  );
}

export default App;
