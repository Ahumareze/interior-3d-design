import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { house } from "./models/wallMeshes";
import { boxMesh } from "./models/ChairMeshes";

// initialize the scene
const scene = new THREE.Scene();

const axesHelper = new THREE.AxesHelper(10);
scene.add(axesHelper)


//add meshes to scene
scene.add(house)
scene.add(boxMesh)





























// initialize the camera
const camera = new THREE.PerspectiveCamera(
  35,
  window.innerWidth / window.innerHeight,
  0.1,
  200
);
camera.position.set(-10, 5, 20)

// initialize the renderer
const canvas = document.querySelector("canvas.threejs");
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias: true,
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// instantiate the controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
// controls.autoRotate = true;

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// render the scene
const renderloop = () => {
  controls.update();
  renderer.render(scene, camera);
  window.requestAnimationFrame(renderloop);
};

renderloop();