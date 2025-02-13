import "./App.css";
import { Canvas } from "@react-three/fiber";
import Scenes from "./Scenes";

function App() {
  return (
    <Canvas>
      <Scenes />
    </Canvas>
  );
}

export default App;
