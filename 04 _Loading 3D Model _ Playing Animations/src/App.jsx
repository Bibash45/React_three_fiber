import "./App.css";
import { Canvas } from "@react-three/fiber";
import Scenes from "./Scenes";
import { Perf } from "r3f-perf";

function App() {
  return (
    <Canvas
      // style={{
      //   backgroundColor: "black",
      // }}
    >
      <Scenes />
      <Perf position="top-left" />
    </Canvas>
  );
}

export default App;
