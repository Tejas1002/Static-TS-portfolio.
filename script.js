// const lenis = new Lenis()

// lenis.on('scroll', (e) => {
//   console.log(e)
// })

// function raf(time) {
//   lenis.raf(time)
//   requestAnimationFrame(raf)
// }

// requestAnimationFrame(raf)




var path = "M 10 100 Q 500 100 990 100"
var finalpath = "M 10 100 Q 500 100 990 100"

var string = document.querySelector(".string")

string.addEventListener("mousemove",function (dets) {
   path =   `M 10 100 Q ${dets.x} ${dets.y} 990 100`

    gsap.to("svg path",{
        attr: { d: path },
        duration:0.2,
        ease:"power3.out"
    })
})

string.addEventListener("mouseleave",function(){
    gsap.to("svg path",{
        attr:{d:finalpath},
        duration:0.9,
        ease:"elastic.out(1,0,2)"
    })
})

document.querySelector("body").addEventListener("mousemove", eyeball);

function eyeball(event) {
    var eyes = document.querySelectorAll(".eye");
    eyes.forEach(function(eye) {
        let x = eye.getBoundingClientRect().left + eye.clientWidth / 2;
        let y = eye.getBoundingClientRect().top + eye.clientHeight / 2;
        let radian = Math.atan2(event.pageX - x, event.pageY - y);
        let rot = radian * (180 / Math.PI) * -1 + 270;
        eye.style.transform = "rotate(" + rot + "deg)";
    });
}

var main = document.querySelector(".main");
var cursor = document.querySelector(".cursor");


main.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        duration:1,
        ease:"back.out"
        
    });
});
