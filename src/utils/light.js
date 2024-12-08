import * as THREE from "three";

//Create a DirectionalLight and turn on shadows for the light
export const light = new THREE.DirectionalLight( '#fff', 1 );
light.position.set( 2, 4, 3 ); //default; light shining from top
light.castShadow = true; // default false

//Set up shadow properties for the light
light.shadow.mapSize.width = 512; // default
light.shadow.mapSize.height = 512; // default
light.shadow.camera.near = 0.5; // default
light.shadow.camera.far = 500; // default