import * as THREE from "three";
import {
  CURVE_CONFIGURATION,
  CURVE_NAME,
} from "@/components/HeroBackground/constants";

type CurveName = (typeof CURVE_NAME)[keyof typeof CURVE_NAME];
type CurveType = keyof typeof CURVE_CONFIGURATION;

export type CurveRef = Map<
  CurveType,
  {
    curve: THREE.CatmullRomCurve3;
    particles: Particle[];
  }
>;

export type Particle = {
  mesh: THREE.Mesh<
    THREE.SphereGeometry,
    THREE.MeshBasicMaterial,
    THREE.Object3DEventMap
  >;
  t: number;
  speed: number;
  alphaT: number;
  alphaDirection: 1 | -1;
};
