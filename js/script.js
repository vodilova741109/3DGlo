document.addEventListener("DOMContentLoaded", function(){
    'use strict';
  
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

          if(timer.timeRemaining > 0){
            let idInterval = setInterval(updateClock, 1000);
            // clearInterval(idInterval);
           
          } else{
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
});



