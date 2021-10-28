const card = document.querySelector('.card-father__holder')
const cardElement = document.querySelectorAll('.card')


const triangle = document.querySelectorAll('.triangle--card')
const icon = document.querySelectorAll('.card__element__icon')
const title = document.querySelectorAll('.card__element__title')
console.log(triangle, icon, title)

   
cardElement.forEach(element => {
    element.addEventListener('mousemove', (e) => {
        let xAxis = (window.innerWidth / 2 - e.pageX) / 35;
        let yAxis = (window.innerWidth / 2 - e.pageY) / 35;
        card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`

        element.addEventListener('mouseenter', (e) => {
            card.style.transition = 'none'

            element.addEventListener('mouseleave', (e) => {
                card.style.transition = 'all 0.5s ease'
                card.style.transform = `rotateY(0deg) rotateX(0deg)`
                      
    })    
});
})})
