import * as THREE from "three";import {GLTFLoader} from "three/addons/loaders/GLTFLoader.js";
const loader=new GLTFLoader(),cache=new Map();
export async function loadGLB(url){if(cache.has(url))return cache.get(url);let p=new Promise((ok,no)=>loader.load(url,ok,undefined,no));cache.set(url,p);return p}
export class CharacterController{constructor(root,clips=[]){this.root=root;this.mixer=new THREE.AnimationMixer(root);this.actions={};clips.forEach(c=>this.actions[c.name]=this.mixer.clipAction(c));this.current=null;this.play("Idle")}play(name,fade=.2){let next=this.actions[name]||this.actions.Idle;if(!next||next===this.current)return;if(this.current)this.current.fadeOut(fade);next.reset().fadeIn(fade).play();this.current=next}update(dt){this.mixer.update(dt)}}
export function optimize(root){root.traverse(o=>{if(o.isMesh){o.castShadow=true;o.receiveShadow=true;o.frustumCulled=true}});return root}
export const interactionNames={INT_SLEEP:"sleep",INT_EAT:"eat",INT_COMPUTER:"coding",INT_RELAX:"fun",INT_WARDROBE:"wardrobe",INT_EXIT:"exit"};
window.EnuguAssets={THREE,loadGLB,CharacterController,optimize,interactionNames};