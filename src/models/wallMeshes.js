import * as THREE from 'three';

//floor
const floorGeometry = new THREE.PlaneGeometry(20, 20, 20);
const floorMaterial = new THREE.MeshStandardMaterial({color: '#fff', side: THREE.DoubleSide});
const floorMesh = new THREE.Mesh(floorGeometry, floorMaterial)
floorMesh.receiveShadow = true;

// floorMesh.receiveShadow = true;
// Rotate the plane to lie flat on the X-axis
floorMesh.rotation.x = -Math.PI / 2; // Rotate 90 degrees (in radians)

// walls
const wallGeometry = new THREE.PlaneGeometry(20, 10, 20);
const wallMaterial = new THREE.MeshStandardMaterial({color: '#fff', side: THREE.DoubleSide});

const backWallMesh = new THREE.Mesh(wallGeometry, wallMaterial);
backWallMesh.receiveShadow = true;
backWallMesh.castShadow = true;
backWallMesh.position.set(0, 5, -10)

//side wall
const sideWallMesh = new THREE.Mesh(wallGeometry, wallMaterial);
sideWallMesh.receiveShadow = true;
sideWallMesh.castShadow = true;
sideWallMesh.position.set(-10, 5, 0)
sideWallMesh.rotation.y = Math.PI * 0.5

//picture
const textureLoader = new THREE.TextureLoader();
const pictureGeometry = new THREE.BoxGeometry(5, 5, 0.1);
const pictureMaterial = new THREE.MeshBasicMaterial({map: textureLoader.load('../../ryan.jpg')})
const pictureFrame = new THREE.Mesh(pictureGeometry, pictureMaterial);
pictureFrame.position.set(-10, 5, 0)
pictureFrame.rotation.y = Math.PI * 0.5






export const house  = new THREE.Group();

house.add(floorMesh, backWallMesh, sideWallMesh, pictureFrame)
