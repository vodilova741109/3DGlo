document.addEventListener("DOMContentLoaded", function(){
  'use strict';

  function counterTimer(deadline){

      let timeDay  = document.querySelector('#times-day');
      let dayWeek  = document.querySelector('#day-week');
      let time  = document.querySelector('#time');
      let term  = document.querySelector('#term');

      let days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
            
      let myDate = new Date();
      let fullDate = days[myDate.getDay()];
      let hour = myDate.getHours(),
        minutes = myDate.getMinutes(),
        seconds = myDate.getSeconds(),
        amPm = 'AM';      

  

      if(hour >= 0 && hour < 6){
        timeDay.textContent =  `Доброй ночи!`;
      } else if (hour >= 6  && hour < 12){
        timeDay.textContent =  `Доброе утро!`;
      } else if(hour >= 12  && hour < 18){
        timeDay.textContent =  `Доброе день!`;
      } else if (hour >= 18  && hour < 24){
        timeDay.textContent =  `Добрый вечер!`;
      }

      if(hour >= 0 && hour < 12){
        amPm =  `AM`;
      } else if(hour >= 12  && hour < 24){
        amPm =  `PM`;
      }


      
      
  
      function getTimeRemaining(){
      let dateStop = new Date(deadline).getTime(),
          dateNow = new Date().getTime(),
          timeRemaining = (dateStop - dateNow) / 1000,
         
          day = Math.floor(timeRemaining / 60 / 60 / 24);         
      
          return {timeRemaining, day};
      }
      let idInterval = setInterval(updateClock, 1000);

      function updateClock(){          
        let timer = getTimeRemaining();
        dayWeek.textContent =  `Сегодня ${fullDate}`;
        time.textContent = `Текущее время ${hour}:${minutes}:${seconds} ${amPm}`;              
        term.textContent = `До нового года осталось ${ timer.day} дней`;     
         
        if(timer.timeRemaining < 0){
          term.textContent =  `До нового года осталось 0 дней`;          
          clearInterval(idInterval);         
        }               
      }
      updateClock();
  }

  counterTimer('31 December 2021');    
});



