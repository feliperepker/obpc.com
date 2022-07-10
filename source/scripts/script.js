//Modal

var modalBtns = document.querySelectorAll(".modal-open")

modalBtns.forEach(function(btn){
    btn.onclick = function(){
        var modal = btn.getAttribute("data-modal");
        document.getElementById(modal).classList.add("active")
        document.body.style.overflow ='hidden'; 
    };
})


var closeBtns = document.querySelectorAll (".modal-close")

closeBtns.forEach(function(btn){
    btn.onclick = function(){
        var modal = btn.getAttribute("data-modal")
        document.getElementById(modal).classList.remove("active")
        document.body.style.overflow = 'initial';
    }
})

//-----------------------------------------------------------------------------------------//
//Carousel
$('.slider').slick({
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    accessibility: false,
    arrows:false,
    mobileFirst: true
});

//-----------------------------------------------------------------------------------------//
//Menu

let show = true;

const menuSection = document.querySelector('.menu-section')
const menuToggle = menuSection.querySelector('.menu-toggle')

menuToggle.addEventListener('click', () =>{
    document.body.style.overflow = show ? 'hidden' : 'initial'; 

    menuSection.classList.toggle('on', show)
    show = !show;
})