export const Text =  {
  
  inicio: function(){ 
    let advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");
    let inicio = new BABYLON.GUI.TextBlock();
    inicio.color = "black";
    inicio.fontSize = 30;
    advancedTexture.addControl(inicio);
    setTimeout(() => {
      inicio.text = `bienvenido, utiliza "w" y  "s" para pasar entre los obstaculos no permitas que te tiren. buena suerte`;  
      setInterval(() => {
        inicio.text = "";
      }, 3000);
    },0);
  },
  
  puntos: function(puntos){ 
    //crear y renderizar puntos
    puntos = 0;
    let advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");
    let text1 = new BABYLON.GUI.TextBlock();
    text1.textHorizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT
    text1.textVerticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
    text1.color = "black";
    text1.fontSize = 40;
    advancedTexture.addControl(text1);   
    setInterval(() => {
      text1.text = (puntos+=100);
    }, 2000);
  },
    
  gameOver: function(){ 
    let advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");
    let gameOver = new BABYLON.GUI.TextBlock();
    gameOver.color = "red";
    gameOver.fontSize = 30;
    advancedTexture.addControl(gameOver);
    gameOver.text = `perdiste preciona f5 para volver a jugar`;  
  },
  
  }
  