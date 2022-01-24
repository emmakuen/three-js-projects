import "./style.css";
import * as THREE from "three";

const canvas = document.querySelector("#canvas");

const scene = new THREE.Scene();

// Red Cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
mesh.position.z = 1;
mesh.position.x = 1;
mesh.position.y = -1;
scene.add(mesh);

// Sizes
const sizes = {
  width: 800,
  height: 600,
};

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
camera.position.x = 1;
camera.position.y = -1;
scene.add(camera);

// Vector3 Methods
// --- Distance from center
// console.log(mesh.position.length())

// --- Distance of object from camera
// console.log(mesh.position.distanceTo(camera.position));

// --- Take length of vector and reduce it to 1
// mesh.position.normalize()

// --- Change x, y, z values at once
mesh.position.set(0.5, -2, 0.7);

// --- Scale
mesh.scale.set(2, 0.5, 0.5);
// mesh.scale.x = 2;
// mesh.scale.y = 0.5;
// mesh.scale.z = 0.5;

// Rotate
// Be careful with the order (x, y, z by default), or else one of axes may get locked
// To fix it, change the order. Example --> object.rotation.reorder('yxz'). Do it before changing rotation.
mesh.rotation.y = Math.PI * 0.5;

// rotate the object so that its -z faces the target you provided
camera.lookAt(mesh.position);

// --- Axes Helper
const axesHelper = new THREE.AxesHelper();
scene.add(axesHelper);

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas,
});

renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
