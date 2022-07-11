import { Ecena } from "../scene.js";

export const Enemi =  {
  CreateBox: function(){
    const box2 = BABYLON.MeshBuilder.CreateBox("box2", {});
    mesh.position = new Vector3(2, 3, 4);
    box2.PhysicsImpostor  = new BABYLON.PhysicsImpostor(box2, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 1, restitution: 0}, this.scene);
    setInterval(()=>{box2.PhysicsImpostor.setLinearVelocity(new BABYLON.Vector3(0, 5, -4))}, 500);

  }
}




  
  
  
  
