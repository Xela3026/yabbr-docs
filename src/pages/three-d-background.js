import React, { useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';



const ThreeDBackground = () => {
  useEffect(() => {

    
    // Define renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0xFFFFFF);

    const outerContainer = document.getElementById('outerContainer');

    outerContainer.appendChild(renderer.domElement);


    const particles = 600;

    const x_distribution = 96;
    const y_distribution = 200;
    const z_distribution = 96;
    const radius = 20;
    

    // Create scene
    const scene = new THREE.Scene();

    // Create camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    // camera.position.set(0, 15, 36);
    camera.position.set(0, 15, 0);

    // Configure orbit controls
    const orbit = new OrbitControls(camera, renderer.domElement);
    orbit.maxPolarAngle = Math.PI / 2 - 0.01;
    // orbit.autoRotate = true;
    // orbit.autoRotateSpeed = 0.5;
    orbit.enablePan = false;
    // orbit.minDistance = 18;
    // orbit.maxDistance = 25;

    // Create circle underneath cubes
    /**const circleGeometry = new THREE.CircleGeometry(10, 30);
    const circleMaterial = new THREE.MeshBasicMaterial({ color: 0x64438c, side: THREE.DoubleSide });
    const circle = new THREE.Mesh(circleGeometry, circleMaterial);
    scene.add(circle);
    circle.rotation.x = -0.5 * Math.PI;
    circle.receiveShadow = false;**/

    /**const loader = new GLTFLoader();


    loader.load( '/img/scene.gltf', function ( gltf ) {
        const model = gltf.scene;
      scene.add(model);
        // enable shadow casting on each part of the 3D model
        model.traverse(function(node) {
            if(node.isMesh) {
                node.castShadow = true;
            }
        });
        model.position.set(0,-10,0);
    }, undefined, function (error) {
      console.error(error);
    } );**/

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
    
    /** 
    // Add particles
    function addParticle() {
      const particleGeo = new THREE.BoxGeometry(0.25, 0.25, 0.25);
      const particleMat = new THREE.MeshStandardMaterial({ color: 0x1582d8 });
      const particle = new THREE.Mesh(particleGeo, particleMat);
      const parx = Math.floor(Math.random() * x_distribution) - x_distribution/2;
      const pary = Math.floor(Math.random() * y_distribution) - y_distribution/2;
      const parz = Math.floor(Math.random() * z_distribution) - z_distribution/2;
      particle.position.set(parx, pary, parz);
      scene.add(particle);
    }**/

    // const axesHelper = new THREE.AxesHelper( 5 );

    // scene.add( axesHelper );

    /** 
    function addParticle() {
      const particleGeo = new THREE.BoxGeometry(0.25, 0.25, 0.25);
      const particleMat = new THREE.MeshStandardMaterial({ color: 0x1582d8 });
      const particle = new THREE.Mesh(particleGeo, particleMat);
      const theta = (Math.random()*Math.PI*2);
      const parx = Math.cos(theta) * radius;
      const pary = Math.floor(Math.random() * y_distribution) - y_distribution/2;
      const parz = Math.sin(theta) * radius;
      particle.position.set(parx, pary, parz);
      scene.add(particle);
    }**/

    function addParticle(x) {
      const particleGeo = new THREE.BoxGeometry(0.25, 0.25, 0.25);
      const particleMat = new THREE.MeshStandardMaterial({ color: 0x1582d8 });
      const particle = new THREE.Mesh(particleGeo, particleMat);
      let t = x % 100;
      const parx = Math.cos(t) * radius;
      const pary = t;
      const parz = Math.sin(t) * radius;
      particle.position.set(parx, pary, parz);
      scene.add(particle);
    }


    /**for (let i = 0; i < particles; i++) {
      addParticle();
    }**/

    for (let i = 0; i < particles; i++) {
      addParticle(i/10);
    }

    // Frame by frame update
    function animate() {
      renderer.render(scene, camera);
      // scene.rotation.z += 0.001;
      // scene.rotation.x += 0.002;
      scene.rotation.y += 0.003;
      camera.position.y += 0.05;
      
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
