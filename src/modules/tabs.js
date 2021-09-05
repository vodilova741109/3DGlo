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

    export default tabs;    