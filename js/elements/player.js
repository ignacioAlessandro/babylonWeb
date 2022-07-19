import { Ecena } from "../scene.js";
import { Text } from "../text.js";
//creacion de jugador
export const Jugador =  {
  CreateBox: function(){

    // creacion y adicion de fisica de obstaculos
    const box = BABYLON.MeshBuilder.CreateBox("box", {size:2},this.scene);
    box.position = new BABYLON.Vector3(10, -3, -8)
    box.PhysicsImpostor  = new BABYLON.PhysicsImpostor(box, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 1, restitution: 0}, this.scene);

      //move player
    document.addEventListener('keydown', (event) => {
      const keyName = event.key;
      if (event.key == `w`) {
        box.PhysicsImpostor.setLinearVelocity(new BABYLON.Vector3(0, 8, 0))
      }   
    });
    document.addEventListener('keydown', (event) => {
      const keyName = event.key;
      if (event.key == `s`) {
        box.PhysicsImpostor.setLinearVelocity(new BABYLON.Vector3(0, -8, 0))
      }   
    });

    const Pared = BABYLON.MeshBuilder.CreateBox("pared",{width: 80, height: 80, depth: 1},this.scene);
    Pared.position = new BABYLON.Vector3(13,0,0);
    Pared.rotation.y = Math.PI /2,Math.PI /3,0; 
    setInterval(()=>{
      if (box.intersectsMesh(Pared, false)) {
        Text.gameOver()
        
      }  
    }, 2000); 
    
}
}
