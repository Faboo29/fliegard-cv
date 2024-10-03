import * as THREE from 'three';
import { CURVE_CONFIGURATION, CURVE_NAME } from './constants';

export const getCurves: () => Map<
  keyof typeof CURVE_CONFIGURATION,
  THREE.CatmullRomCurve3
> = () => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const startPoint = new THREE.Vector3(-width / 100, height / 100, 0);
  const endpoint = new THREE.Vector3(width / 100, -height / 100, 0);

  return new Map([
    [
      CURVE_NAME.BLUE,
      new THREE.CatmullRomCurve3([
        startPoint,
        new THREE.Vector3(-20, 0, -6),
        new THREE.Vector3(-5, 4, 6),
        new THREE.Vector3(0, -4, -2),
        new THREE.Vector3(10, 0, 4),
        endpoint
      ])
    ],
    [
      CURVE_NAME.YELLOW,
      new THREE.CatmullRomCurve3([
        startPoint,
        new THREE.Vector3(-18, -1, -4),
        new THREE.Vector3(-4, 2, 0),
        new THREE.Vector3(2, -4, -4),
        new THREE.Vector3(12, 1, 4),
        endpoint
      ])
    ],
    [
      CURVE_NAME.GREEN,
      new THREE.CatmullRomCurve3([
        startPoint,
        new THREE.Vector3(-10, 8, 2),
        new THREE.Vector3(-4, -3, -4),
        new THREE.Vector3(1, -3, 0),
        new THREE.Vector3(10, 5, -2),
        endpoint
      ])
    ],
    [
      CURVE_NAME.SHAKESPEARE,
      new THREE.CatmullRomCurve3([
        startPoint,
        new THREE.Vector3(-16, -6, -3),
        new THREE.Vector3(-4, 4, 4),
        new THREE.Vector3(0, 1, -8),
        new THREE.Vector3(8, 6, 3),
        endpoint
      ])
    ],
    [
      CURVE_NAME.MOLIERE,
      new THREE.CatmullRomCurve3([
        startPoint,
        new THREE.Vector3(-15, -4, -3),
        new THREE.Vector3(-0, 1, 4),
        new THREE.Vector3(6, 8, 3),
        endpoint
      ])
    ]
  ]);
};
