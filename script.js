const pressed = [];
  const secretCode = 'joseph';
  window.addEventListener('keydown', (e) =>{
    console.log(e.key)
    pressed.push(e.key);
 
    pressed.splice(-secretCode.length -1, pressed.length - secretCode.length)
    if (pressed.join('').includes(secretCode)){
      console.log('DING DONG!')
      cornify_add();
    }
    console.log(pressed)
  })