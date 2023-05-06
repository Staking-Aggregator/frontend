import "./App.css";
import Navbar from "./components/Navbar";
import { Stats } from "./sections";

function App() {
  return (
    <>
        <Navbar></Navbar>
      <div>
        <Stats/>
      </div>
    </>
  );
}

export default App;
