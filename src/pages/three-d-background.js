import React, { useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';


const ThreeDBackground = () => {
  useEffect(() => {
    // Define renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0xFFFFFF);

    const outerContainer = document.getElementById('outerContainer');

    outerContainer.appendChild(renderer.domElement);


    const particles = 500;

    // Create scene
    const scene = new THREE.Scene();

    // Create camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    // camera.position.set(0, 6, 18);
    camera.position.set(0, 0, 0);

    // Configure orbit controls
    const orbit = new OrbitControls(camera, renderer.domElement);
    orbit.maxPolarAngle = Math.PI / 2 - 0.01;
    orbit.autoRotate = true;
    orbit.autoRotateSpeed = 2.0;
    orbit.enablePan = false;
    orbit.minDistance = 18;
    orbit.maxDistance = 25;

    // Create circle underneath cubes
    /**const circleGeometry = new THREE.CircleGeometry(10, 30);
    const circleMaterial = new THREE.MeshBasicMaterial({ color: 0x64438c, side: THREE.DoubleSide });
    const circle = new THREE.Mesh(circleGeometry, circleMaterial);
    scene.add(circle);
    circle.rotation.x = -0.5 * Math.PI;
    circle.receiveShadow = false;**/

    // Create lights
    const dLight = new THREE.DirectionalLight(0xFFFFFF, 0.8);
    dLight.castShadow = true;
    dLight.shadow.camera.bottom = -20;
    dLight.shadow.camera.top = 20;
    dLight.shadow.camera.left = 20;
    dLight.shadow.camera.right = -20;
    dLight.position.set(-30, 50, 0);
    // dLight.position.set(0, 0, 0);
    scene.add(dLight);

    // Add ambient light
    const aLight = new THREE.AmbientLight(0xFFFFFF);
    scene.add(aLight);

    // Add spot light
    const sLight = new THREE.SpotLight(0xFFFFFF, 10);
    sLight.position.set(0, 0, 0);
    sLight.castShadow = false;
    scene.add(sLight);

    // Add particles
    function addParticle() {
      const particleGeo = new THREE.BoxGeometry(0.25, 0.25, 0.25);
      const particleMat = new THREE.MeshStandardMaterial({ color: 0x1582d8 });
      const particle = new THREE.Mesh(particleGeo, particleMat);
      const parx = Math.floor(Math.random() * 96) - 48;
      const pary = Math.floor(Math.random() * 48) - 24;
      const parz = Math.floor(Math.random() * 96) - 48;
      particle.position.set(parx, pary, parz);
      scene.add(particle);
    }

    for (let i = 0; i < particles; i++) {
      addParticle();
    }

    // Frame by frame update
    function animate() {
      renderer.render(scene, camera);
      orbit.update();
      requestAnimationFrame(animate);
    }

    animate();

    // Resize handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
      document.body.removeChild(renderer.domElement);
    };
  }, []);

  return null; // No need to render anything
};

export default ThreeDBackground;
