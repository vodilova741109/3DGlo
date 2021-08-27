document.addEventListener("DOMContentLoaded", function(){
    'use strict';
    // таймер 
    function counterTimer(deadline){
        let timeHours = document.querySelector('#timer-hours');
        let timeMinutes = document.querySelector('#timer-minutes');
        let timeSeconds = document.querySelector('#timer-seconds');
        let timeDay  = document.querySelector('#timer-day');
        
        function getTimeRemaining(){ 
        let dateStop = new Date(deadline).getTime(),
            dateNow = new Date().getTime(),
            timeRemaining = (dateStop - dateNow) / 1000,
            seconds = Math.floor(timeRemaining % 60),
            minutes = Math.floor((timeRemaining / 60) % 60),
            hours = Math.floor(timeRemaining / 60 / 60) % 24,
            day = Math.floor(timeRemaining / 60 / 60 / 24);
      
        
            return {timeRemaining, hours, minutes, seconds, day};
        }

        let idInterval = setInterval(updateClock, 1000);  

        function updateClock(){
            let timer = getTimeRemaining(); 
            let seconds = ('0' +  timer.seconds).slice(-2);
            let minutes = ('0' +  timer.minutes).slice(-2);
            let hours = ('0' +  timer.hours).slice(-2);
            let day = ('0' +  timer.day).slice(-2);
            // console.log(seconds, minutes, hours);

            timeHours.textContent = hours;
            timeMinutes.textContent = minutes;
            timeSeconds.textContent = seconds;
            timeDay.textContent = day;
         
          if(timer.timeRemaining < 0){
            timeDay.textContent = '00';
            timeHours.textContent = '00';
            timeMinutes.textContent = '00';
            timeSeconds.textContent = '00';            
            clearInterval(idInterval);                    
          }
            
        
        }
        

        updateClock();
    }

    counterTimer('24 august 2021');    
    // setInterval(counterTimer, 1000, '1 july 2019');

    // меню
    const toggleMenu = () => {
      const body = document.querySelector('body'),         
            menu = document.querySelector('menu');            
            
      const handlerMenu = () => {
        // способ 1 с помощью стилей
        // if(!menu.style.transform || menu.style.transform === 'translate(-100%)'){
        //   menu.style.transform = 'translate(0)';
        //   }else{
        //   menu.style.transform = 'translate(-100%)';
        //   }    
        // способ 2 с помощью классов 
        menu.classList.toggle('active-menu');
        }     

        // btnMenu.addEventListener('click', handlerMenu);
      
        // closeBtn.addEventListener('click', handlerMenu);
        
        // menuItems.forEach((elem) => elem.addEventListener('click', handlerMenu));  
  

        body.addEventListener('click', (event) => {
          let target = event.target;      
      
          if(target.closest('.menu')){
            handlerMenu(); 
                console.log(target);          
          } else if(target.closest('.close-btn')){ 
            handlerMenu();  
            console.log(target);             
          } else if(target.closest('menu>ul>li>a')){
            handlerMenu();  
            console.log(target);    
          } else {
            target = target.closest('menu');
            if(!target){
              menu.classList.remove('active-menu');
            }           
          }                

        });



    };
    toggleMenu();
    // popup
    const togglePopup = () => {
      const popUp = document.querySelector('.popup'),
            popupBtn = document.querySelectorAll('.popup-btn');
       // анимация меню

       let count = -100; 
       let modalInterval;
       const popupContent = document.querySelector('.popup-content');
      
       // console.log(popupContent);          

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
    togglePopup();

    // табы

    const tabs = () => {
      const tabHeader = document.querySelector('.service-header'),
          tab = tabHeader.querySelectorAll('.service-header-tab'),
          tabContent = document.querySelectorAll('.service-tab');
          const toggleTabContent = (index) => {
            for(let i = 0; i< tabContent.length; i++){
                  if(index === i){
                    tabContent[i].classList.remove('d-none');
                    tab[i].classList.add('active');
                  } else{
                    tabContent[i].classList.add('d-none');
                    tab[i].classList.remove('active');
                  }
            }
          }

          tabHeader.addEventListener('click', (event) =>{
            let target = event.target;        
                target = target.closest('.service-header-tab');
               
            if(target){
              tab.forEach((item, i) =>{
                 if(item === target){
                   toggleTabContent(i);
                 }
            
              })
            }
          })
    };
    tabs();
    


    // слайдер
    const slide = document.querySelectorAll('.portfolio-item'),
            dots = document.querySelector('.portfolio-dots');              
       
   
      for(let i = 0; i < slide.length; i++) {
        const dot = document.createElement('div');
        dot.className = "dot";      
        dots.appendChild(dot);
      }

   
    const slider = () =>{
      const dot =  document.querySelectorAll('.dot'),
            slider = document.querySelector('.portfolio-content');
            
      let currentSlide = 0;
      let interval;

   
     
      const prevSlide =(elem, index, strClass) => {
        
        elem[index].classList.remove(strClass);
      };

      const nextSlide =(elem, index, strClass) => {
        elem[index].classList.add(strClass);
      };

      const autoPlaySlide = () =>{
        prevSlide(slide, currentSlide, 'portfolio-item-active');     
        prevSlide(dot, currentSlide, 'dot-active');    
        currentSlide++;        
        if(currentSlide >= slide.length){
          currentSlide = 0;
        }
        nextSlide(slide, currentSlide, 'portfolio-item-active');  
        nextSlide(dot, currentSlide, 'dot-active');         
      };
      const startSlide = (time = 3000) =>{
        interval = setInterval(autoPlaySlide, time);
        // console.log(interval);
        
      };
      const stopSlide = () =>{
        clearInterval(interval);
      };

      slider.addEventListener('click', (event) => {
        event.preventDefault();

        let target = event.target;
        if(!target.matches('.portfolio-btn, .dot')){
          return;
        }

        prevSlide(slide, currentSlide, 'portfolio-item-active');     
        prevSlide(dot, currentSlide, 'dot-active');    

        if(target.matches('#arrow-right')){
          currentSlide++; 
        } else if(target.matches('#arrow-left')){
          currentSlide--; 
        }else if (target.matches('.dot')){
          dot.forEach((elem, index) =>{
            if(elem === target) {
              currentSlide = index;
            }
          })
        }
        if(currentSlide >= slide.length){
          currentSlide = 0;
        }

        if(currentSlide < 0){
          currentSlide = slide.length - 1;
        }
        nextSlide(slide, currentSlide, 'portfolio-item-active');     
        nextSlide(dot, currentSlide, 'dot-active');    

      });

      
      slider.addEventListener('mouseover', (event) => {
        if(event.target.matches('.portfolio-btn') || event.target.matches('.dot')){
          stopSlide();
        }       
      });
      slider.addEventListener('mouseout', (event) => {
        if(event.target.matches('.portfolio-btn') || event.target.matches('.dot')){
          startSlide();
        }       
      });

      startSlide(1500);

    };
    slider();



});






