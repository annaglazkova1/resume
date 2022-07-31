
gsap.from ('.animation1', {
    duration: 1.5, ease: "power1.in", y: -200, opacity: 0, stagger: .6,
    scrollTrigger: {
        trigger: ".start1",
        toggleActions: 'restart none none none'
    },
})

gsap.from ('.animation2', {
    duration: 1.5, ease: "power1.in", y: -200, opacity: 0, stagger: .6,
    scrollTrigger: {
        trigger: ".start2",
        toggleActions: 'restart none none none'
    },
})

gsap.from ('.animation3', {
    duration: 2, rotation: 360, y: -200, opacity: 0, 
    scrollTrigger: {
        trigger: ".start3",
        toggleActions: 'restart none none none'
    },
})

gsap.from('.animation4', {
    duration: 2, rotation: -360, y: -200, opacity: 0, 
    scrollTrigger: {
        trigger: ".start4",
        toggleActions: 'restart none none none'
    },
})