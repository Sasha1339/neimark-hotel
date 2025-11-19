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

  const handleClick = (event: any) => {
    event.stopPropagation();
    const object = event.object as MaterialMesh;

    console.log('🎯 КЛИК! Объект:', object.name);

    if (object.material) {
      // Проверяем является ли material массивом или одиночным материалом
      const materials = Array.isArray(object.material)
        ? object.material
        : [object.material];

      materials.forEach((material: any) => {
        if (material.color && material.color instanceof THREE.Color) {
          material.color.setHex(Math.random() * 0xffffff);
        }
      });
    }
  };

  return (
    <primitive
      ref={groupRef}
      object={scene}
      onClick={handleClick}
      onPointerOver={() => document.body.style.cursor = 'pointer'}
      onPointerOut={() => document.body.style.cursor = 'default'}
    />
  );
}