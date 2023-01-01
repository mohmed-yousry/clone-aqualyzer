// swiper all page 

let swiperNav = new Swiper(".swiper-header", {
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    loop : true
  });
let swipertestimonial = new Swiper(".swiper-testimonial", {
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    loop : true
  });

  let swiperProdect = new Swiper(".swiper-prodect", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop : true , 
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
  });
  let swiperProdect2 = new Swiper(".swiper-prodect2", {
    loop : true , 
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
      400: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
  });
  let swiperMembers = new Swiper(".swiper-members", {
    loop : true , 
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
      400: {
        slidesPerView: 2,
        spaceBetween: 5,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 5,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });
// swiper all page 


// general
// nav 
// handle nav scroll
// let screenSize = window.screen.height ; 
// const nav = document.querySelector("nav") ; 
const navLinks = document.querySelector("nav .links ") ; 
// const linksactive = document.querySelector("nav .links  a.active-nav-white") ; 
// const navLogin = document.querySelector("nav .login") ;
// const navBtnLogin = document.querySelector("nav .login").children[0] ;
// const navTogle = document.querySelector("nav .togle") ;
// const navLogo = document.querySelector("nav .logo img")
// function navAtiveFun () {
//   nav.classList.add("active-nav")
//   navLinks.classList.add("active-nav-links")
//   linksactive.classList.add("active-nav-links-active")
//   navLogin.classList.add("active-nav-links-active")
//   navBtnLogin.classList.add("active-login-btn")
//   navTogle.classList.add("active-nav-links-active")
//   navLogo.src = "img/logoblack.svg"
// }
// function navNotAtiveFun () {
//   nav.classList.remove("active-nav")
//   navLinks.classList.remove("active-nav-links")
//   linksactive.classList.remove("active-nav-links-active")
//   navLogin.classList.remove("active-nav-links-active")
//   navBtnLogin.classList.remove("active-login-btn")
//   navTogle.classList.remove("active-nav-links-active")
//   navLogo.src = "img/logowhite.svg"
// }
// window.addEventListener("scroll" , () => {
//   if(scrollY  > screenSize - 100) {
//     navAtiveFun()
//   } else {
//     navNotAtiveFun ()
//   }
// })

// handle nav scroll

// handle menue mobile 
  const mobilemenue = document.querySelector(".mobile-btn-open-menue") ; 
  const overlayNav = document.querySelector(".overlay-nav") ; 
  mobilemenue.addEventListener("click" , () => {
    overlayNav.classList.remove("hidden") ; 
    document.querySelector("body").classList.add("hidden-content-overlay")
    if(document.querySelector("html").dir == "ltr") {
      navLinks.style.left = "0px" ;
    } else {
      navLinks.style.right = "0px" ;
    }
  })
  
  overlayNav.addEventListener("click" , () => {
    overlayNav.classList.add("hidden")
    document.querySelector("body").classList.remove("hidden-content-overlay")
    if(document.querySelector("html").dir == "ltr") {
      navLinks.style.left = "-200%" ;
    } else {
      navLinks.style.right = "-200%" ;
    }
  })
// handle menue mobile 
// nav 

// handle valid email and password
const emailInput = document.querySelector(`input[type ="email"]`)  ;
const passwordInput = document.querySelector(`input[type ="password"]`)  ;
const form = document.querySelector("form") ; 
const regEmail =
/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
if(emailInput != null) {
  emailInput.addEventListener("input" , () => {
    if(!emailInput.value.match(regEmail)) {
      emailInput.classList.add("not-valid")
    } else {
      emailInput.classList.remove("not-valid")
    }
  })
}
if(passwordInput != null) {
  passwordInput.addEventListener("input" , () => {
    if(passwordInput.value.length < 8) {
      passwordInput.classList.add("not-valid")
    } else {
      passwordInput.classList.remove("not-valid")
    }
  })
}

if (form != null) {
  form.addEventListener("submit" , (ev) => {
    const allInput = Array.from(ev.target.querySelectorAll("input"))
    allInput.forEach(e=> {
      if(e.classList.contains("not-valid") || e.value == "") {
        ev.preventDefault() ; 
      }
    })
  })
}

// handle valid email and password

// handle lang
const allLengBtn = Array.from(document.querySelectorAll(".lengBtn")) ; 

if(allLengBtn.length != 0) {
  allLengBtn.forEach(e=> {
    e.addEventListener("click" , () => {
      if(document.querySelector("html").dir == "rtl") {
        localStorage.setItem("dir" , "ltr")
        localStorage.setItem("leng" , "en")

      } else {
        localStorage.setItem("dir" , "rtl")
        localStorage.setItem("leng" , "ar")
      }
    })
  })
}

window.addEventListener("load" , () => {
  allLengBtn.forEach(e=> {
    e.children[0].innerHTML = localStorage.getItem("leng") ;
  })

  document.querySelector("#loader").style.display = "none"

})
// handle lang

// general


// index 
let nums = document.querySelectorAll(".numbers .number");
let sectionNums = document.querySelector(".numbers");
let started = false; // Function Started ? No
  if(sectionNums != null) {
    window.onscroll = function () {
      if (window.scrollY >= sectionNums.offsetTop - 600) {
        if (!started) {
          nums.forEach((num) => startCount(num));
        }
        started = true;
      }
    };
    
  }

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}

const aboutSectionPlayVideo = document.querySelector(".about-section .play-video") ; 
const aboutSecion = document.querySelector(".about-section") ;
const aboutImges = document.querySelector(".about-section img") 
if(aboutSectionPlayVideo != null) {
  aboutSectionPlayVideo.addEventListener("click" , (ev) => {
    let src = aboutSecion.getAttribute("src").replace("watch?v=" , "embed/") ;
    let ifrem = document.createElement("iframe") ; 
    ifrem.className = "aspect-square w-full h-full rounded-xl" ; 
    ifrem.src = src ; 
    aboutSectionPlayVideo.parentElement.children[0].style.display = "none" ;
    aboutSectionPlayVideo.parentElement.children[1].style.display = "none" ;
    aboutSectionPlayVideo.parentElement.appendChild(ifrem)
  })
}
// index

// login
const eyeIcon = document.querySelector(".eye-icon") ; 
if(eyeIcon != null) {
  eyeIcon.addEventListener("click" , (ev) => {
    if(ev.target.previousSibling.getAttribute("type") == "password") {
      ev.target.previousSibling.setAttribute("type" , "text") 
    } else {
      ev.target.previousSibling.setAttribute("type" , "password") 
    }
    eyeIcon.classList.toggle("fa-eye")
  })
}
// login
