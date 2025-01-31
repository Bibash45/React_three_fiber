import "./App.css";
import { Canvas } from "@react-three/fiber";
import Scenes from "./Scenes";

function App() {
  return (
    <Canvas camera={{
      fov:75,
      near:0.1,
      far:100,
      // position:[2,2,5]
    }}>
      <Scenes />
    </Canvas>
  );
}

export default App;
