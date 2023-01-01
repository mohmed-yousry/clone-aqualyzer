const dir = localStorage.getItem("dir") ;
const leng = localStorage.getItem("leng") ; 

if(dir != null && leng != null) {
    document.querySelector("html").setAttribute("dir" , dir) ;
    document.querySelector("html").setAttribute("leng" , dir) ;
} 

