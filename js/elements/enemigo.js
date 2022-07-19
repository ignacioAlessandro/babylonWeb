import { Ecena } from "../scene.js";
export const Enemi =  {
  // funcion crear enemigos dar posicion y movimiento con valores de un .json
  enemiDatos: function(param){ fetch(`datos.json`)
    .then(
      (res)=>res.json()
    )
    .then(
      (data)=>{
        data[param].forEach(element => {
          const enemi = BABYLON.MeshBuilder.CreateSphere("enemi", {diameter:element.diametro}, this.scene);
          enemi.position = new BABYLON.Vector3(-20, element.posY, -8);
          enemi.PhysicsImpostor  = new BABYLON.PhysicsImpostor(enemi, BABYLON.PhysicsImpostor.SphereImpostor, { mass: 1, restitution: 0},this.scene);
          setInterval(()=>{
            enemi.PhysicsImpostor.setLinearVelocity(new BABYLON.Vector3(element.velX, element.velY, 0),this.scene);
          }, 20);
        }); 
      }
    )
  },

}

  
  
  
