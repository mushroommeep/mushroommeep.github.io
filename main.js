import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// Setup

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

renderer.render(scene, camera);

// Torus

const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
const material = new THREE.MeshStandardMaterial({ color: 0xFF6347 });
const torus = new THREE.Mesh(geometry, material);

scene.add(torus);

// Lights

const pointLight = new THREE.PointLight(0xffffff, 4000, 0, 2);
pointLight.position.set(20, 20, 20);

const ambientLight = new THREE.AmbientLight(0xffff00);
scene.add(pointLight, ambientLight);

// Helpers

const lightHelper = new THREE.PointLightHelper(pointLight)
const gridHelper = new THREE.GridHelper(200, 50);
scene.add(lightHelper, gridHelper)

const controls = new OrbitControls(camera, renderer.domElement);

function addStar() {
  const geometry = new THREE.IcosahedronGeometry(0.25);
  const material = new THREE.MeshStandardMaterial({ color: 0xffffff});
  const star = new THREE.Mesh(geometry, material);

  const[x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));

  star.position.set(x, y,z);
  scene.add(star);
}

Array(200).fill().forEach(addStar);

// Background 

const spaceTexture = new THREE.TextureLoader().load('imgs/universe.jpg');
scene.background = spaceTexture;


//Avatar 

const avatarTextture = new THREE.TextureLoader().load('imgs/avatar.png');
const naha = new THREE.Mesh(
  new THREE.BoxGeometry(3, 3, 3),
  new THREE.MeshBasicMaterial({ map: avatarTextture})
);

scene.add(naha);

//Moon
const moonTexture = new THREE.TextureLoader().load('imgs/avatar.png');
const normalTexture = new THREE.TextureLoader().load('imgs/normal.jpg');
const moon = new THREE.Mesh(
  new THREE.SphereGeometry(3, 32, 32),
  new THREE.MeshStandardMaterial( {
    map: moonTexture,
    normalMap: normalTexture
  })
);

scene.add(moon);
moon.position.z = 30;
moon.position.x = -10;  

var modelRoom;
const loader = new GLTFLoader().setPath('models/');
loader.load('mini_room_art_copy.gltf', (gltf) => {
  modelRoom = gltf.scene;
  modelRoom.position.set(3, 3, 5);
  scene.add(modelRoom);
})
// Scroll

function moveCamera(){

  //Where user currently scroll to
  const t = document.body.getBoundingClientRect().top;
  moon.rotation.x += 0.05;
  moon.rotation.y += 0.075;
  moon.rotation.z += 0.05;

  naha.rotation.y += 0.01;
  naha.rotation.z += 0.01;

  camera.position.z = t * -0.01;
  camera.position.x = t * -0.002;
  camera.position.y = t * -0.002;
}

document.body.onscroll = moveCamera

// Animation Loop

function animate() {
  requestAnimationFrame(animate);

  torus.rotation.x += 0.01;
  torus.rotation.y += 0.005;
  torus.rotation.z += 0.01;

  if(modelRoom) {
    modelRoom.rotation.x += 0.01;
    modelRoom.rotation.y += 0.005;
    modelRoom.rotation.z += 0.01;
  }

  controls.update();
  renderer.render(scene, camera);
}

animate();