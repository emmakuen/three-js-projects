import "./style.css";
import * as THREE from "three";
// library for advanced animations
import gsap from "gsap";

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Sizes
const sizes = {
  width: 800,
  height: 600,
};

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);

// Clock
// const clock = new THREE.Clock();

gsap.to(mesh.position, {
  x: 2,
  duration: 1,
  delay: 1,
});

// Animations
const tick = () => {
  // Clock
  //   const elapsedTime = clock.getElapsedTime();

  // Rotate once per second
  //   mesh.rotation.y = Math.PI * 2 * elapsedTime; // adjust the animation speed based on the framerate

  // Rotate box in a circle
  //   mesh.position.y = Math.sin(elapsedTime);
  //   mesh.position.x = Math.cos(elapsedTime);

  // Rotate camera in a circle and make it look at the box
  //   camera.position.y = Math.sin(elapsedTime);
  //   camera.position.x = Math.cos(elapsedTime);
  //   camera.lookAt(mesh.position);

  //   //   mesh.position.x += 0.001;
  //   //   mesh.position.y += 0.001;
  //   //   mesh.rotation.z += 0.001;
  //   console.log("tick");

  // Render
  renderer.render(scene, camera);
  window.requestAnimationFrame(tick);
};

tick();
