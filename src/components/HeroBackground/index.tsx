"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { getCurves } from "./curves";
import { CurveRef } from "@/types";
import { CURVE_CONFIGURATION } from "./constants";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

type Particle = {
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

const HeroBackground = () => {
  const backgroundRef = useRef<HTMLDivElement | null>(null);
  const cameraRotationAngle = useRef<number>(0);
  const curveRef = useRef<CurveRef>(new Map());

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    // const controls = new OrbitControls(camera, renderer.domElement);

    const baseColor = new THREE.Color(0x1ecbe1);

    renderer.setSize(window.innerWidth, window.innerHeight);

    // Append the renderer to the div
    if (backgroundRef.current) {
      backgroundRef.current.appendChild(renderer.domElement);
    }

    const axessHelper = new THREE.AxesHelper(20);

    // scene.add(axessHelper);

    const curves = getCurves();

    curves.forEach((curve, curveKey) => {
      const particles: Particle[] = [];
      const curveConfiguration = CURVE_CONFIGURATION[curveKey];
      const { COLOR, PARTICLE_NUMBER, PARTICLE_RADIUS } = curveConfiguration;
      const particleGeometry = new THREE.SphereGeometry(
        PARTICLE_RADIUS ?? 0.01,
        8,
        8
      );
      const particleMaterial = new THREE.MeshBasicMaterial({
        color: COLOR ?? baseColor,
        transparent: true,
        opacity: 1,
      });

      for (let i = 0; i < PARTICLE_NUMBER; i++) {
        const t = i / PARTICLE_NUMBER;
        const particle = new THREE.Mesh(particleGeometry, particleMaterial);

        scene.add(particle);

        particles.push({
          mesh: particle,
          t,
          speed: Math.random() * 0.0001 + 0.0001,
          alphaT: Math.random() * 0.5 + 0.5,
          alphaDirection: 1,
        });
      }

      curveRef.current.set(curveKey, {
        curve,
        particles,
      });
    });

    camera.position.z = 12;

    // Animation function
    const animate = () => {
      requestAnimationFrame(animate);

      const radius = -2;
      cameraRotationAngle.current += 0.002;
      const angle = cameraRotationAngle.current;

      camera.position.set(radius * Math.cos(angle), 0, 8);
      camera.lookAt(0, 0, 0);

      if (curveRef.current.size > 0) {
        curveRef.current.forEach((curveSection, curveKey) => {
          curveSection.particles.forEach((particle) => {
            particle.t += particle.speed;

            if (particle.t > 1) {
              particle.t = 0;
            }

            const point = curveSection.curve.getPointAt(particle.t);

            particle.mesh.position.set(point.x, point.y, point.z);

            // Particle alpha
            if (particle.alphaT > 0.8) {
              particle.alphaDirection = -1;
            } else if (particle.alphaT < 0.4) {
              particle.alphaDirection = 1;
            }

            particle.alphaT += 0.0005 * particle.alphaDirection;
            particle.mesh.material.opacity = particle.alphaT;
          });
        });
      }

      renderer.render(scene, camera);
    };

    // Call the animation
    animate();

    // Resize the renderer and update camera aspect ratio on window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      if (backgroundRef.current) {
        backgroundRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      className="fixed w-screen h-screen top-0 left-0 -z-10"
      ref={backgroundRef}
      style={{
        background: "url('/bg-dark.jpg') no-repeat 30% 50%",
        backgroundSize: "cover",
      }}
    />
  );
};

export default HeroBackground;
