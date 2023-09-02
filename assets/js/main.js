// let cursor = document.querySelector('.cursor')
// document.onmousemove = (e) => {
//     const height = cursor.offsetHeight
//     const width = cursor.offsetWidth

//     cursor.style.translate = `${e.pageX - width / 2}px ${e.pageY - height / 2}px`
// }

// const cursor = document.querySelector(".cursor");
// const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
// const mouse = { x: pos.x, y: pos.y };
// const speed = 0.2;

// const xSet = gsap.quickSetter(cursor, "x", "px");
// const ySet = gsap.quickSetter(cursor, "y", "px");

// window.addEventListener("mousemove", e => {
//     mouse.x = e.x;
//     mouse.y = e.y;
// });

// gsap.ticker.add(() => {

//     // adjust speed for higher refresh monitors
//     const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());

//     pos.x += (mouse.x - pos.x) * dt;
//     pos.y += (mouse.y - pos.y) * dt;
//     xSet(pos.x);
//     ySet(pos.y);
// });

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

// let animationNames = document.querySelectorAll('[animation]');
// for (let item of animationNames) {
//     let name = item.getAttribute('animation')
//         `${name}(${item})`
// }

// let options = {
//     root: null,
//     rootMargin: '-100px',
//     threshold: 0.2
// }

// function callback(entries, observer) {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             // Check the element's class or ID and trigger the appropriate animation
//             // if (entry.target.classList.contains('animate')) {
//             entry.target.classList.add('fade');
//             console.log('working...')
//             // } else if (targetElement.classList.contains('animate-fade-in')) {
//             // targetElement.classList.add('fade-in-animation');
//         }
//         // } else {
//         // entry.target.classList.remove('fade', 'scale', 'scaleX', 'scaleY');
//         // }
//     });
// };

// let observer = new IntersectionObserver(callback, options)
// let fadeElements = document.querySelectorAll('.animate')
// fadeElements.forEach(elem => {
//     observer.observe(elem)
// })

let options = {
    root: null,
    rootMargin: '-100px',
    threshold: 0.2
}
let callback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('staggerWord')
            entry.target.style.transform = 'translateY(0%)'
        }
    })
}
let observer = new IntersectionObserver(callback, options)
let fadeElements = document.querySelectorAll('.animate')
fadeElements.forEach(elem => {
    observer.observe(elem)
})

let animItems = document.querySelectorAll("[delay]");
animItems.forEach((item) => {
    let speed = item.getAttribute("delay");
    item.style.animationDelay = `${speed}ms`;
});