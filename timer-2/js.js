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
      let Hour = myDate.getHours(),
        Minutes = myDate.getMinutes(),
        Seconds = myDate.getSeconds();      

      dayWeek.textContent =  `Сегодня ${fullDate}`;
      time.textContent = `Текущее время ${Hour}:${Minutes}:${Seconds} PM`;

      if(Hour >= 0 && Hour < 6){
        timeDay.textContent =  `Доброй ночи!`;
      } else if (Hour >= 6  && Hour < 12){
        timeDay.textContent =  `Доброе утро!`;
      } else if(Hour >= 12  && Hour < 18){
        timeDay.textContent =  `Доброе день!`;
      } else if (Hour >= 18  && Hour < 24){
        timeDay.textContent =  `Добрый вечер!`;
      }
      
  
      function getTimeRemaining(){
      let dateStop = new Date(deadline).getTime(),
          dateNow = new Date().getTime(),
          timeRemaining = (dateStop - dateNow) / 1000,
         
          day = Math.floor(timeRemaining / 60 / 60 / 24);
         console.log( timeRemaining );
      
          return {timeRemaining, day};
      }
      function updateClock(){          let timer = getTimeRemaining();           
          
          term.textContent = `До нового года осталось ${ timer.day} дней`;         

        if(timer.timeRemaining > 0){
          let idInterval = setInterval(updateClock, 1000);
          clearInterval(idInterval);
         
        } else{
          term.textContent =  `До нового года осталось 0 дней`;          
          clearInterval(idInterval);
        }          
      
      }
      updateClock();
  }

  counterTimer('31 December 2021');    
});



