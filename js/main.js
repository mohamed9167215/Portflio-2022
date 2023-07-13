let open = document.querySelector(".open-menu"); 
let close = document.querySelector(".fa-times"); 
let menu  = document.querySelector(".menu-mobile");
let wrong = document.getElementById( 'test-1');
let wrong_2 = document.getElementById( 'test-2');
let wrong_3 = document.getElementById( 'test-3');
let btn = document.querySelector( '.close-btn');
let modeling = document.querySelector(".model");
// The Stats
let nums = document.querySelectorAll(".stats .number");
let statsSection = document.querySelector(".stats");
let started = false; // Function Started ? No

// show sidebar
open.addEventListener('click' , () => {
    menu.style.display = "block";
})

// close sidebar
close.addEventListener('click' , () => {
    menu.style.display = "none";
})

 // Blogs 
wrong.addEventListener('click' , () => {
    modeling.style.position = "fixed";
    modeling.style.display = "block";
})
wrong_2.addEventListener('click' , () => {
    modeling.style.position = "fixed";
    modeling.style.display = "block";
})
wrong_3.addEventListener('click' , () => {
    modeling.style.position = "fixed";
    modeling.style.display = "block";
})
btn.addEventListener('click' , () => {
    modeling.style.position = "relative";
    modeling.style.display = "none";
})


  window.onscroll = function () {

    // Scroll Button Top
      if(window.scrollY > 1000){
          (scrolltop).style.display = "block"
      }else{
          (scrolltop).style.display = "none"
      }
      (scrolltop).addEventListener('click' , () => {
          window.scrollTo({
              top:0,
              behavior:"smooth"
          })
      }); 

    // Stats Increase Number
    if (window.scrollY >= statsSection.offsetTop) {
      if (!started) {
        nums.forEach((num) => startCount(num));
      }
      started = true;
    }
  };
  function startCount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
      el.textContent++;
      if (el.textContent == goal) {
        clearInterval(count);
      }
    }, 2000 / goal);

  }