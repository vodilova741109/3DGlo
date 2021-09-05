const togglePopup = () => {
    const popUp = document.querySelector('.popup'),
          popupBtn = document.querySelectorAll('.popup-btn');
     // анимация меню
     let count = -100; 
     let modalInterval;
     const popupContent = document.querySelector('.popup-content');   
    let animate = false;  
       
    let modalAnimate = function(){         
      count++;        
      if(count < 150 && window.screen.width > 768) {
        popupContent.style.top = count + 'px';          
      }else{
        clearInterval(modalInterval);         
      }
    } 
    modalInterval =  setInterval(modalAnimate, 15);   

    popupBtn.forEach((elem) => {
      elem.addEventListener('click', () => {
        count = -100; 
        popUp .style.display = 'block';          
        setInterval(modalAnimate, 15);
        animate = false;
      });
    });  
       
    popUp.addEventListener('click', (event) =>{
      let target = event.target;      
      if(target.classList.contains('popup-close')){
        popUp.style.display = 'none';               
      } else {
        target = target.closest('.popup-content');
        if(!target){
          popUp.style.display = 'none';  
          clearInterval(modalInterval);   
        }
      }             
    });         
  };

  export default togglePopup;   