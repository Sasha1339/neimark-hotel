import {useGLTF} from "@react-three/drei";
import {useFrame, useThree} from "@react-three/fiber";
import {Canvas} from '@react-three/fiber';
import {Suspense, useState, useEffect, useRef} from 'react';
import * as THREE from 'three';

interface MaterialMesh extends THREE.Mesh {
  material: THREE.Material | THREE.Material[];
}

export function SelectableModel({url}: { url: string }) {
  const {scene} = useGLTF(url);
  const groupRef = useRef<THREE.Group>(null);
  const {raycaster, mouse, camera} = useThree();

  // Состояние для хранения выбранного объекта
  const [selectedObject, setSelectedObject] = useState<THREE.Object3D | null>(null);
  // Ref для источника света
  const spotLightRefUp = useRef<THREE.SpotLight>(null);
  const spotLightRefLeft = useRef<THREE.SpotLight>(null);
  const spotLightRefFront = useRef<THREE.SpotLight>(null);
  const spotLightRefRight = useRef<THREE.SpotLight>(null);
  const spotLightRefBack = useRef<THREE.SpotLight>(null);
  const lightVisualRefLeft = useRef<THREE.Mesh>(null);

  const handleClick = (event: any) => {
    event.stopPropagation();
    const object = event.object as MaterialMesh;

    console.log('🎯 КЛИК! Объект:', object.name);

    setSelectedObject(object);
  };

  useEffect(() => {
    scene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.castShadow = true;  // объект отбрасывает тень
        child.receiveShadow = true; // объект получает тень
      }
    });
  }, [scene]);

  // Используем useFrame для постоянного обновления позиции света
  useEffect(() => {
    if (selectedObject
      && spotLightRefUp.current
      && spotLightRefLeft.current
      && spotLightRefRight.current
      && spotLightRefFront.current
      && spotLightRefBack.current
      && lightVisualRefLeft.current) {
      // Получаем bounding box объекта
      const boundingBox = new THREE.Box3().setFromObject(selectedObject);
      const size = new THREE.Vector3();
      boundingBox.getSize(size);

      // Получаем центр объекта
      const center = new THREE.Vector3();
      boundingBox.getCenter(center);

      const rotation = new THREE.Euler().setFromQuaternion(selectedObject.quaternion);


      // Вычисляем позицию света - над объектом на высоте равной половине высоты объекта
      const radius = 0.3;
      const lightHeightY = 1;

      // Устанавливаем позицию света
      spotLightRefUp.current.position.set(
        center.x,
        center.y + lightHeightY, // Над объектом на половине его высоты
        center.z
      );

      console.log(rotation.y / Math.PI * 180);

      spotLightRefLeft.current.position.set(
        center.x + (radius * Math.cos(rotation.y)),
        0, // Над объектом на половине его высоты
        center.z + (radius * Math.sin(-rotation.y)), //минус перед углом так как ось z направлена вниз
      );

      spotLightRefRight.current.position.set(
        center.x + (radius * Math.cos(rotation.y + Math.PI)),
        0, // Над объектом на половине его высоты
        center.z + (radius * Math.sin(-(rotation.y + Math.PI))), //минус перед углом так как ось z направлена вниз
      );

      spotLightRefFront.current.position.set(
        center.x + (radius * Math.cos(rotation.y + Math.PI / 2)),
        0, // Над объектом на половине его высоты
        center.z + (radius * Math.sin(-(rotation.y + Math.PI / 2))), //минус перед углом так как ось z направлена вниз
      );

      spotLightRefBack.current.position.set(
        center.x + (radius * Math.cos(rotation.y - Math.PI / 2)),
        0, // Над объектом на половине его высоты
        center.z + (radius * Math.sin(-(rotation.y - Math.PI / 2))), //минус перед углом так как ось z направлена вниз
      );

      lightVisualRefLeft.current.position.copy(spotLightRefFront.current.position);
      lightVisualRefLeft.current.visible = spotLightRefFront.current.visible;
      // Направляем свет на объект
      spotLightRefUp.current.target = selectedObject;
      spotLightRefLeft.current.target = selectedObject;
      spotLightRefRight.current.target = selectedObject;
      spotLightRefFront.current.target = selectedObject;
      spotLightRefBack.current.target = selectedObject;

      // Включаем свет
      spotLightRefUp.current.visible = true;
      spotLightRefLeft.current.visible = true;
      spotLightRefRight.current.visible = true;
      spotLightRefFront.current.visible = true;
      spotLightRefBack.current.visible = true;
    } else if (spotLightRefUp.current && spotLightRefLeft.current && spotLightRefRight.current && spotLightRefFront.current && spotLightRefBack.current) {
      // Если объект не выбран, выключаем свет
      spotLightRefUp.current.visible = false;
      spotLightRefLeft.current.visible = false;
      spotLightRefRight.current.visible = false;
      spotLightRefFront.current.visible = false;
      spotLightRefBack.current.visible = false;
    }
  }, [selectedObject]);

  return (
    <group ref={groupRef}>
      <primitive
        object={scene}
        onClick={handleClick}
        onPointerOver={() => document.body.style.cursor = 'pointer'}
        onPointerOut={() => document.body.style.cursor = 'default'}
      />
      {/* Красный источник света */}
      <spotLight
        ref={spotLightRefUp}
        color={0xff0000}
        intensity={20}
        distance={50}
        angle={Math.PI / 9}
        penumbra={0.1}
        decay={2}
        visible={false}
        castShadow={true}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.0001}
        shadow-camera-near={0.1}
        shadow-camera-far={50}
      />

      <spotLight
        ref={spotLightRefLeft}
        color={0x00ff00}
        intensity={1}
        distance={50}
        angle={Math.PI / 4}
        penumbra={0.1}
        decay={2}
        visible={false}
        castShadow={true}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.0001}
        shadow-camera-near={0.1}
        shadow-camera-far={50}
      />

      <spotLight
        ref={spotLightRefRight}
        color={0x00ff00}
        intensity={1}
        distance={50}
        angle={Math.PI / 4}
        penumbra={0.1}
        decay={2}
        visible={false}
        castShadow={true}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.0001}
        shadow-camera-near={0.1}
        shadow-camera-far={50}
      />

      <spotLight
        ref={spotLightRefFront}
        color={0x00ff00}
        intensity={1}
        distance={50}
        angle={Math.PI / 4}
        penumbra={0.1}
        decay={2}
        visible={false}
        castShadow={true}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.0001}
        shadow-camera-near={0.1}
        shadow-camera-far={50}
      />

      <spotLight
        ref={spotLightRefBack}
        color={0x00ff00}
        intensity={1}
        distance={50}
        angle={Math.PI / 4}
        penumbra={0.1}
        decay={2}
        visible={false}
        castShadow={true}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.0001}
        shadow-camera-near={0.1}
        shadow-camera-far={50}
      />

      <mesh ref={lightVisualRefLeft} visible={false}>
        <sphereGeometry args={[0.1, 16, 16]}/>
        <meshBasicMaterial color={0x00ff00}/>
      </mesh>
    </group>
  );
}