// let cursor = document.querySelector('.cursor')
// document.onmousemove = (e) => {
//     const height = cursor.offsetHeight
//     const width = cursor.offsetWidth

//     cursor.style.translate = `${e.pageX - width / 2}px ${e.pageY - height / 2}px`
// }

gsap.registerPlugin(ScrollTrigger)

// mobile menu
let menuBtn = document.querySelector('.menu-btn')
let menuList = document.querySelector('.menu-list')


menuBtn.onclick = () => {
    let isMenuActive = menuList.classList.contains('-left-full') ? ['-left-full', 'left-0'] : ['left-0', '-left-full']
    let isBtnActive = menuBtn.classList.contains('active') ? './assets/img/menu.png' : './assets/img/close.png'
    menuBtn.classList.toggle('active')
    menuList.classList.replace(...isMenuActive)
    menuBtn.querySelector('img').src = isBtnActive
}

// let observer = new IntersectionObserver(callback, options)
// let fadeElements = document.querySelectorAll('.animate')
// fadeElements.forEach(elem => {
//     observer.observe(elem)
// })

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

gsap.from('.logo, nav li', 2, {
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

gsap.from('.header-line', 2, {
    width: '0',
    ease: 'power4.inOut',
    delay: 3
})

gsap.from('.btns', 2, {
    x: 50,
    opacity: 0,
    ease: 'power4.inOut',
    delay: 3
})

gsap.from('.img-wrapper', 2, {
    width: '100%',
    ease: 'power4.inOut',
    delay: 3,
})

gsap.from('.arrow', 2, {
    scale: 0,
    delay: 3,
    ease: 'power4.inOut'
})

gsap.from('.marquee-effect', 2, {
    bottom: '-10rem',
    ease: 'power4.inOut',
    delay: 4
})
