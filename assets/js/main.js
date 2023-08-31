let cursor = document.querySelector('.cursor')
document.onmousemove = (e) => {
    const height = cursor.offsetHeight
    const width = cursor.offsetWidth

    cursor.style.translate = `${e.pageX - width / 2}px ${e.pageY - height / 2}px`
}

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
