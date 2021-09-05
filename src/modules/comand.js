const comand = () =>{
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
  }
  export default comand;    