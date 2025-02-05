import "./App.css";
import { Canvas } from "@react-three/fiber";
import Scenes from "./Scenes";

function App() {
  // const createCanvasHandler = (state) => {
  //   state.gl.setClearColor("yellow",0.5);
  // }
  return (
    <Canvas>
      <Scenes />
    </Canvas>
  );
}

export default App;
