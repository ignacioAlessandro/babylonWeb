export const keyboard =
 {
  ArrowUp: false,
  ArrowDown: false,
  p: false,
  x:false,
  press: function(evt)
  {
    document.addEventListener('keydown', (event) => {
      const keyName = event.key;
      if(keyboardEnum.find(element => element == event.key) ){
        keyboard[event.key] = true;
      }   
    });
  },
  release: function(evt)
    {
      document.addEventListener('keyup', (event) => {
        const keyName = event.key;
        if(keyboardEnum.find(element => element == event.key) ){
          keyboard[event.key] = false;
        }   
      });
    }
};

const keyboardEnum = ['ArrowUp','ArrowLeft','ArrowRight','p','ArrowDown','x']
