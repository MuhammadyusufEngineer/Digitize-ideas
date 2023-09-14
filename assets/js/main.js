
function registerScrollTrigger() {
    gsap.registerPlugin(ScrollTrigger)
}
// mobile menu
let menuBtn = document.querySelector('.menu-btn')
let menuList = document.querySelector('.menu-list')

menuBtn.onclick = () => {
    let btnImgs = document.querySelectorAll('.menu-btn img')
    btnImgs.forEach(i => i.classList.toggle('hidden'))
    let isMenuActive = menuList.classList.contains('-left-full') ? ['-left-full', 'left-0'] : ['left-0', '-left-full']
    // let isBtnActive = menuBtn.classList.contains('active') ? './assets/img/menu.png' : './assets/img/close.png'
    // menuBtn.classList.toggle('active')
    menuList.classList.replace(...isMenuActive)
    // menuBtn.querySelector('img').src = isBtnActive
}

// nav-link hover animation
let elements = document.querySelectorAll('.nav-link')

elements.forEach(element => {
    let innerText = element.innerText
    element.innerHTML = ''

    let textContainer = document.createElement('div')
    textContainer.classList.add('block')

    let delay = 0
    for (let letter of innerText) {
        let span = document.createElement('span')
        span.innerText = letter.trim() === "" ? "\xa0" : letter
        span.classList.add('letter')
        textContainer.appendChild(span)
        delay += 0.03
        span.style.transitionDelay = `${delay}s`
    }

    element.appendChild(textContainer)
    element.appendChild(textContainer.cloneNode(true))
})

elements.forEach(element => {
    element.onmouseover = () => {
        element.classList.remove('play')
    }
})

// load animations
function animations() {
    gsap.from('.logo, nav li, .menu-btn', 2, {
        top: '5vw',
        opacity: 0,
        ease: 'power4.inOut',
        delay: 1,
        stagger: {
            amount: 0.3
        }
    })

    gsap.from('h1', 2, {
        y: '5vw',
        opacity: 0,
        ease: 'power4.inOut',
        delay: 1.5,
        stagger: {
            amount: 0.3
        }
    })

    gsap.from('.play-wrapper, .pattern, .copy', 2, {
        scaleY: 0,
        ease: 'power4.inOut',
        stagger: {
            amount: 0.3
        },
        delay: 1.5,
    })

    gsap.from('.play-btn', 2, {
        scale: '0',
        ease: 'power4.inOut',
        delay: 2
    })

    gsap.from('.header-line', 1, {
        scale: 0,
        ease: 'power4.inOut',
        delay: 2
    })

    gsap.from('.header-line', 2, {
        width: '0',
        ease: 'power4.inOut',
        delay: 3
    })

    gsap.from('.radios-wrapper', 2, {
        scale: 0,
        ease: 'power4.inOut',
        delay: 2
    })

    gsap.from('.radio-1', 2, {
        left: '33.3%',
        ease: 'power4.inOut',
        delay: 3
    })

    gsap.from('.radio-3', 2, {
        left: '33.3%',
        ease: 'power4.inOut',
        delay: 3
    })
}

window.onload = () => {
    registerScrollTrigger
    animations()
    toggleCursor()
}


// // CURSOR FOLLOWER
let cursor = document.querySelector('.cursor')
// document.onmousemove = (e) => {
//     let height = cursor.offsetHeight
//     let width = cursor.offsetWidth
//     cursor.style.translate = `${e.pageX - width / 2}px ${e.pageY - height / 2}px`
// }

function toggleCursor() {
    if (window.innerWidth < 768) {
        cursor.classList.add('hidden')
        gsap.from('.btns, .mobile-btn', 2, {
            y: 50,
            opacity: 0,
            ease: 'power4.inOut',
            delay: 3
        })

        gsap.from('.img-wrapper', 2, {
            scrollTrigger: {
                trigger: '.img-wrapper',
                start: 'top 70%',
            },
            width: '100%',
            ease: 'power4.inOut',
            delay: 3
        })

        gsap.from('.arrow', 2, {
            scrollTrigger: {
                trigger: '.arrow',
                start: 'top 70%'
            },
            scale: 0,
            ease: 'power4.inOut',
            delay: 3

        })

        gsap.from('.marquee-effect', 2, {
            scrollTrigger: {
                trigger: '.marquee-effect',
                start: 'top bottom',

            },
            bottom: '-10rem',
            ease: 'power3.inOut',
            delay: 3

        })

    } else {
        cursor.classList.remove('hidden')
        gsap.from('.btns, .mobile-btn', 2, {
            x: 50,
            opacity: 0,
            ease: 'power4.inOut',
            delay: 3
        })

        gsap.from('.img-wrapper', 2, {
            scrollTrigger: {
                trigger: '.img-wrapper',
                start: 'top 70%',
            },
            width: '100%',
            ease: 'power4.inOut'
        })

        gsap.from('.arrow', 2, {
            scrollTrigger: {
                trigger: '.arrow',
                start: 'top 70%'
            },
            scale: 0,
            ease: 'power4.inOut'
        })

        gsap.from('.marquee-effect', 2, {
            scrollTrigger: {
                trigger: '.marquee-effect',
                start: 'top bottom',

            },
            bottom: '-10rem',
            ease: 'power3.inOut',
        })
    }
}

window.onresize = () => {
    toggleCursor()
    ScrollTrigger.refresh()
    console.log('onresize')
}

let options = {
    root: null,
    // rootMargin: '-100px',
    threshold: 0.2
}
let callback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.transform = 'translate(0, 0)'
            entry.target.style.opacity = '1'
        }
    })
}
let observer = new IntersectionObserver(callback, options)
let fadeElements = document.querySelectorAll('.fade')
fadeElements.forEach(elem => {
    observer.observe(elem)
})

// ONSCROLL ANIMATION
// let options = {
//     root: null,
//     rootMargin: '-100px',
//     threshold: 0.2
// }
// let callback = (entries, observer) => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             entry.target.classList.add('fade')
//             entry.target.classList.change('opacity-0', 'opacity-100')
//         }
//     })
// }
// let observer = new IntersectionObserver(callback, options)
// let fadeElements = document.querySelectorAll('.opacity-0')
// fadeElements.forEach(elem => {
//     observer.observe(elem)
// })

// let animItems = document.querySelectorAll("[delay]");
// animItems.forEach((item) => {
//     let speed = item.getAttribute("delay");
//     item.style.transitionDelay = `${speed}ms`;
// });