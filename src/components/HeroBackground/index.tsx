"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import vertexShader from "./shaders/vertex.glsl";
import fragmentShader from "./shaders/fragment.glsl";
import { alphaT } from "three/webgpu";

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

const easeInOutSine = (t: number): number => {
  return -(Math.cos(Math.PI * t) - 1) / 2;
};

const HeroBackground = () => {
  const backgroundRef = useRef<HTMLDivElement | null>(null);
  const particleRef = useRef<Particle[] | null>(null);

  useEffect(() => {
    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer();
    const controls = new OrbitControls(camera, renderer.domElement);
    const baseColor = new THREE.Color(0x0000ff); // Blue base color

    renderer.setSize(window.innerWidth, window.innerHeight);

    // Append the renderer to the div
    if (backgroundRef.current) {
      backgroundRef.current.appendChild(renderer.domElement);
    }

    const width = window.innerWidth;
    const height = window.innerHeight;
    const startPoint = new THREE.Vector3(-width / 100, height / 100, 0);
    const endpoint = new THREE.Vector3(width / 100, -height / 100, 0);
    const curve = new THREE.CatmullRomCurve3([
      startPoint,
      new THREE.Vector3(-20, 0, -3),
      new THREE.Vector3(-5, 4, 2),
      new THREE.Vector3(0, -4, -2),
      new THREE.Vector3(10, 0, 3),
      endpoint,
    ]);

    const numParticles = 100;
    const particles: Particle[] = [];
    const particleGeometry = new THREE.SphereGeometry(0.05, 8, 8);
    const particleMaterial = new THREE.MeshBasicMaterial({
      color: baseColor,
      transparent: true,
      opacity: 1,
    });

    for (let i = 0; i < numParticles; i++) {
      const t = i / numParticles;

      if (!particles[i]) {
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
    }

    particleRef.current = particles;
    camera.position.z = 15;

    // Animation function
    const animate = () => {
      requestAnimationFrame(animate);

      if (particleRef.current) {
        particleRef.current.forEach((particle, index) => {
          // Particle position
          particle.t += particle.speed;

          if (particle.t > 1) {
            particle.t = 0;
          }

          const point = curve.getPointAt(particle.t);

          particle.mesh.position.set(point.x, point.y, point.z);

          // Particle alpha
          if (particle.alphaT > 1) {
            particle.alphaDirection = -1;
          } else if (particle.alphaT < 0.5) {
            particle.alphaDirection = 1;
          }

          particle.alphaT += 0.005 * particle.alphaDirection;
          particle.mesh.material.opacity = particle.alphaT;
        });
      }

      controls.update();
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
      className="fixed w-screen h-screen top-0 left-0 z-0"
      ref={backgroundRef}
    />
  );
};

export default HeroBackground;
