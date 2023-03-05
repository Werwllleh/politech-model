import React, {Suspense} from 'react';
import './App.css';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import {Model} from "./Model";
function App() {
  return (
      <div className="App">
        <Canvas className='canvas4'>
          <OrbitControls autoRotate={true} enableZoom={true} />
          <ambientLight intensity={0.5}/>
          <directionalLight position={[-2,5,3]} intensity={1}/>
          <group>
            <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position = {[0, -1.1, -2]}>
              <planeBufferGeometry attach='geometry' args={[10, 10]}/>
              <meshStandardMaterial attach='material' color='#ededed'/>
            </mesh>
          </group>
          <Suspense fallbak={null}>
            <Model/>
          </Suspense>
        </Canvas>
      </div>
  );
}

export default App;