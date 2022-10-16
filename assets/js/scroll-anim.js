let viewportWidth = window.innerWidth;

const header = document.querySelector(".header-s");
const bowl = document.querySelector(".bowl");
let lastScrollY = window.scrollY;
const colorTable = [];


window.addEventListener("scroll", () => {
    if (lastScrollY < window.scrollY) {
    header.classList.add("header--hidden");
    } else {
    header.classList.remove("header--hidden");
    }
    if (lastScrollY > 635) {
        header.classList.add("dark-color");
    } else {
        header.classList.remove("dark-color");
    }
    if (lastScrollY > 1500) {
        bowl.classList.add("bowl--hidden");
    } else {
        bowl.classList.remove("bowl--hidden");
    }
    lastScrollY = window.scrollY;
});


if (viewportWidth < 412) {
    document.getElementById("logo-main").classList.remove("disp-block");
    document.getElementById("word-des").classList.add("disp-block");
    document.getElementById("word-emballages").classList.add("disp-block");
    document.getElementById("bowl").style.width = "300px";
    document.getElementById("bowl").style.height = "300px";
} else {
    document.getElementById("logo-main").classList.add("disp-block");
    document.getElementById("word-des").classList.remove("disp-block");
    document.getElementById("word-emballages").classList.remove("disp-block");
    document.getElementById("bowl").style.width = "600px";
    document.getElementById("bowl").style.height = "600px";
}

window.onscroll = function launchChangeColor() {changeColor();}
function changeColor() {
    colorTable.push(document.querySelector('.logo'), document.querySelector('.txt-color'), 
                    document.querySelector('.txt-color1'), document.querySelector('.txt-color2'), 
                    document.querySelector('.txt-color3'), document.querySelector('.arrow-icon'));
    
    if (viewportWidth < 412) {
        if (window.scrollY > 436) {
            colorTable[0].style.filter = "brightness(0)";
        } else {
            colorTable[0].style.filter = "";
        }
        if (window.scrollY > 398) {
            colorTable[1].style.color = "#000000";
        } else {
            colorTable[1].style.color = "#f3f1ee";
        }
        if (window.scrollY > 350) {
            colorTable[2].style.color = "#000000";
        } else {
            colorTable[2].style.color = "#f3f1ee";
        }
        if (window.scrollY > 305) {
            colorTable[3].style.color = "#000000";
        } else {
            colorTable[3].style.color = "#f3f1ee";
        }
        if (window.scrollY > 258) {
            colorTable[4].style.color = "#000000";
        } else {
            colorTable[4].style.color = "#f3f1ee";
        }
        if (window.scrollY > 40) {
            colorTable[5].style.filter = "brightness(0)";
        } else {
            colorTable[5].style.filter = "";
        }
    } else {
        if (window.scrollY > 600) {
            colorTable[0].style.filter = "brightness(0)";
        } else {
            colorTable[0].style.filter = "";
        }
        if (window.scrollY > 398) {
            colorTable[1].style.color = "#000000";
        } else {
            colorTable[1].style.color = "#f3f1ee";
        }
        if (window.scrollY > 350) {
            colorTable[2].style.color = "#000000";
        } else {
            colorTable[2].style.color = "#f3f1ee";
        }
        if (window.scrollY > 305) {
            colorTable[3].style.color = "#000000";
        } else {
            colorTable[3].style.color = "#f3f1ee";
        }
        if (window.scrollY > 258) {
            colorTable[4].style.color = "#000000";
        } else {
            colorTable[4].style.color = "#f3f1ee";
        }
        if (window.scrollY > 40) {
            colorTable[5].style.filter = "brightness(0)";
        } else {
            colorTable[5].style.filter = "";
        }
    }
}

const slideright = document.getElementById("slide-right")
const slideleft = document.getElementById("slide-left")
const container = document.getElementById("container")
const rect = container.getBoundingClientRect()

const animate = (element,position) => {
     element.style.transform = `translateX(${position}px)`
}

const animatedesktop = (element,position) => {
    element.style.transform = `translateX(${position}px)`
}

if (viewportWidth > 412) {
    document.addEventListener('scroll', function(e) {
        lastKnownScrollPositionLeft = window.scrollY-3700;
        lastKnownScrollPositionRight = window.scrollY-4000;
          
         window.requestAnimationFrame(function() {
           
            animatedesktop(slideright,lastKnownScrollPositionLeft*.2)
            animatedesktop(slideleft,lastKnownScrollPositionRight*-.2)
          })
      });
} else {
    document.addEventListener('scroll', function(e) {
      lastKnownScrollPosition = window.scrollY-3000;
        
       window.requestAnimationFrame(function() {
         
          animate(slideright,lastKnownScrollPosition*.2)
          animate(slideleft,lastKnownScrollPosition*-.2)
        })
    });
}
