import { OrbitControls } from "@react-three/drei";
import { useState } from "react";

const Scenes = () => {
  const [active, setActive] = useState(false);

  const clickHandler = () => {
    setActive(!active);
  };

  // onClick={(e) => console.log('click')}
  // onContextMenu={(e) => console.log('context menu')}
  // onDoubleClick={(e) => console.log('double click')}
  // onWheel={(e) => console.log('wheel spins')}
  // onPointerUp={(e) => console.log('up')}
  // onPointerDown={(e) => console.log('down')}
  // onPointerOver={(e) => console.log('over')}
  // onPointerOut={(e) => console.log('out')}
  // onPointerEnter={(e) => console.log('enter')} // see note 1
  // onPointerLeave={(e) => console.log('leave')} // see note 1
  // onPointerMove={(e) => console.log('move')}
  // onPointerMissed={() => console.log('missed')}
  // onUpdate={(self) => console.log('props have been updated')}

  return (
    <>
      <OrbitControls />
      <mesh onClick={clickHandler} position-x={1}>
        <boxGeometry />
        <meshBasicMaterial color={active ? "orange" : "blue"} />
      </mesh>

      <mesh onClick={(e) => e.stopPropagation()} position-x={-1}>
        <boxGeometry />
        <meshBasicMaterial color="purple" />
      </mesh>
    </>
  );
};

export default Scenes;
