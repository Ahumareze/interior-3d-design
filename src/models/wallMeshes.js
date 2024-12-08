import * as THREE from 'three';

//floor
const floorGeometry = new THREE.PlaneGeometry(20, 20, 20);
const floorMaterial = new THREE.MeshBasicMaterial({color: '#fff', side: THREE.DoubleSide});
const floorMesh = new THREE.Mesh(floorGeometry, floorMaterial)

// floorMesh.receiveShadow = true;
// Rotate the plane to lie flat on the X-axis
floorMesh.rotation.x = -Math.PI / 2; // Rotate 90 degrees (in radians)

// walls
const wallGeometry = new THREE.PlaneGeometry(20, 10, 20);
const wallMaterial = new THREE.MeshBasicMaterial({color: '#fff', side: THREE.DoubleSide});

const backWallMesh = new THREE.Mesh(wallGeometry, wallMaterial);
backWallMesh.position.set(0, 5, -10)

const sideWallMesh = new THREE.Mesh(wallGeometry, wallMaterial);
sideWallMesh.position.set(10, 5, 0)
sideWallMesh.rotation.y = Math.PI * 0.5


export const house  = new THREE.Group();

house.add(floorMesh, backWallMesh, sideWallMesh)
