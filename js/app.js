import { Ecena  }  from "./scene.js";
export const canvas = document.getElementById('game');
export const engine = new BABYLON.Engine(canvas, true);

// const createScene = function() {
//     //create scene
//     const scene = new BABYLON.Scene(engine);
//     scene.clearColor = new BABYLON.Color3.Black;
    
//     //camara
//     const alpha =  Math.PI/4;
//     const beta = Math.PI/3;
//     const radius = 8;
//     const target = new BABYLON.Vector3(0, -3, 0);
//     const camera = new BABYLON.ArcRotateCamera("Camera", alpha, beta, radius, target, scene);
//     camera.attachControl(canvas, true);
    
//     //luz
//     const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0));
    
    
    
//     return scene;
// };
const sceneToRender = Ecena.createScene();
engine.runRenderLoop(function(){
  
    sceneToRender.render();
});










//  import {keyboard} from "./utils/keyboard.js";
//  import {game} from "./game.js"

// const resize = function(evt)
// {
//   let canvas = document.getElementById('game');
//   let w = window.innerWidth / canvas.width;
//   let h = window.innerHeight / canvas.height;
//   let scale = Math.min(h, w);
//   canvas.style.width = (canvas.width * scale) + 'px';
//   canvas.style.height = (canvas.height * scale) + 'px';
// };

// const load = function()
// {
//   resize();
//   document.onkeydown = keyboard.press;
//   document.onkeyup = keyboard.release;
//   let canvas = document.getElementById('game');
//   let data = {
//     x: canvas.offsetLeft,
//     y: canvas.offsetTop,
//     width: canvas.width,
//     height: canvas.height,
//     context: canvas.getContext('2d')
//   };
//   game.start(data);
// };

// window.onload = load;
// window.onresize = resize;