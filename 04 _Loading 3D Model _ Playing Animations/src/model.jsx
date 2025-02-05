import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect } from "react";

const Model = () => {
  // const model = useLoader(GLTFLoader, "./model/dog.glb");
  const model = useGLTF("./model/dog.glb");

  const animation = useAnimations(model.animations,model.scene);
  console.log(animation);
  
  useEffect(()=>{
    // animation.actions.Congratulate.play()
    // animation.actions.Idle.play()
    // animation.actions.ClickedOn.play()
    // animation.actions.Pleased.play()
    animation.actions.Show.play()
  },[])

  return <primitive scale={1} position-y={-0.4} object={model.scene} />;
};

useGLTF.preload("./model/dog.glb");

export default Model;
