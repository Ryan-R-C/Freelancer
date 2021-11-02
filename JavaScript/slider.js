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

carouselSlide.style.transform = `translateX(${(-size - 18) * counter - 56}px)`
console.log((-size - 18) * counter)
//btn listeners
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

carouselSlide.addEventListener('transitionend', ()=> {
    if(carouselImages[counter].className.includes('last-clone')){
        carouselSlide.style.transition = "none"
        counter = Math.ceil(carouselImages.length / 2 + 1)
        carouselSlide.style.transform = `translateX(${-size * counter + counter * counter * counter }px`
        console.log("last");
        console.log(counter);
        console.log(-size * counter - counter * counter * counter);

    }
    if(carouselImages[counter].className.includes('first-clone')){
        carouselSlide.style.transition = "none"
        counter = 1
        console.log("firts");
        carouselSlide.style.transform = `translateX(${-size * counter - counter * counter + counter}px`

        console.log(counter);
        console.log(-size * counter - counter - 27 * 2 - 2);

    }
})

window.addEventListener('resize', () => {
    carouselSlide.style.transition = "none";
    size = carouselImages[0].offsetWidth;
    carouselSlide.style.transform = 'translateX(' + -size * counter  + 'px)';
    console.log(counter);
    console.log(-size * counter);
})

}) ()