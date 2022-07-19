import { Ecena  }  from "./scene.js";
const canvas = document.getElementById('game');
export const engine = new BABYLON.Engine(canvas, true);
const sceneToRender = Ecena.createScene();
engine.runRenderLoop(function(){
    sceneToRender.render();
});

