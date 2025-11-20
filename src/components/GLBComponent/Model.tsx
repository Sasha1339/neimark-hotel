import {useGLTF} from "@react-three/drei";
import {useFrame, useThree} from "@react-three/fiber";
import {Canvas} from '@react-three/fiber';
import {Suspense, useState, useEffect, useRef} from 'react';
import * as THREE from 'three';

interface MaterialMesh extends THREE.Mesh {
  material: THREE.Material | THREE.Material[];
}

export function SelectableModel({url}: { url: string }) {
  const { scene } = useGLTF(url);
  const groupRef = useRef<THREE.Group>(null);
  const { raycaster, mouse, camera } = useThree();

  // Состояние для хранения выбранного объекта
  const [selectedObject, setSelectedObject] = useState<THREE.Object3D | null>(null);
  // Ref для источника света
  const spotLightRefUp = useRef<THREE.SpotLight>(null);
  const spotLightRefLeft = useRef<THREE.SpotLight>(null);
  const lightVisualRefLeft = useRef<THREE.Mesh>(null);

  const handleClick = (event: any) => {
    event.stopPropagation();
    const object = event.object as MaterialMesh;

    console.log('🎯 КЛИК! Объект:', object.name);

    // Устанавливаем выбранный объект
    setSelectedObject(object);

    // if (object.material) {
    //   const materials = Array.isArray(object.material)
    //     ? object.material
    //     : [object.material];
    //
    //   materials.forEach((material: any) => {
    //     if (material.color && material.color instanceof THREE.Color) {
    //       material.color.setHex(Math.random() * 0xffffff);
    //     }
    //   });
    // }
  };

  // Используем useFrame для постоянного обновления позиции света
  useEffect(() => {
    if (selectedObject && spotLightRefUp.current && spotLightRefLeft.current && lightVisualRefLeft.current) {
      // Получаем bounding box объекта
      const boundingBox = new THREE.Box3().setFromObject(selectedObject);
      const size = new THREE.Vector3();
      boundingBox.getSize(size);

      // Получаем центр объекта
      const center = new THREE.Vector3();
      boundingBox.getCenter(center);

      console.log(selectedObject)

      let rotation = {
        x: 0,
        y: 0,
        z: 0,
      }



      rotation = new THREE.Euler().setFromQuaternion(selectedObject.quaternion);


      // Вычисляем позицию света - над объектом на высоте равной половине высоты объекта
      const lightHeightX = 1;
      const lightHeightY = 1;
      const lightHeightZ = 0;

      // Устанавливаем позицию света
      spotLightRefUp.current.position.set(
        center.x,
        center.y + lightHeightY, // Над объектом на половине его высоты
        center.z
      );

      console.log(rotation.y / Math.PI * 180);

      spotLightRefLeft.current.position.set(
        center.x + (lightHeightX * Math.cos(rotation.y) - lightHeightZ * Math.sin(rotation.y)),
        center.y, // Над объектом на половине его высоты
        center.z + (lightHeightX * Math.sin(-rotation.y) + lightHeightZ * Math.cos(-rotation.y)), //минус перед углом так как ось z направлена вниз
      );

      lightVisualRefLeft.current.position.copy(spotLightRefLeft.current.position);
      lightVisualRefLeft.current.visible = spotLightRefLeft.current.visible;
      // Направляем свет на объект
      spotLightRefUp.current.target = selectedObject;
      spotLightRefLeft.current.target = selectedObject;

      // Включаем свет
      spotLightRefUp.current.visible = true;
      spotLightRefLeft.current.visible = true;
    } else if (spotLightRefUp.current && spotLightRefLeft.current) {
      // Если объект не выбран, выключаем свет
      spotLightRefUp.current.visible = false;
      spotLightRefLeft.current.visible = false;
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
        color={0xff0000} // Красный цвет
        intensity={20}    // Интенсивность
        distance={50}    // Дистанция
        angle={Math.PI / 9} // Угол конуса
        penumbra={0.1}   // Размытие краев
        decay={2}        // Затухание
        visible={false}  // Изначально скрыт
      />

      <spotLight
        ref={spotLightRefLeft}
        color={0x00ff00} // Красный цвет
        intensity={20}    // Интенсивность
        distance={50}    // Дистанция
        angle={Math.PI / 9} // Угол конуса
        penumbra={0.1}   // Размытие краев
        decay={2}        // Затухание
        visible={false}  // Изначально скрыт
      />

      <mesh ref={lightVisualRefLeft} visible={false}>
        <sphereGeometry args={[0.1, 16, 16]}/>
        <meshBasicMaterial color={0x00ff00}/>
      </mesh>
    </group>
  );
}