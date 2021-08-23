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
            timeDay.style.display = '00';
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
      const btnMenu = document.querySelector('.menu'),
            menu = document.querySelector('menu'),
            closeBtn = document.querySelector('.close-btn'),
            menuItems = document.querySelectorAll('ul>li');
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

        btnMenu.addEventListener('click', handlerMenu);
      
        closeBtn.addEventListener('click', handlerMenu);
        
        menuItems.forEach((elem) => elem.addEventListener('click', handlerMenu));  

    };
    toggleMenu();
    // popup
    const togglePopup = () => {
      const popup = document.querySelector('.popup'),
            popupBtn = document.querySelectorAll('.popup-btn'),
            popupClose = document.querySelector('.popup-close') ;
       // анимация меню

       let count = -100; 
       let flyInterval;
       const popupContent = document.querySelector('.popup-content');
      
       // console.log(popupContent);
          

      let animate = false;     

         
      let flyAnimate = function(){
        flyInterval = requestAnimationFrame(flyAnimate);
        count++;        
        if(count < 350 && window.screen.width > 768) {
          popupContent.style.top = count + 'px';
        }else{
          cancelAnimationFrame(flyInterval);
        }
      } 
      popupBtn.forEach((elem) => {
        elem.addEventListener('click', () => {
          popup.style.display = 'block';
          flyInterval = requestAnimationFrame(flyAnimate);
          animate = false;
        });
      });          
      popupClose.addEventListener('click', () =>{
        popup.style.display = 'none';        
        cancelAnimationFrame(flyInterval);
      });   
      
    };
    togglePopup();



});






