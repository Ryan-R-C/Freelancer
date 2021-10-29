const card = document.querySelector('.card-father__holder')
const cardElement = document.querySelectorAll('.card')


const triangles = document.querySelectorAll('.triangle--card')
const icons = document.querySelectorAll('.card__element__icon')
const titles = document.querySelectorAll('.card__element__title')
console.log(triangles, icons, titles)

   
cardElement.forEach(element => {
    element.addEventListener('mousemove', (e) => {
        let xAxis = (window.innerWidth / 2 - e.pageX)    / 25;
        let yAxis = (window.innerHeight * 2.5 - e.pageY) / 25;
        card.style.transform = `rotateY(${-xAxis}deg) rotateX(${yAxis}deg)`

        card.addEventListener('mouseenter', (e) => {
            card.style.transition = 'none'
            triangles.forEach(triangle => {
                triangle.style.transform  = "translate(-50%, -40%) translateZ(100px)"
            })
            icons.forEach(icon => {
                icon.style.transform = "translateZ(200px) rotate(360deg)"
                
            })
            titles.forEach(title => {
                title.style.transform = "translateZ(250px)";})

            card.addEventListener('mouseleave', (e) => {
                card.style.transition = 'all 0.5s ease'
                card.style.transform = `rotateY(0deg) rotateX(0deg)`
                triangles.forEach(triangle => {
                    triangle.style.transform  = "translate(-50%, -40%) translateZ(0px)"
                })
                icons.forEach(icon => {
                    icon.style.transform      = "translateZ(0px) rotate(0deg)"
                    
                })
                titles.forEach(title => {
                    title.style.transform = "translateZ(0px)";})      
    })    
});
})})
