import * as THREE from 'three';

const boxGeometry = new THREE.BoxGeometry(1, 3);
const boxMaterial = new THREE.MeshBasicMaterial({color: 'cyan'})

export const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);

