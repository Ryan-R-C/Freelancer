( () =>
    {
const carouselSlide = document.querySelector(".carousel-container__carousel-slide")
const carouselImages = document.querySelectorAll(".carousel-slide__carousel-items")
//btn
const prevBtn = document.querySelector('#prevBtn')
const nextBtn = document.querySelector('#nextBtn')

counter = 1

let size = carouselImages[0].offsetWidth;
console.log("size ",carouselImages[0].offsetWidth)

function adaptCarousel(){
    carouselSlide.style.transform = `translateX(${(-size - 18) * counter - 56}px)`
}


function prevButtonAction(){
    if(counter <= 0 ) return
    carouselSlide.style.transition = "transform 0.5s ease-in-out"
    counter --
    carouselSlide.style.transform = `translateX(${(-size - 27) * counter}px`
    console.log(counter);
    console.log((-size - 27) * counter - counter  * counter);
}

function nextButtonAction(){
    if(counter <= carouselImages.length / 2 + 2 )
    {
    carouselSlide.style.transition = 'transform 0.5s ease-in-out'
    counter ++
    carouselSlide.style.transform = `translateX(${(-size - 27) * counter - counter  * counter}px`
    console.log((-size - 27) * counter - counter  * counter);
    }
    else{
        counter = 1
        carouselSlide.style.transition = "none";

    }
}
function resetCarousel(){
    carouselSlide.style.transform = `translateX(${-size * counter - counter * counter + counter}px`
    console.log(counter);
    
}

adaptCarousel()

/*=============================
    Button Event Listeners
=============================*/
prevBtn.addEventListener('click', () =>{
    prevButtonAction()
    console.log("prev");
    console.log(counter);
})
nextBtn.addEventListener('click', () =>{
    nextButtonAction()
    console.log("next");
    console.log(counter);

})

/*==============================
    Carousel Event Listeners
===============================*/

carouselSlide.addEventListener('transitionend', ()=> {
    if(carouselImages[counter].className.includes('last-clone')){
        carouselSlide.style.transition = "none"
        counter = Math.ceil(carouselImages.length / 2 - 1)
        resetCarousel()

    }
    if(carouselImages[counter].className.includes('first-clone')){
        carouselSlide.style.transition = "none"
        counter = 2
        resetCarousel()
    }
})

/*===========================
    Resize Event Listener
============================*/

window.addEventListener('resize', () => {
    carouselSlide.style.transition = "none";
    size = carouselImages[0].offsetWidth;
    adaptCarousel()
})

}) ()