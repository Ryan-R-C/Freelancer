( () =>
    {

const carouselSlide = document.querySelector(".carousel-container__carousel-slide")
const carouselImages = document.querySelectorAll(".carousel-slide__carousel-items")
console.log(carouselImages[0])
//btn
const prevBtn = document.querySelector('#prevBtn')
const nextBtn = document.querySelector('#nextBtn')

counter = 1
let size = carouselImages[0].clientWidth - carouselImages.length;



carouselSlide.style.transform = `translateX(${-size * counter}px)`
//btn listeners
prevBtn.addEventListener('click', () =>{
    if(counter <= 0 ) return
    carouselSlide.style.transition = "transform 0.5s ease-in-out"
    counter --
    carouselSlide.style.transform = `translateX(${-size * counter}px`
})
nextBtn.addEventListener('click', () =>{
    if(counter >= carouselImages.length -1) return
    carouselSlide.style.transition = 'transform 0.5s ease-in-out'
    counter ++
    carouselSlide.style.transform = `translateX(${-size * counter}px`
})

carouselSlide.addEventListener('transitionend', ()=> {
    if(carouselImages[counter].id === 'last-clone'){
        carouselSlide.style.transition = "none"
        counter = carouselImages.length -2
        carouselSlide.style.transform = `translateX(${-size * counter}px`
    }
    if(carouselImages[counter].id === 'fist-clone'){
        carouselSlide.style.transition = "none"
        counter = carouselImages.length - counter
        carouselSlide.style.transform = `translateX(${-size * counter}px`
    }
})

window.addEventListener('resize', () => {
    carouselSlide.style.transition = "none";
    size = carouselImages[0].clientWidth;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
})
}) ()