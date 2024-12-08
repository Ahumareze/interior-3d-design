import * as THREE from 'three';

const boxGeometry = new THREE.BoxGeometry(1, 3);
const boxMaterial = new THREE.MeshStandardMaterial({color: 'cyan'})

export const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
boxMesh.receiveShadow = true
boxMesh.castShadow = true

