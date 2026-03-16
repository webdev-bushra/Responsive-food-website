//active navbar jo scroll k bad b nzr ay
 
let nav = document.querySelector(".navigation-wrap");
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20){
    nav.classList.add("scroll-on");
  }else{
    nav.classList.remove("scroll-on");
  }
}
//nav hide
let navbar=document.querySelectorAll('.nav-link');
let navcollapse= document.querySelector('.navbar-collapse');
navbar.forEach(function(a){
  a.addEventListener("click",function(){
    navcollapse.classList.remove("show");
  })
})

//COUNTER DESIGN
document.addEventListener("DOMContentLoaded",()=>{
 function counter (id, start, end , duration){
    let obj =document.getElementById(id),
    current = start,
    Range =end - start,
    increment = end > start ? 1: -1,
    step = Math.abs (Math.floor(duration/ Range)),
    timer= setInterval(()=>{
         current += increment;
         obj.textContent = current;
         if(current == end){
            clearInterval(timer);
         }
    }, step);
 }
 counter("count1",0,1287,3000);
 counter("count2",100,5787,2500);
 counter("count3",0,1487,3000);
 counter("count4",0,2177,3000);
})