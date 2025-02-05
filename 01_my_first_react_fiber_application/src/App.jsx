import "./App.css";
import { Canvas } from "@react-three/fiber";
import Scenes from "./Scenes";

function App() {
  // const createCanvasHandler = (state) => {
  //   state.gl.setClearColor("yellow",0.5);
  // }
  return (
    <Canvas
      gl={{ antialias: true, alpha: true }}
      orthographic
      camera={{
        fov: 5,
        near: 0.1,
        far: 100,
        zoom: 120,
        position: [2, 2, 5],
      }}
      // onCreated={createCanvasHandler}
    >
      
      <Scenes />
    </Canvas>
  );
}

export default App;
