//creacion de jugador
export class Player{
    constructor(posX,posY,posZ,width,height){
        this.posX = posX;
        this.posY = posY;
        this.posZ =  posZ;
        this.width = width;
        this.height = height; 
    }
    CreateBox(){
        const box = BABYLON.MeshBuilder.CreateBox("box", {});
    }
}




/*

import {keyboard} from "../utils/keyboard.js";
import { wall } from "./wall.js";
import { game } from "../game.js";
import { collision } from "../utils/collision.js";


export const player =
{
  x: 100,
  y: 0,
  width: 45,
  height: 100,
  jumpForce: null,
  maxJumpForce: 9,
  inven : false,


  fisica  personaje

box.PhysicsImpostor  = new BABYLON.PhysicsImpostor(box, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 1, restitution: 0.9 }, scene);



    colicion
    box.PhysicsImpostor.registerOnPhysicsCollide(box2.PhysicsImpostor, function(main, collided) {
    scene.removeMesh(box2);
    });


  checkCollision: function()
  {
  },






  move: function()
  {
  },

};

move function nueva 

    document.addEventListener('keydown', (event) => {
        const keyName = event.key;
        if (event.key == `y`) {
          box.PhysicsImpostor.setLinearVelocity(new BABYLON.Vector3(0, 8, 0))
        }   
      });
      document.addEventListener('keydown', (event) => {
        const keyName = event.key;
        if (event.key == `h`) {
          box.PhysicsImpostor.setLinearVelocity(new BABYLON.Vector3(0, -8, 0))
        }   
      });



*/