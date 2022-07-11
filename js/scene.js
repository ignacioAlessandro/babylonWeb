import { engine, canvas } from "./app.js";
import { Player } from "./elements/player.js";
import { Enemi } from "./elements/enemigo.js";
export const Ecena ={
  createScene: function() {
    //create scene
    const scene = new BABYLON.Scene(engine);
    scene.clearColor = new BABYLON.Color3.Black;
    

    // fisicas gemerales
    scene.enablePhysics();
    
    // camara
    var camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 0, 8), scene);
    camera.setTarget(BABYLON.Vector3.Zero());
 
    //luz
    const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0));
    
    
    // crear piso manual codigo nuevo
    const Piso = BABYLON.MeshBuilder.CreatePlane("piso",{width: 60, height: 40}, scene); 
    Piso.position= new BABYLON.Vector3(0,-4, -10);
    Piso.rotation = new BABYLON.Vector3(Math.PI / 2,0,0);
    
    //  fisicas del piso codigo nnuevo
    Piso.PhysicsImpostor  = new BABYLON.PhysicsImpostor(Piso, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0, restitution: 0 }, scene);  


    // crear paredes manual manueal codigo nuevo
    const Pared = BABYLON.MeshBuilder.CreateBox("pared",{width: 80, height: 80, depth: 1},scene);
    Pared.position = new BABYLON.Vector3(0,0,-20);
    let pared2 = Pared.clone("Pared2");
    pared2.rotation.y = Math.PI / 2;
    pared2.position =new BABYLON.Vector3(20,0,-10); 
      //  const jugador =new Player;
      // //  const enemigo = new Enemi;
      // //  jugador.CreateBox();




  //  setInterval(()=>{
  //    Enemi.CreateBox();
  // }, 9000) 
  
    return scene;
}
}


 // //camara
    // const alpha =  Math.PI/4;
    // const beta = Math.PI/3;
    // const radius = 8;
    // const target = new BABYLON.Vector3(0, -3, 0);
    // const camera = new BABYLON.ArcRotateCamera("Camera", alpha, beta, radius, target, scene);
    // camera.attachControl(canvas, true);