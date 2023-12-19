import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
function startLoading() {
    // Remove the loader
    startLoader()
    gsap.to('.counter', 0.25, {
        delay: 3.5,
        opacity: 0,
    })
    gsap.to('.bar', 3.5, {
        delay: 3.5,
        height: 0,
        stagger: {
            amount: 0.5
        },
        ease: 'power4.inOut',
    })
    gsap.to('body', {
        delay: 6,
        overflowY: 'scroll'
    })
    gsap.to('.counter, .overlay', {
        delay: 7,
        className: "hidden",
        overwrite: "flex"
    })
};

function startLoader() {
    gsap.set('body', { overflowY: 'hidden' })
    let counterElement = document.querySelector('.counter')
    let currentValue = 0

    function updateCounter() {
        if (currentValue === 100) return;
        currentValue += Math.floor(Math.random() * 10) + 1

        if (currentValue > 100) currentValue = 100;

        counterElement.textContent = currentValue + '%'

        let delay = Math.floor(Math.random() * 200) + 50
        setTimeout(updateCounter, delay)
    }

    updateCounter()

    toggleScrolling(false)
}
// Just fun thing to log to the console
function customLog() {
    fetch('https://httpbin.org/ip')
        .then(response => response.json())
        .then(data => {
            const userIP = data.origin;
            getUserLocation(userIP);
        })
        .catch(error => {
            console.error('Error fetching user IP: ' + error);
        });

    function getUserLocation(ip) {
        fetch(`https://ip-api.com/json/${ip}`)
            .then(response => response.json())
            .then(data => {
                const city = data.city;
                console.log(`%cHey There! ${city} is awesome place to be!`, customLogStyles())
            })
            .catch(error => {
                error
                console.log(`%cHey There, Good to see here!`, customLogStyles());
            });
    }
}
function customLogStyles() {
    return `color: #d5ff3f; font-size: 5vw; font-family: sans-serif; font-weight: bold; background: rgba(0,0,0,.5);`
}

// disable or enable scrolling on popup and mobile menu
let body = document.querySelector('body')
function toggleScrolling(condition) {
    body.style.overflowY = condition ? "scroll" : 'hidden'
}


let menuBtn = document.querySelector('.menu-btn')
let menuList = document.querySelector('.menu-list')
let menuItems = menuList.querySelectorAll('li')
menuBtn.onclick = toggleMobileMenu
window.innerWidth < 768 ? menuItems.forEach(item => item.onclick = toggleMobileMenu) : customLog();

// show or hide mobile menu
function toggleMobileMenu() {
    let btnImgs = document.querySelectorAll('.menu-btn img')
    btnImgs.forEach(i => i.classList.toggle('hidden'))
    let isMenuActive;
    if (menuList.classList.contains('-left-full')) {
        isMenuActive = ['-left-full', 'left-0']
        toggleScrolling(false)
    } else {
        isMenuActive = ['left-0', '-left-full']
        toggleScrolling(true)
    }
    menuList.classList.replace(...isMenuActive)
}

// Accordion
const accItem = document.querySelectorAll('.accordion-item')
const accTitle = document.querySelectorAll('.accordion-title')

accTitle.forEach(title => {
    title.onclick = () => {
        accItem.forEach(item => {
            item.classList.remove('active')
            title.parentElement.classList.add('active')
        })
    }
})

// nav-link hover animation
let navItems = document.querySelectorAll('.nav-link')

navItems.forEach(element => {
    let innerText = element.innerText
    element.innerHTML = ''

    let textContainer = document.createElement('div')
    textContainer.classList.add('block')

    let delay = 0
    for (let i = 0; i < innerText.length; i++) {
        const letter = innerText[i]
        let span = document.createElement('span')
        span.innerText = letter.trim() === "" ? "\xa0" : letter
        span.classList.add('letter')
        textContainer.appendChild(span)
        if (i !== 0) {
            delay += 0.03
            span.style.transitionDelay = `${delay}s`
        }
    }

    element.appendChild(textContainer)
    element.appendChild(textContainer.cloneNode(true))
})

// load animations
function loadingAnimation() {
    gsap.from('.logo, nav li, .menu-btn', 2, {
        top: '5vw',
        opacity: 0,
        ease: 'power4.inOut',
        delay: 8,
        stagger: {
            amount: 0.3
        }
    })

    gsap.from('h1', 2, {
        y: '5vw',
        opacity: 0,
        ease: 'power4.inOut',
        delay: 6,
        stagger: {
            amount: 0.3
        }
    })

    gsap.from('.play-wrapper', 2, {
        scale: 0,
        ease: 'power4.inOut',
        delay: 6.5
    })

    gsap.from('.play-wrapper', 2, {
        width: '6vw',
        ease: 'power4.inOut',
        delay: 7.5
    })

    gsap.from('.play-btn', 2, {
        scale: '0',
        ease: 'power4.inOut',
        delay: 7
    })

    gsap.from('.copy', 2, {
        y: '5vw',
        opacity: 0,
        ease: 'power4.inOut',
        delay: 7.5,
    })

    gsap.from('.btn', 2, {
        x: '-5vw',
        opacity: 0,
        ease: 'power4.inOut',
        delay: 7.5,
        stagger: {
            amount: 0.3
        }
    })

    gsap.from('.pattern img', 2, {
        scale: 1.5,
        rotate: '-180deg',
        opacity: 0,
        ease: 'power4.inOut',
        stagger: {
            amount: 0.3
        },
        delay: 8,
    })

    gsap.from('.header-line', 1, {
        scale: 0,
        ease: 'power4.inOut',
        delay: 8
    })

    gsap.from('.radios-wrapper', 2, {
        scale: 0,
        ease: 'power4.inOut',
        delay: 8
    })

    gsap.from('.radio-1, .radio-3', 2, {
        left: '33.3%',
        ease: 'power4.inOut',
        delay: 9
    })

    if (window.innerWidth < 768) {
        gsap.from('.copy, .mobile-btn', 2, {
            y: '5vw',
            opacity: 0,
            ease: 'power4.inOut',
            delay: 6.5,
        })

        gsap.to('.img-wrapper', 2, {
            width: '0',
            ease: 'power4.inOut',
            delay: 7
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
        gsap.to('.img-wrapper', 2, {
            scrollTrigger: {
                trigger: '.img-wrapper',
                start: 'top 70%',
            },
            width: '0',
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

window.onload = () => {

}

// // // CURSOR FOLLOWER
let cursor = document.querySelector('.cursor')
// let bee = document.querySelector('.bee')
let height = cursor.offsetHeight
let width = cursor.offsetWidth
// let previousPageX = 0;

document.onmousemove = (e) => {
    // let currentPageX = e.pageX - width / 2
    // currentPageX > previousPageX ? bee.style.cssText = 'transform: rotateY(0deg) translateX(-100%);' : bee.style.cssText = 'transform: rotateY(180deg) translateX(0%);'
    cursor.style.translate = `${e.pageX - width / 2}px ${e.pageY - height / 2}px`
    // bee.style.translate = `${e.pageX - width / 2}px ${e.pageY - height / 2}px`
    // previousPageX = currentPageX
}

function mouseEntrToEl(html = '', num1, num2, num3, num4) {
    let p = cursor.querySelector('p')
    cursor.classList.remove(`w-[${num1}vw]`, `h-[${num1}vw]`)
    cursor.classList.add(`w-[${num2}vw]`, `h-[${num2}vw]`, 'p-[1vw]')
    p.innerHTML = `${html}`
    p.classList.replace(`scale-${num3}`, `scale-${num4}`)

}

// #--------------------------------------------------------------#
// # show animation on hover project item and link inside an item #
// #--------------------------------------------------------------#
// on build it adds generated number to media src like: origian-112g1236.png,
// this images only show when hover, it means builders like webpack 
// doesn't build this to production, so this images are hidden but we can get
// generated url through this method

//  huh, that was a lot, hope you will get these stupid words :)


let eyeURL = document.querySelector('.eye-gif').src
let liveSiteURL1 = document.querySelector('.live-site2').firstElementChild.src
let liveSiteURL2 = document.querySelector('.live-site2').lastElementChild.src
let eye = `<img src="${eyeURL}" class="w-[3vw] h-[3vw]" alt="eye gif">`
let arrowUP = `<div class="live-site relative w-[2vw] h-[2vw] mix-blend-difference flex items-center justify-center">
<img
  class="absolute z-10 top-0 left-0 translate-x-0 translate-y-0 group-hover:duration-500 w-[2vw] h-[2vw]"
  src="${liveSiteURL1}" alt="arrow up">
<img
  class="absolute z-10 top-0 left-0 -translate-x-[7vw] translate-y-[7vw] group-hover:duration-500 ease-out w-[2vw] h-[2vw]"
  src="${liveSiteURL2}" alt="arrow up">
</div>`

let liveSite = document.querySelectorAll('a.hover-animation')
for (let item of liveSite) {
    item.onmouseenter = () => {
        mouseEntrToEl(arrowUP, 1, 4, 0, 100)
    }
    item.onmouseleave = () => {
        mouseEntrToEl('', 4, 1, 100, 0)
    }
}

const projectItems = document.querySelectorAll('.project-item')
projectItems.forEach(item => {
    let popup = document.querySelector('.popup')
    item.onmouseenter = () => {
        mouseEntrToEl(eye, 1, 4, 0, 100)
        cursor.classList.replace('mix-blend-difference', 'mix-blend-normal')
    }
    item.onmouseleave = () => {
        mouseEntrToEl('', 4, 1, 100, 0)
        cursor.classList.replace('mix-blend-normal', 'mix-blend-difference')
    }
    item.onclick = () => {
        popup.classList.replace('translate-y-[50px]', 'translate-y-0')
        popup.classList.replace('opacity-0', 'opacity-100')
        popup.classList.replace('-z-10', 'z-50')
        toggleScrolling(false)
    }
    document.querySelector('.close-popup').onclick = () => {
        popup.classList.replace('translate-y-0', 'translate-y-[50px]')
        popup.classList.replace('opacity-100', 'opacity-0')
        popup.classList.replace('z-50', '-z-10')
        toggleScrolling(true)
    }
    document.querySelector('.close-popup').onmouseover = () => {
        cursor.style.transform = 'scale(3)'
    }
    document.querySelector('.close-popup').onmouseleave = () => {
        cursor.style.transform = 'scale(1)'
    }
    // popup.onmouseenter = () => {
    //     cursor.classList.replace('mix-blend-normal', 'mix-blend-difference')
    // }

})

let footer3D = document.querySelector('.footer-3d')
let shadow = ''
for (let i = 0; i < 30; i++) {
    shadow += (shadow ? ',' : '') + -i * 1 + 'px ' + i * 1 + 'px 0 #d5ff3f'
}
footer3D.style.textShadow = shadow


// ONSCROLL ANIMATION

let options = {
    root: null,
    rootMargin: window.innerWidth > 768 ? '-100px' : '-50px',
    threshold: 0.2
}
let callback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.replace('reveal-animation', 'fade')
        }
    })
}
let observer = new IntersectionObserver(callback, options)
let fadeElements = document.querySelectorAll('.reveal-animation')
fadeElements.forEach(elem => {
    observer.observe(elem)
})

window.addEventListener('DOMContentLoaded', () => {
    startLoading()
    loadingAnimation()

});


const groups = gsap.utils.toArray(".accordion-item");
const menus = gsap.utils.toArray(".accordion-title");

const animations = [];

groups.forEach(group => createAnimation(group));

menus.forEach(menu => {
    menu.addEventListener("click", () => toggleAnimation(menu));
});

function toggleAnimation(menu) {
    // Save the current state of the clicked animation
    const selectedReversedState = menu.animation.reversed();

    // Reverse all animations
    animations.forEach(animation => animation.reverse());

    // Set the reversed state of the clicked accordion element to the opposite of what it was before
    menu.animation.reversed(!selectedReversedState);
}

function createAnimation(element) {
    const menu = element.querySelector(".accordion-title");
    const box = element.querySelector(".accordion-content");
    const icon = element.querySelector(".accordion-icon");

    gsap.set(box, { height: "auto" })
    gsap.set(icon, { translate: 'rotate(45deg)' })

    // Keep a reference to the animation on the menu item itself
    const tween = gsap.from(box, {
        height: 0,
        margin: 0,
        duration: 0.5,
        ease: "power2.inOut",
        reversed: true,
    });


    menu.animation = tween;
    animations.push(tween);
}
