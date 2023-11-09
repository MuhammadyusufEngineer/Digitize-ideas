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
        fetch(`http://ip-api.com/json/${ip}`)
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

// let options = {
//     root: null,
//     // rootMargin: '-100px',
//     threshold: 0.2
// }
// let callback = (entries, observer) => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             entry.target.style.transform = 'translate(0, 0)'
//             entry.target.style.opacity = '1'
//         }
//     })
// }
// let observer = new IntersectionObserver(callback, options)
// let fadeElements = document.querySelectorAll('.fade')
// fadeElements.forEach(elem => {
//     observer.observe(elem)
// })

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
    // groups.forEach(item => gsap.set(item, { className: "active" }))

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
// class HoverImage {
//     constructor(element, options) {
//         this.el = element;
//         this.imgUrl = element.dataset.hoverImg;
//         this.img = this.createHoverImage();
//         this.imgDimensions = this.getDimensions(this.img);
//         this.init();

//         this.options = Object.assign({}, {
//             maxVel: 20,
//             lerp: 0.1,
//             base: 0.085,
//             delta: 0.0005,
//         }, options);

//         this.x = 0;
//         this.y = 0;
//         this.lastX = 0;
//         this.lastY = 0;
//         this.vel = { x: 0, y: 0 };
//         this.lerpVel = { x: 0, y: 0 };
//         this.paused = false;
//         this.points = this.getPoints();
//         this.maskPath = this.getMaskPath();
//         this.mask = this.createMask();
//         this.render();

//     }
//     render() {
//         if (this.paused === true) return;
//         requestAnimationFrame(() => this.render());
//         this.vel = {
//             x: 100 / this.options.maxVel * clamp(this.x - this.lastX, -this.options.maxVel, this.options.maxVel),
//             y: 100 / this.options.maxVel * clamp(this.y - this.lastY, -this.options.maxVel, this.options.maxVel),
//         };
//         this.lerpVel = {
//             x: lerp(this.lerpVel.x, this.vel.x, this.options.lerp),
//             y: lerp(this.lerpVel.y, this.vel.y, this.options.lerp),
//         }

//         this.points = this.getPoints();

//         this.maskPath = this.getMaskPath();
//         gsap.to(this.mask, {
//             attr: { d: this.maskPath }
//         });

//         const distance = Math.sqrt(Math.pow(this.vel.x, 2) + Math.pow(this.vel.y, 2));
//         const scale = Math.min(distance * this.options.delta, 1);
//         const angle = (this.vel.x * this.options.delta * 180) / Math.PI;
//         gsap.to(this.img, {
//             scale: 1 - scale,
//             rotate: angle,
//         })

//         this.lastX = this.x;
//         this.lastY = this.y;
//     }
//     init() {
//         this.el.parentElement.addEventListener('mousemove', (e) => {
//             if (this.paused === true) return;
//             this.x = e.clientX;
//             this.y = e.clientY;
//             this.move();
//         });
//         this.el.addEventListener('mouseenter', () => {
//             if (this.paused === true) return;
//             this.toggleVisibility(this.img, true)
//         });
//         this.el.addEventListener('mouseleave', () => {
//             if (this.paused === true) return;
//             this.toggleVisibility(this.img, false)
//         });
//     }
//     createHoverImage() {
//         let imageElm = new Image(900);
//         imageElm.src = this.imgUrl;
//         imageElm.classList.add('hover-image');
//         // let the browser rasterize the image and hide it after
//         // cause strange behavior where browser dont really load images with opacity set to 0
//         imageElm.addEventListener('load', () => {
//             imageElm.style.opacity = '0.01';
//             this.el.appendChild(imageElm);
//             setTimeout(() => {
//                 this.toggleVisibility(imageElm, false, 0);
//             }, 100);
//         });
//         return imageElm;
//     }
//     move() {
//         this.imgDimensions = this.getDimensions(this.img)
//         const y = this.y - this.imgDimensions.height / 2;
//         const x = this.x - this.imgDimensions.width / 2;
//         gsap.to(this.img, {
//             y: y,
//             x: x,
//         });
//     }
//     createMask() {
//         let maskpath = document.querySelector('#hover-image__mask path');
//         this.img.style.cssText +=
//             '-webkit-clip-path: url(#hover-image__mask);clip-path: url(#hover-image__mask);';
//         if (maskpath) return maskpath;

//         document.body.insertAdjacentHTML(
//             'beforeend',
//             `
//                     <svg height="0" width="0" style="position:absolute;">
//                         <!--   https://yqnn.github.io/svg-path-editor/ -->
//                         <defs>
//                             <clipPath id="hover-image__mask" clipPathUnits="objectBoundingBox">
//                             <path
//                                 d="${this.maskPath}"
//                                 data-path-normal="${this.maskPath}"
//                             />
//                             </clipPath>
//                         </defs>
//                     </svg>
//                     `
//         );
//         return document.querySelector('#hover-image__mask path');
//     }
//     toggleVisibility(el, show, duration = null) {
//         let time = {};
//         if (duration !== null) {
//             time = {
//                 duration: 0,
//             };
//         }
//         gsap.to(el, {
//             opacity: show ? 1 : 0,
//             ...time,
//         });
//     }
//     getMaskPath() {
//         return `M ${this.options.base} ${this.options.base} C ${this.points.left.top} 0.25 ${this.points.left.bottom} 0.75 ${this.options.base} ${1 - this.options.base} C 0.25 ${this.points.bottom.left} 0.75 ${this.points.bottom.right} ${1 - this.options.base} ${1 - this.options.base} C ${this.points.right.bottom} 0.75 ${this.points.right.top} 0.25 ${1 - this.options.base} ${this.options.base} C 0.75 ${this.points.top.right} 0.25 ${this.points.top.left} ${this.options.base} ${this.options.base} Z`;
//     }
//     getPoints() {
//         return {
//             left: {
//                 top: this.options.base + (this.options.base / 100 * this.lerpVel.x),
//                 bottom: this.options.base + (this.options.base / 100 * this.lerpVel.x),
//             },
//             bottom: {
//                 left: (1 - this.options.base) + (this.options.base / 100 * this.lerpVel.y),
//                 right: (1 - this.options.base) + (this.options.base / 100 * this.lerpVel.y),
//             },
//             right: {
//                 bottom: (1 - this.options.base) + (this.options.base / 100 * this.lerpVel.x),
//                 top: (1 - this.options.base) + (this.options.base / 100 * this.lerpVel.x),
//             },
//             top: {
//                 right: this.options.base + (this.options.base / 100 * this.lerpVel.y),
//                 left: this.options.base + (this.options.base / 100 * this.lerpVel.y),
//             },
//         };
//     }
//     getDimensions(el) {
//         return { width: el.clientWidth, height: el.clientHeight };
//     }
//     start() {
//         this.paused = false;
//         this.render();
//     }
//     stop() {
//         this.paused = true;
//     }
// }
// function clamp(val, min, max) {
//     return Math.min(Math.max(val, min), max);
// }
// function lerp(v0, v1, t) {
//     return v0 * (1 - t) + v1 * t;
// }

// for (const item of document.querySelectorAll("[data-hover-img]")) {
//     new HoverImage(item);
// }
// })