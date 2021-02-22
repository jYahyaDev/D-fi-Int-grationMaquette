

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

const features = document.querySelector('.q-features');
const demo = document.querySelectorAll('.q-features__demo');


let options = {
  root:'',
  threshold:0.2
}

function callback(entries) {
  entries.forEach(entry =>{
    if(entry.intersectionRatio >0){
      demo.forEach(div=>{
        div.classList.remove('invisible');
        div.classList.add('slide');
      })
    }
  })
}

let observer2 = new IntersectionObserver(callback);
observer2.observe(features);