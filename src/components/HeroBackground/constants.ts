import * as THREE from 'three';

export const CURVE_NAME = {
  BLUE: 'BLUE',
  YELLOW: 'YELLOW',
  GREEN: 'GREEN',
  SHAKESPEARE: 'SHAKESPEARE',
  MOLIERE: 'MOLIERE'
} as const;

export const CURVE_CONFIGURATION = {
  BLUE: {
    COLOR: new THREE.Color(0x0a95f5),
    PARTICLE_NUMBER: 300,
    PARTICLE_RADIUS: 0.018
  },
  YELLOW: {
    COLOR: new THREE.Color(0x16d2e9),
    PARTICLE_NUMBER: 100,
    PARTICLE_RADIUS: 0.01
  },
  GREEN: {
    COLOR: new THREE.Color(0x4bb2d8),
    PARTICLE_NUMBER: 400,
    PARTICLE_RADIUS: 0.012
  },
  SHAKESPEARE: {
    COLOR: new THREE.Color(0x4bb2d8),
    PARTICLE_NUMBER: 660,
    PARTICLE_RADIUS: 0.016
  },
  MOLIERE: {
    COLOR: new THREE.Color(0x6bc4d8),
    PARTICLE_NUMBER: 400,
    PARTICLE_RADIUS: 0.012
  }
} as const satisfies Record<
  (typeof CURVE_NAME)[keyof typeof CURVE_NAME],
  {
    COLOR: THREE.Color;
    PARTICLE_NUMBER: number;
    PARTICLE_RADIUS: number;
  }
>;
