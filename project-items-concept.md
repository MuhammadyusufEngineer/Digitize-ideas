<div class="projects-wrapper relative flex flex-col gap-[5vw] mt-[5vw]">
    <div class="project-item w-full p-[0.5vw] bg-darkest rounded-xl border border-lighter overflow-hidden">
        <div class="relative flex items-center gap-[1vw] w-full mb-[1vw] px-[0.5vw]">
            <div class="flex items-center gap-[5px]">
                <div class="w-[0.7vw] h-[0.7vw] bg-[#e8524a] rounded-full"></div>
                <div class="w-[0.7vw] h-[0.7vw] bg-[#f0ad1b] rounded-full"></div>
                <div class="w-[0.7vw] h-[0.7vw] bg-[#59c737] rounded-full"></div>
            </div>
            <div class="w-1/2 h-[1vw] bg-darker rounded-lg absolute top-0 left-1/2 -translate-x-1/2">
                <p class="text-center text-[0.7vw] text-white font-light">humblee-ai.com</p>
            </div>
        </div>
        <div class="w-full h-[95%] overflow-hidden rounded-xl">
            <img src="./assets/img/hidden-image-1.jpg" class="w-full" alt="project item">
        </div>
    </div>
    <div class="project-item w-full p-[0.5vw] bg-darkest rounded-xl border border-lighter overflow-hidden">
        <div class="relative flex items-center gap-[1vw] w-full mb-[1vw] px-[0.5vw]">
            <div class="flex items-center gap-[5px]">
                <div class="w-[0.7vw] h-[0.7vw] bg-[#e8524a] rounded-full"></div>
                <div class="w-[0.7vw] h-[0.7vw] bg-[#f0ad1b] rounded-full"></div>
                <div class="w-[0.7vw] h-[0.7vw] bg-[#59c737] rounded-full"></div>
            </div>
            <div class="w-1/2 h-[1vw] bg-darker rounded-lg absolute top-0 left-1/2 -translate-x-1/2">
                <p class="text-center text-[0.7vw] text-white font-light">humblee-ai.com</p>
            </div>
        </div>
        <div class="w-full h-[95%] overflow-hidden rounded-xl">
            <img src="./assets/img/hidden-image-2.jpg" class="w-full" alt="project item">
        </div>
    </div>
    <div class="project-item w-full p-[0.5vw] bg-darkest rounded-xl border border-lighter overflow-hidden">
        <div class="relative flex items-center gap-[1vw] w-full mb-[1vw] px-[0.5vw]">
            <div class="flex items-center gap-[5px]">
                <div class="w-[0.7vw] h-[0.7vw] bg-[#e8524a] rounded-full"></div>
                <div class="w-[0.7vw] h-[0.7vw] bg-[#f0ad1b] rounded-full"></div>
                <div class="w-[0.7vw] h-[0.7vw] bg-[#59c737] rounded-full"></div>
            </div>
            <div class="w-1/2 h-[1vw] bg-darker rounded-lg absolute top-0 left-1/2 -translate-x-1/2">
                <p class="text-center text-[0.7vw] text-white font-light">humblee-ai.com</p>
            </div>
        </div>
        <div class="w-full h-[95%] overflow-hidden rounded-xl">
            <img src="./assets/img/hidden-image-3.jpg" class="w-full" alt="project item">
        </div>
    </div>
    <div class="project-item w-full p-[0.5vw] bg-darkest rounded-xl border border-lighter overflow-hidden">
        <div class="relative flex items-center gap-[1vw] w-full mb-[1vw] px-[0.5vw]">
            <div class="flex items-center gap-[5px]">
                <div class="w-[0.7vw] h-[0.7vw] bg-[#e8524a] rounded-full"></div>
                <div class="w-[0.7vw] h-[0.7vw] bg-[#f0ad1b] rounded-full"></div>
                <div class="w-[0.7vw] h-[0.7vw] bg-[#59c737] rounded-full"></div>
            </div>
            <div class="w-1/2 h-[1vw] bg-darker rounded-lg absolute top-0 left-1/2 -translate-x-1/2">
                <p class="text-center text-[0.7vw] text-white font-light">humblee-ai.com</p>
            </div>
        </div>
        <div class="w-full h-[95%] overflow-hidden rounded-xl">
            <img src="./assets/img/hidden-image-4.webp" class="w-full" alt="project item">
        </div>
    </div>
</div>


gsap.set('.project-item', { position: 'absolute' })
gsap.to('.project-item', {
yPercent: -100,
stagger: 0.5,
scrollTrigger: {
trigger: '.projects-wrapper',
markers: true,
scrub: true,
pin: true,
start: 'top top',
end: '+=3000px'
}
})

