( () => 
    {const navSlide = () => {
    const burger = document.querySelector(".burger")
    const nav = document.querySelector(".header-fixed__menu__list")//ul
    const liLinks = document.querySelectorAll(".header-fixed__menu__list__item")//li

    const undropMenu =  (event) => {
        if(event.target != nav && event.target.parentNode != nav && event.target.parentNode != burger && event.target != burger){
            nav.classList.remove('menu--active')
            burger.classList.remove('toggle')
        }
        else return
        }

        burger.addEventListener('click', () => {
            //Toggle Nav
            
            nav.classList.toggle('menu--active')
            //It was translated to top, when the burguer it toogled slide down
            
            //Animate Links    
            liLinks.forEach((link, index) => {
                if(link.style.animation){
                    link.style.animation = ``
                }
                else{
                    link.style.animation = ` 0.5s ease fowards ${index/ 7 + 1.5}s`
                }
                })
                burger.classList.toggle('toggle')
                //Add the class list toggle to make a X animation
                window.addEventListener('mouseup', undropMenu)
                //after click in the element it add e event listener to check if it the element clicked is not the nav, so it undrop menu
            })
    }
    navSlide();}) ()