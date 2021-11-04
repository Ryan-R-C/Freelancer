const faders = document.querySelectorAll('.fade-in')

const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -100px 0px"
}

const appearOnScrool = new IntersectionObserver(
    (entries, appearOnScrool) => {
        entries.forEach( entry => {
            if(!entry.isIntersecting){
                return
            }
            else{
                entry.target.classList.add('appear')
                appearOnScrool.unobserve(entry.target)
            }

        })
    }, appearOptions
)
faders.forEach(fader => {
    appearOnScrool.observe(fader)
})