import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion";

export default function HeroScene() {
  const canvasRef = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Detect mobile viewport parameters
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 80 : 250;

    // Setup scene
    const scene = new THREE.Scene();

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      50,
      canvas.clientWidth / canvas.clientHeight,
      0.1,
      100
    );
    camera.position.z = 5.5;

    // WebGL Renderer setup
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    });
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Core Wireframe Sphere (electric violet)
    const coreGeo = new THREE.IcosahedronGeometry(1.6, isMobile ? 1 : 2);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0x8b5cf6, // electric violet
      wireframe: true,
      transparent: true,
      opacity: 0.12,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    scene.add(coreMesh);

    // Inner Core Orb (royal blue)
    const innerGeo = new THREE.OctahedronGeometry(0.7, 1);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x4f46e5, // royal blue
      wireframe: true,
      transparent: true,
      opacity: 0.25,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    scene.add(innerMesh);

    // Node particle cluster (cyan)
    const particlesGeo = new THREE.BufferGeometry();
    const posArray = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i++) {
      // Create random positions within spherical bounds
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = 1.8 + Math.random() * 0.8; // sphere radius range

      posArray[i] = r * Math.sin(phi) * Math.cos(theta);
      posArray[i + 1] = r * Math.sin(phi) * Math.sin(theta);
      posArray[i + 2] = r * Math.cos(phi);
      i += 2;
    }

    particlesGeo.setAttribute(
      "position",
      new THREE.BufferAttribute(posArray, 3)
    );

    const particlesMat = new THREE.PointsMaterial({
      size: isMobile ? 0.04 : 0.03,
      color: 0x06b6d4, // cyan
      transparent: true,
      opacity: 0.55,
      blending: THREE.AdditiveBlending,
    });

    const particlesMesh = new THREE.Points(particlesGeo, particlesMat);
    scene.add(particlesMesh);

    // Light mouse follow tracking parameters
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (e) => {
      targetMouseX = (e.clientX / window.innerWidth - 0.5) * 1.2;
      targetMouseY = (e.clientY / window.innerHeight - 0.5) * 1.2;
    };

    // Scroll depth tracking
    let scrollY = 0;
    const handleScroll = () => {
      scrollY = window.scrollY;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    // Resizing
    const handleResize = () => {
      if (!canvas) return;
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener("resize", handleResize);

    // Clock for animation speeds
    const clock = new THREE.Clock();
    let animationFrameId;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsed = clock.getElapsedTime();

      // Normal rotational updates
      const baseRotation = prefersReducedMotion ? 0.05 : 0.15;
      coreMesh.rotation.y = elapsed * baseRotation;
      coreMesh.rotation.x = elapsed * baseRotation * 0.3;

      innerMesh.rotation.y = -elapsed * baseRotation * 1.4;
      particlesMesh.rotation.y = elapsed * baseRotation * 0.5;

      // Mouse hover tracking logic (interpolation ease)
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      if (!prefersReducedMotion) {
        coreMesh.rotation.y += mouseX * 0.4;
        coreMesh.rotation.x += mouseY * 0.4;
        particlesMesh.rotation.x += mouseY * 0.15;
        particlesMesh.rotation.y += mouseX * 0.15;
      }

      // Scroll reactions (Core floats back and up on scroll down)
      const scrollRatio = Math.min(scrollY / window.innerHeight, 1);
      coreMesh.position.z = -scrollRatio * 3.5;
      innerMesh.position.z = -scrollRatio * 3.5;
      particlesMesh.position.z = -scrollRatio * 3.5;

      coreMesh.position.y = scrollRatio * 1.2;
      innerMesh.position.y = scrollRatio * 1.2;
      particlesMesh.position.y = scrollRatio * 1.2;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup resources
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);

      coreGeo.dispose();
      coreMat.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      particlesGeo.dispose();
      particlesMat.dispose();
      renderer.dispose();
    };
  }, [prefersReducedMotion]);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full block bg-transparent pointer-events-none"
    />
  );
}
