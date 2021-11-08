( () => {
//Card  macro-components || card external elements
const card = document.querySelector('.card-father')
const CardElement = document.querySelector('.card-father__holder')

//Card micro-components || card inner elements
const triangles = document.querySelectorAll('.triangle--card')
const icons = document.querySelectorAll('.card__element__icon')
const titles = document.querySelectorAll('.card__element__title')


CardElement.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX)    / 25;
    let yAxis = (window.innerHeight * 3.5 - e.pageY) / 25;
    card.style.transform = `rotateY(${-xAxis}deg) rotateX(${yAxis}deg`
    })
    /*This function tracks whrere mouse is and translate the x and y axis
     of card to make the impression of 'following the mouse' 
    */

    card.addEventListener('mouseenter', (e) => {
        card.style.transition = 'none'
        triangles.forEach(triangle => {
            triangle.style.transform  = "translate(-50%, -65%) translateZ(50px)"
        })
        icons.forEach(icon => {
            icon.style.transform = "translateZ(200px) rotate(360deg)"
            
        })
        titles.forEach(title => {
            title.style.transform = "translateZ(200px)";})
            /*This three ones translate the card inner elements to Z axis mouse enter*/

        card.addEventListener('mouseleave', (e) => {
            card.style.transition = 'all 0.5s ease'
            card.style.transform = `rotateY(0deg) rotateX(0deg)`
            triangles.forEach(triangle => {
                triangle.style.transform  = "translate(-50%, -65%) translateZ(0px)"
            })
            icons.forEach(icon => {
                icon.style.transform      = "translateZ(0px) rotate(0deg)"
            })
            titles.forEach(title => {
                title.style.transform = "translateZ(0px)";})
            /*This three ones translate the card inner elements to Z axis to back to normal when mouse leave*/

})    
})})
()