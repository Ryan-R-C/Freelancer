( () =>
    {
const carouselSlide = document.querySelector(".carousel-container__carousel-slide")
const carouselImages = document.querySelectorAll(".carousel-slide__carousel-items")
//btn
const prevBtn = document.querySelector('#prevBtn')
const nextBtn = document.querySelector('#nextBtn')

counter = 1

let size = carouselImages[0].offsetWidth;

function adaptCarousel(){
    carouselSlide.style.transform = `translateX(${(-size - 18) * counter - 56}px)`
}

function slide(){
    carouselSlide.style.transform = `translateX(${(-size - 27) * counter - counter  * counter}px`
}

function prevButtonAction(){
    if(counter <= 0 ) return
    carouselSlide.style.transition = "transform 0.5s ease-in-out"
    counter --
    slide()
}

function nextButtonAction(){
    if(counter <= carouselImages.length / 2 + 2 )
    {
    carouselSlide.style.transition = 'transform 0.5s ease-in-out'
    counter ++
    slide()
    }
    else{
        counter = 2
        noneTransition()

    }
}
function resetCarousel(){
    carouselSlide.style.transform = `translateX(${-size * counter - counter * counter + counter}px`    
}

adaptCarousel()


/*=============================
    Button Event Listeners
=============================*/
prevBtn.addEventListener('click', () =>{
    prevButtonAction()
})
nextBtn.addEventListener('click', () =>{
    nextButtonAction()
})

/*==============================
    Return none transition
===============================*/
const noneTransition = () =>{
    return carouselSlide.style.transition = "none";
}


/*==============================
    Carousel Event Listeners
===============================*/

carouselSlide.addEventListener('transitionend', ()=> {
    if(carouselImages[counter].className.includes('last-clone')){
        noneTransition()
        counter = Math.ceil(carouselImages.length / 2 - 1)
        resetCarousel()

    }
    if(carouselImages[counter].className.includes('first-clone')){
        noneTransition()
        counter = 2
        resetCarousel()
    }
})

/*===========================
    Resize Event Listener
============================*/

window.addEventListener('resize', () => {
    noneTransition()
    size = carouselImages[0].offsetWidth;
    adaptCarousel()
})

}) ()