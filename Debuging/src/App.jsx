import "./App.css";
import { Canvas } from "@react-three/fiber";
import Scenes from "./Scenes";
import SphereScene from "./SphereScene";

function App() {
  // const createCanvasHandler = (state) => {
  //   state.gl.setClearColor("yellow",0.5);
  // }
  return (
    <Canvas style={{
      background:"black"
    }}>
      {/* <Scenes /> */}
      <SphereScene />
    </Canvas>
  );
}

export default App;
