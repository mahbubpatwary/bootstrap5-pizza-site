

// scrollbr navbar 

let nav = document.querySelector('.navigation-wrap');

window.onscroll = function (params) {
    if(document.documentElement.scrollTop > 20){
        nav.classList.add('scroll-on');
    }else{
        nav.classList.remove('scroll-on')
    }
}






// hide nav

let navbar = document.querySelectorAll('.nav-item');
let navCollapse = document.querySelector('.navbar-collapse.collapse');

navbar.forEach(element =>{
    element.addEventListener('click', function (params) {
        navCollapse.classList.remove('show')
    })
})

















