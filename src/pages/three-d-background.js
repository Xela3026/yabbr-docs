import React, { useEffect } from 'react';
import '../css/custom.css';



const ThreeDBackground = () => {
  useEffect(() => {
    let cubes = [];

    function createCube(x,y,z,angle){
        const cube = document.createElement('div');

        cube.classList.add('cube');

        const scene = document.getElementById('scene')
        scene.appendChild(cube);

        // const sides = ['front','back','topSide','bottom','left','right']
        const sides = ['front']
        let sideName = '';
        for (sideName of sides) {
            const side = document.createElement('div');
            side.classList.add(sideName);
            cube.appendChild(side);

        }
        cube.style.transform = 'translateX('+x+'px) translateY('+y+'px) translateZ('+z+'px) rotateZ('+angle+'deg) ';
        cubes.push(cube);
    }



    const cubeNum = 100;
    const radius = 2000;



    for (let t=cubeNum-1; t>0; t--) {
        const angle = t * Math.PI / 15;
        const x = Math.sin(angle) * radius;
        const y = Math.cos(angle) * radius;
        const z = -70*t;
        createCube(x,y,z,angle * (180/Math.PI) * -1 + 180);
    }}, []);

  return (
      <div class="scene" id="scene"></div>

  );


};

export default ThreeDBackground;
