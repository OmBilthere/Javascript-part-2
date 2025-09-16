    let intervalId;
    let color = function () {
      const hex = "0123456789ABCDEF"
      let random_color = '#'
      for(let i=0 ; i<6 ; i++)
      random_color+=hex[Math.floor(Math.random() *16)]

      return random_color;
    }
  
    document.querySelector('#start').addEventListener('click' , ()=>{
    if(!intervalId)  {  intervalId = setInterval(() => {
          
          document.querySelector('body').style.backgroundColor =color()
        }, 1000);
     }
    })

    document.querySelector('#stop').addEventListener('click' , ()=>{
       clearInterval(intervalId);
       intervalId=null
    })