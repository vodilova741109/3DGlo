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
     // меню
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
    toggleMenu();
    // popup
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
        console.log(target);      
            target = target.closest('.service-header-tab');    
            console.log(target);           
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
    // блок наша командв
    const  img = document.querySelectorAll('.command__photo');
    img.forEach((item) =>{
      let srcItem = item.src;          
      item.addEventListener('mouseover', (event) => {
        let target = event.target;            
          event.target.src = event.target.dataset.img;               
      });
      item.addEventListener('mouseout', (event) => {
        event.target.src = srcItem;        
      }); 
    }); 
    // регулярные выражения
    const inputCalc = document.querySelectorAll('.calc-block input'),
            name = document.querySelectorAll('[name = user_name]'),
            message = document.getElementById('form2-message'),
            email = document.querySelectorAll('[type = email]'),
            phone = document.querySelectorAll('[type = tel]'), 
            btn = document.querySelectorAll('form button'),
            input = document.querySelectorAll('input');
    // деактивация кнопки 
    const deactivationBtn = function (){
     if(input)
      btn.forEach((item) => {
        item.addEventListener('click', (event) =>{
          event.preventDefault();
          item.style.backgroundColor = '#ade4f4';
        })
      });
    }
    
    // данные в калькуляторе
    inputCalc.forEach((item) => {
      item.addEventListener('input', () => {        
        let text = item.value;   
        item.value = text.replace(/\D/g, '');       
      });
    });
    // имя
    name.forEach((item) => {
      item.addEventListener('input', () => {          
        let text = item.value;       
        item.value = text.match(/[А-ЯЁа-яё\s-]+/ig);                
      });
      item.addEventListener('blur', () => {
        let text = item.value;  
        
      // получаем массив из инпута имя 
        let оbj = item.value.split(/\s|-/); 
        // console.log(оbj);
        // создаем новый пустой массив
        let newObj =[];
      // пробигаемся по каждому элементу массива 
        оbj.forEach((item) =>{
          // и если элемент не пустой
          if (item !== ''){ 
            // приводим все буквы к нижнему регистру  
            let newText = item.toLowerCase();   
            //  затем первую букву приводим к верхнему регистру первую букву и возвращаем все остальные в нижнем регистре
            const nameNew = newText[0].toUpperCase() + newText.slice(1);    
            // пушим все в новый объект         
              newObj.push(nameNew);
              console.log(newObj);
          }   
        });  
        item.value = newObj.join('-');
         if( (/^[\s-,]/.test(text)) || /[\s-,]$/.test(text)){              
          item.value = text.replace(/^[\s-,]/g, '').trim();
          let textNew = item.value; 
          item.value = textNew.replace(/[\s-,]$/g, '').trim();    
        }   
       
      });
    });
   
     // сообщение
     message.addEventListener('input', () => { 
      let text = message.value; 
      message.value = text.match(/[А-ЯЁа-яё\s-]+/ig);    
    });
         //  email
    
     email.forEach((item) => {  
      item.addEventListener('input', () => {    
        let text = item.value;
        item.value = text.match(/[A-Za-z@_!~'\.\*]+/ig);          
      });
      item.addEventListener("blur", () => {
        let text = item.value; 
        const emailText = text.match(/\w+@\w+\.\w{2,3}/g);      
        if(emailText){       
          item.value = emailText;        
        }  else {  
          btn.forEach((item) =>{
            console.log(item);  
               item.disabled= true;
          })  
          return;
        }
      });
    
    });
     // телефон

     phone.forEach((item) => {
      item.addEventListener('input', () => {    
        let text = item.value;      
        item.value = text.match(/[0-9-\(\)\+]+/g);   
      
      });  
      item.addEventListener("blur", () => {
        let text = item.value; 
        const phoneText = text.match(/\+?[78]([-()]*\d){10}/g);     
        if(phoneText){       
          item.value = phoneText;  
          item.disabled= false;
        }else {
          btn.forEach((item) =>{
            console.log(item);  
               item.disabled= true;
          })        
        }
      });      
    });

    input.forEach((item) => {
      item.addEventListener("blur", () => {
        let text = item.value;  
        if( (/^[\s-]/.test(text)) || /[\s-]$/.test(text)){              
          item.value = text.replace(/^[\s-]/g, '').trim();
          let textNew = item.value; 
          item.value = textNew.replace(/[\s-]$/g, '').trim();    
        }             
      item.value = text.replace(/\s+/g, ' ').trim();
      let textNew = item.value; 
      item.value = textNew.replace(/-+/g, '-').trim();    
      }, true);
    });

    // калькулятор
    const calc = (price = 100) => {
      const calcBlock = document.querySelector('.calc-block'),
            calcType = document.querySelector('.calc-type'),
            calcSquare = document.querySelector('.calc-square'),
            calcDay = document.querySelector('.calc-day'),
            calcCount = document.querySelector('.calc-count'),
            totalValue = document.getElementById('total');
      const countSum = () => {
        let total = 0,
            countValue = 1,
            dayValue = 1;
        const typeValue = calcType.options[calcType.selectedIndex].value,          
              squareValue = +calcSquare.value;
        if(calcCount.value > 1){
          countValue += (  calcCount.value - 1) / 10;
        }      
        if(calcDay.value && calcDay.value < 5){
          dayValue *= 2;
        } else if(calcDay.value && calcDay.value < 10){
          dayValue *= 1.5;
        }
        if(typeValue && squareValue ) {
          console.log(price * typeValue * squareValue);
          total = price * typeValue * squareValue * countValue *dayValue;          
        }
        totalValue.textContent = total;
      };   
   

      calcBlock.addEventListener('change', (event) =>{
        const target  = event.target;
        if(target.matches('select') || target.matches('input')){
          countSum(); 
        }
      });
    }
    calc(100); 
  
  //send-ajax-form
  const sendForm = () => {
   const errorMessage = 'Что то пошло не так...',
         loadMessage = 'Загрузка...',
         successMesage = 'Спасибо мы скоро с вами свяжемся!';
    const form = document.querySelectorAll('form'), 
          // form1 = document.querySelectorAll('form') ,  
          statusMessage = document.createElement('div');       
          statusMessage.style.cssText ='font-size: 2rem;';
      
    form.forEach((item) =>{
      item.addEventListener('submit', (event) =>{
        event.preventDefault();     
        item.appendChild(statusMessage);
        statusMessage.textContent = loadMessage;  
        const formData = new FormData(item);
        let body = {};
        for (let val of formData.entries()){
          body[val[0]] = val[1];
        }
        postData(
          body, 
          () =>{
            statusMessage.textContent = successMesage;
          }, 
          (error) => {
            statusMessage.textContent = errorMessage;
            console.error(error);
          }
        );

        const inputForm = document.querySelectorAll('form input');
         
        inputForm.forEach((item)  => {
         if(body !== ''){
           item.value = '';
         } ;
        })
        
      });
    });            
   
    const postData = (body, outputData, errorData) =>{
      const request = new XMLHttpRequest();
      request.addEventListener('readystatechange', () => {
        
        if(request.readyState !== 4) {
          return;
        }
        if (request.status === 200){
          outputData();
         
        } else {
          errorData(request.status);
         
        }
      });

      request.open('POST', './server.php');      
      // request.setRequestHeader('Content-Type', 'multipart/form-data');
      request.setRequestHeader('Content-Type', 'application/json');
    
      
      // request.send(formData); если через formData
           request.send(JSON.stringify(body));

          
          
    }
   
  }    
  sendForm();

});