const toggleMenu = () => {
    const body = document.querySelector('body'),         
          menu = document.querySelector('menu');            
          
    const handlerMenu = () => {              
      menu.classList.toggle('active-menu');
      }  
    body.addEventListener('click', (event) => {
      let target = event.target;                  
      if(target.closest('.menu')){
        handlerMenu();                      
      } else if(target.closest('.close-btn')){ 
        handlerMenu();                 
      } else if(target.closest('menu>ul>li>a')){
        handlerMenu();            
      } else {
        target = target.closest('menu');
        if(!target){
          menu.classList.remove('active-menu');
        }           
      }  
      });
  }; 

  export default toggleMenu;   