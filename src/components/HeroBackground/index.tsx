'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { getCurves } from './curves';
import { CurveRef } from '@/types';
import { CURVE_CONFIGURATION } from './constants';

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
  const curveRef = useRef<CurveRef>(new Map());
  const scrollDeltaRef = useRef(0);
  const scrollStatus = useRef<{ lastScrollY: number; direction: 1 | -1 }>({
    lastScrollY: 0,
    direction: 1
  });

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    const baseColor = new THREE.Color(0x1ecbe1);

    renderer.setSize(window.innerWidth, window.innerHeight);

    // Append the renderer to the div
    if (backgroundRef.current) {
      backgroundRef.current.appendChild(renderer.domElement);
    }

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
        opacity: 1
      });

      for (let i = 0; i < PARTICLE_NUMBER; i++) {
        const t = i / PARTICLE_NUMBER;
        const particle = new THREE.Mesh(particleGeometry, particleMaterial);

        scene.add(particle);

        particles.push({
          mesh: particle,
          t,
          speed: Math.random() * 0.00005 + 0.00005,
          alphaT: Math.random() * 0.5 + 0.5,
          alphaDirection: 1
        });
      }

      curveRef.current.set(curveKey, {
        curve,
        particles
      });
    });

    camera.position.z = 10;

    // Animation function
    const animate: FrameRequestCallback = (time) => {
      requestAnimationFrame(animate);

      camera.position.x = 10 * Math.sin(time * 0.00006);
      camera.position.z = 10 * Math.cos(time * 0.00006);

      camera.lookAt(0, 0, 0);

      if (curveRef.current.size > 0) {
        curveRef.current.forEach((curveSection) => {
          curveSection.particles.forEach((particle) => {
            particle.t += particle.speed;

            if (particle.t > 1) {
              particle.t = 0;
            }

            const point = curveSection.curve.getPointAt(particle.t);

            particle.mesh.position.set(point.x, point.y, point.z);

            // Particle alpha
            if (particle.alphaT > 0.6) {
              particle.alphaDirection = -1;
            } else if (particle.alphaT < 0.5) {
              particle.alphaDirection = 1;
            }

            particle.alphaT += 0.001 * particle.alphaDirection;
            particle.mesh.material.opacity = particle.alphaT;
          });
        });
      }

      scrollDeltaRef.current = scrollDeltaRef.current * 0.001;

      renderer.render(scene, camera);
    };

    // Call the animation
    animate(0);

    // Resize the renderer and update camera aspect ratio on window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    window.addEventListener('scroll', () => {
      const currentScroll = window.scrollY;

      scrollDeltaRef.current += window.scrollY * 0.0001;

      const scrollDelta = currentScroll - scrollStatus.current.lastScrollY;

      if (scrollDelta < 0) {
        scrollStatus.current.direction = -1;
      } else if (scrollDelta > 0) {
        scrollStatus.current.direction = 1;
      }

      scrollStatus.current.lastScrollY = currentScroll;
    });

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      const backgroundRefCurrent = backgroundRef.current;

      if (backgroundRefCurrent) {
        backgroundRefCurrent.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      className="fixed w-screen top-0 left-0 -z-10"
      ref={backgroundRef}
      style={{
        backgroundImage: "url('/bg-dark.jpg')",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '30% 50%',
        backgroundSize: 'cover',
        zIndex: 1
      }}
    />
  );
};

export default HeroBackground;
