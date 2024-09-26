import * as THREE from "three";

export const CURVE_NAME = {
  BLUE: "BLUE",
  YELLOW: "YELLOW",
  GREEN: "GREEN",
  SHAKESPEARE: "SHAKESPEARE",
} as const;

export const CURVE_CONFIGURATION = {
  BLUE: {
    COLOR: new THREE.Color(0x0a95f5),
    PARTICLE_NUMBER: 300,
    PARTICLE_RADIUS: 0.01,
  },
  YELLOW: {
    COLOR: new THREE.Color(0x16d2e9),
    PARTICLE_NUMBER: 100,
    PARTICLE_RADIUS: 0.006,
  },
  GREEN: {
    COLOR: new THREE.Color(0x88f4ec),
    PARTICLE_NUMBER: 400,
    PARTICLE_RADIUS: 0.008,
  },
  SHAKESPEARE: {
    COLOR: new THREE.Color(0x4bb2d8),
    PARTICLE_NUMBER: 660,
    PARTICLE_RADIUS: 0.01,
  },
} as const satisfies Record<
  (typeof CURVE_NAME)[keyof typeof CURVE_NAME],
  {
    COLOR: THREE.Color;
    PARTICLE_NUMBER: number;
    PARTICLE_RADIUS: number;
  }
>;
