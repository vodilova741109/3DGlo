const sendForm = () => {
    const errorMessage = 'Что то пошло не так...',
          loadMessage = 'Загрузка...',
          successMesage = 'Спасибо мы скоро с вами свяжемся!';
     const form = document.querySelectorAll('form'),          
           statusMessage = document.createElement('div');       
           statusMessage.style.cssText ='font-size: 2rem;';
           statusMessage.style.color ='#ffffff';
       
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
         let mess = (response) =>{       
           if(response.status !== 200){
             throw new Error('status network not 200');
           }         
           statusMessage.textContent = successMesage;
           setTimeout(() => {statusMessage.textContent = ''; }, 3000);
         };  
         let error = ()  => {     
           statusMessage.textContent = errorMessage;
           setTimeout(() => {statusMessage.textContent = ''; }, 3000);
           
         }
         postData(body)
               .then(mess)
               .catch(error);  
 
         postData(body);  
         const inputForm = document.querySelectorAll('form input');
          
         inputForm.forEach((item)  => {
          if(body !== ''){
            item.value = '';
          } ;
         })
         
       });
     });            
    
     const postData = (body) =>{
       return fetch('./server.php', {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json' 
         },
         body: JSON.stringify(body)        
       });
     }
   };
   export default sendForm;    