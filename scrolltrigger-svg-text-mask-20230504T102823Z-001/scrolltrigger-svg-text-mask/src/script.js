gsap.set('.main', {position:'absolute', background:'#fff', width:'100%', maxWidth:'1200px', height:'100%', top:0, left:'50%', x:'-50%'})
gsap.timeline({
    scrollTrigger:{
        trigger:'.main',
        start:'top top', 
        end:'bottom 50%', 
        scrub:1,
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
    .fromTo('#hola', {y:0},{y:0}, 0)



    gsap.to('.main',{
        scrollTrigger: {
            trigger: '.main',
            start: "top top",
            end: "bottom 100%",
            scrub: true,
            toggleClass: { className: "active", targets: '#anchor' },
        }
    })