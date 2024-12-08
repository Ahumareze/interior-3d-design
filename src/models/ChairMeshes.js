import * as THREE from 'three';

const boxGeometry = new THREE.BoxGeometry(5, 1, 7);
const boxMaterial = new THREE.MeshStandardMaterial({color: 'cyan'})

const foamMesh = new THREE.Mesh(boxGeometry, boxMaterial);
foamMesh.receiveShadow = true
foamMesh.castShadow = true
foamMesh.position.y = 1

const woodGeometry = new THREE.BoxGeometry(5, 1, 0.5);
const woodMaterial = new THREE.MeshStandardMaterial({color: 'brown'});

const wood1 = new THREE.Mesh(woodGeometry, woodMaterial)
wood1.position.z = 3

const wood2 = new THREE.Mesh(woodGeometry, woodMaterial)
wood2.position.z = -3

const backRestGeometry = new THREE.BoxGeometry(7, 4, 0.5);
const backRest = new THREE.Mesh(backRestGeometry, woodMaterial);

backRest.position.set(0, 1.5, -3.5)


export const chairGroup = new THREE.Group();
chairGroup.position.set(0, 0.5, -5.5)
chairGroup.add(foamMesh, wood1, wood2, backRest)