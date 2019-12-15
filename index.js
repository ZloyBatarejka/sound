window.addEventListener("load",()=>{
  const sounds = document.querySelectorAll(".sound")
  const pads = document.querySelectorAll(".pads div")
  const visual = document.querySelector(".visual")
  var colors = ['orange',"red","yellow","purple",'green','blue']
  pads.forEach((pad,index)=>{
    pad.addEventListener("click",function(){
      sounds[index].currentTime=0;
      sounds[index].play();
      createBubbles(index);
    })
  });


  const createBubbles=(index)=>{
    const bubble = document.createElement("div");
   
    bubble.style.backgroundColor=colors[index];
    bubble.style.animation = 'jump 1s linear';
    visual.appendChild(bubble);
    bubble.addEventListener('animationend',()=>{
      visual.removeChild(bubble);
    });
  }
});