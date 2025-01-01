

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeBackground = () => {
  const sceneRef = useRef(null);

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x0c0c0c, 1); // Background color

    // Append renderer to the DOM
    const container = sceneRef.current;
    container.appendChild(renderer.domElement);

    // Create a simple geometry (particles)
    const particleCount = 500;
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesMaterial = new THREE.PointsMaterial({
      color: 0xffcc00,
      size: 0.05,
      sizeAttenuation: true,
    });

    const positions = [];
    for (let i = 0; i < particleCount; i++) {
      positions.push(
        (Math.random() - 0.5) * 10, // x
        (Math.random() - 0.5) * 10, // y
        (Math.random() - 0.5) * 10 // z
      );
    }

    particlesGeometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(positions, 3)
    );

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    const pointLight = new THREE.PointLight(0xffcc00, 1, 100);
    pointLight.position.set(5, 5, 5);
    scene.add(ambientLight, pointLight);

    // Camera position
    camera.position.z = 5;

    // Animation loop
    const animate = () => {
      particles.rotation.y += 0.001; // Rotate particles
      particles.rotation.x += 0.0005;

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    // Handle window resizing
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      renderer.dispose();
      container.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={sceneRef} className="absolute top-0 left-0 w-full h-full" />;
};

export default ThreeBackground;