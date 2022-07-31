gsap.from ('h1', {
    duration: 2.5, rotation: -360, opacity: 0, 
})

gsap.from ('.image1', {
    x: -400, duration: 3, opacity: 0, scrollTrigger: '.image1',
})

gsap.from ('.image2', {
    x: -400, duration: 2, opacity: 0, scrollTrigger: '.image2',
})

gsap.from ('.aboutUs', {
    x: -400, duration: 2, opacity: 0, scrollTrigger: '.image2', delay: .3,
})

gsap.from ('.menuName', {
    opacity: 0, duration: 2, ease: "bounce.out", y: -250, scrollTrigger: '.menuAll'
})

gsap.from ('.menuItem', {
    opacity: 0, duration: 2, ease: "bounce.out", y: -200, scrollTrigger: '.menuAll'
})

gsap.from ('.image3', {
    x: -400, duration: 2, opacity: 0, scrollTrigger: '.image3',
})