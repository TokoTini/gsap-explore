gsap.set('.main', {background:'#fff', width:'100%', maxWidth:'1920px', height:'1000px'})
gsap.timeline({
    scrollTrigger:{
        trigger:'.main',
        start:'top top', 
        end:'bottom 40%', 
        scrub: 1,
        markers: true
    }
    })
    .fromTo('.sky', {y:0},{y:-200}, 0)
    .fromTo('.cloud1', {y:100},{y:-800}, 0)
    .fromTo('.cloud2', {y:-150},{y:-500}, 0)
    .fromTo('.cloud3', {y:-50},{y:-650}, 0)
    .fromTo('.mountBg', {y:-10},{y:-100}, 0)
    .fromTo('.mountMg', {y:-30},{y:-250}, 0)
    .fromTo('.mountFg', {y:-50},{y:-600}, 0)
    .fromTo('.texti', {y:0},{y: 250}, 0)


    $('#arrowBtn').on('mouseenter', (e)=>{ gsap.to('.arrow', {y:10, duration:0.8, ease:'back.inOut(3)', overwrite:'auto'}); })
    $('#arrowBtn').on('mouseleave', (e)=>{ gsap.to('.arrow', {y:0, duration:0.5, ease:'power3.out', overwrite:'auto'}); })
    $('#arrowBtn').on('click', (e)=>{ gsap.to(window, {scrollTo: 500, duration:2, ease:'power1.out', overwrite:'auto'}); }) // scrollTo requires the ScrollTo plugin (not to be confused w/ ScrollTrigger)