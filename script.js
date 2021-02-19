

var target = document.querySelector('.q-prez');
const img = document.querySelector('.q-prez__img');


  var observer = new IntersectionObserver((entries)=> {
    entries.forEach((entry) => {
      console.log(entry.intersectionRatio)
      if(entry.intersectionRatio>=0.5){
        img.classList.remove('invisible');
        img.classList.add('slide');
        
      }
     
    })
  },{
    threshold:0.7
  });

  observer.observe(target);