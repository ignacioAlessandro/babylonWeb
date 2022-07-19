import { engine} from "./app.js";
import { Jugador } from "./elements/player.js";
import { Enemi } from "./elements/enemigo.js";
import { Text } from "./text.js";

export const Ecena ={
  createScene: function() {
    let puntos = 0;

    //create scene
    const scene = new BABYLON.Scene(engine);
    scene.clearColor = new BABYLON.Color3.Black;
    
     // fisicas gemerales
     scene.enablePhysics();
   
    // camara
    var camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 0, 8), scene);
    camera.setTarget(BABYLON.Vector3.Zero());

    // camara pruebas
    // const alpha =  Math.PI/4;
    // const beta = Math.PI/3;
    // const radius = 8;
    // const target = new BABYLON.Vector3(0, -3, 0);
    // const camera = new BABYLON.ArcRotateCamera("Camera", alpha, beta, radius, target, scene);
    // camera.attachControl(canvas, true);
 
    //luz
    const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0), scene);
    
    
    // crear piso
    const Piso = BABYLON.MeshBuilder.CreatePlane("piso",{width: 60, height: 40}, scene); 
    Piso.position= new BABYLON.Vector3(0,-4, -10);
    Piso.rotation = new BABYLON.Vector3(Math.PI / 2,0,0);
    
    // crear techo
    const Techo = BABYLON.MeshBuilder.CreatePlane("techo",{width: 60, height: 40},scene); 
    Techo.position= new BABYLON.Vector3(0, 7, -10);
    Techo.rotation = new BABYLON.Vector3(Math.PI / 2, 0,0);
    
    
    //  fisicas del piso codigo nnuevo
    Piso.PhysicsImpostor  = new BABYLON.PhysicsImpostor(Piso, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0, restitution: 0 },);  
    Techo.PhysicsImpostor  = new BABYLON.PhysicsImpostor(Techo, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0, restitution: 0 },);  


    // crear paredes 
    const Pared = BABYLON.MeshBuilder.CreateBox("pared",{width: 80, height: 80, depth: 1},scene);
    Pared.position = new BABYLON.Vector3(0,0,-20);
    let pared2 = Pared.clone("Pared2");
    pared2.rotation.y = Math.PI /2,Math.PI /3,0; 
    pared2.position =new BABYLON.Vector3(20,0,-10); 
    
    Jugador.CreateBox();
    
    Text.inicio()

    const jugar  = setTimeout(()=>{
      setInterval(()=>{
        Enemi.enemiDatos(Math.floor(Math.random() * 9))
      }, 1000); 
    },5000)
     

    Text.puntos();
  
    return scene;
  }
}


 