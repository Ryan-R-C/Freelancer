( () => 
    {const navSlide = () => {
    const burger = document.querySelector(".burger")
    const nav = document.querySelector(".header-fixed__menu__list")//ul
    const liLinks = document.querySelectorAll(".header-fixed__menu__list__item")//li
    
        burger.addEventListener('click', () => {
            //Toggle Nav
            nav.classList.toggle('menu--active')
            //Animate Links    
            liLinks.forEach((link, index) => {
                if(link.style.animation){
                    link.style.animation = ``
                }
                else{
                    link.style.animation = `nav-link--fade  0.5s ease fowards ${index/ 7 + 1.5}s`
                }
                })
                burger.classList.toggle('toggle')
    })
    }
    navSlide();}) ()