
// menu toggle bar
function menu(){
    let menu = document.getElementById("menu");
    let menubar = document.querySelector(".menu-btn i");

    menu.classList.toggle("active");
    menubar.classList.toggle("active");
}

function scrolltoTop(){
    document.documentElement.scrollTop = 0;
}



const dataDummy = ["Welcome To My Portofolio"];

document.addEventListener("DOMContentLoaded", EfekTeks);


function EfekTeks() {

// a= text, i=x, previous=fnCallBack

  function typeWriter(a, x, previous) {
    if (x < (a.length)) {
      document.querySelector(".Efek-teks").innerHTML = a.substring(0, x+1) + "<h1 class='effect'></h1>";

      setTimeout(function() {
        typeWriter(a, x+1, previous)
      }, 100)
    } else if (typeof previous == "function") {
      setTimeout(previous, 700);
    } 
  }

 // Memulai tulis
 // x==i
 // 
  function startTextAnimation(x) {
    if (typeof dataDummy[x] == "undefined") {
      setTimeout(function() {
        startTextAnimation(0);
      }, 2000)
    }
    if (x < dataDummy[x].length) {
      typeWriter(dataDummy[x], 0, function() {
        startTextAnimation(x + 1);
      });
    }
    
  }
  startTextAnimation(0);

}