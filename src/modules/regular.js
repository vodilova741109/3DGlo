const regular = () => {
  // регулярные выражения
   const inputCalc = document.querySelectorAll('.calc-block input'),
   name = document.querySelectorAll('[name = user_name]'),
   message = document.getElementById('form2-message'),
   email = document.querySelectorAll('[type = email]'),
   phone = document.querySelectorAll('[type = tel]'),            
   input = document.querySelectorAll('input');
     
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
if( (/^[\s-]/.test(text)) || /[\s-]$/.test(text)){              
 item.value = text.replace(/^[\s-]/g, '').trim();
 let textNew = item.value; 
 item.value = textNew.replace(/[\s-]$/g, '').trim();    
}      
let name = item.value;        
let newText = name.toLowerCase();      
if(newText){
 item.value = newText[0].toUpperCase() + newText.slice(1);
}  
});
});
// сообщение
message.addEventListener('input', () => {          
let text = message.value; 
message.value = text.match(/[А-ЯЁа-яё\s-,:;\.\?!]+/ig);    
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
 alert('Вы ввели не корректный email');
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
}  else {
 alert('Вы ввели не корректный телефон');
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
};

export default regular;    