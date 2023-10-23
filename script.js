
var btn = document.querySelector("h6")
var hidenav = document.querySelector(".hidenav")
var flag = 0

btn.addEventListener("click", function () {
    if (flag == 0) {
        hidenav.style.top = "0"
        flag = 1
        btn.innerHTML = `<i class="ri-close-line"></i>`
    }
    else {
        hidenav.style.top = "-100%"
        flag = 0
        btn.innerHTML = `<i class="ri-menu-add-line"></i>`

    }
})

var analog = document.querySelector(".page2-box1")
var awatch = document.querySelector(".analog")
var aflag=0



var abtn = document.querySelector(".analog-close")

analog.addEventListener("click",function(){
    if(aflag == 0){
        awatch.style.left="0%"
        smart.style.zIndex="-1"
        digital.style.opacity="0"
     
        // digital.style.zIndex="-1"
        analog.style.boxShadow="none"
        aflag=1
    }else{
        abtn.addEventListener("click",function(){
            awatch.style.left="-500%"
            smart.style.zIndex="5"
        digital.style.opacity="1"

            // digital.style.zIndex="5"
            analog.style.boxShadow="0 0 1.5vmax rgba(75, 73, 73, 0.582)"
        })
          aflag=0

    }

})

var smart = document.querySelector(".page2-box2")
var swatch = document.querySelector(".smart")
var sflag=0
var sbtn = document.querySelector(".smart-close")

smart.addEventListener("click",function(){
    if(sflag == 0){
        swatch.style.left="-140%"
        digital.style.zIndex="-1"
        analog.style.zIndex="-1"
        smart.style.boxShadow="none"
        sflag=1
    }else{
        sbtn.addEventListener("click",function(){
            swatch.style.left="-600%"
            analog.style.zIndex="5"
            digital.style.zIndex="5"
            smart.style.boxShadow="0 0 1.5vmax rgba(75, 73, 73, 0.582)"
            console.log("hyhyhyhy")
        })
        sflag=0
    }
    
})

var digital = document.querySelector(".page2-box3")
var dwatch = document.querySelector(".digital")
var dflag=0
var dbtn = document.querySelector(".digital-close")

digital.addEventListener("click",function(){
    if(dflag == 0){
        dwatch.style.left="-285%"
        smart.style.zIndex="-1"
        analog.style.zIndex="-1"
        digital.style.boxShadow="none"
        dflag=1
    }else{
        dbtn.addEventListener("click",function(){
            dwatch.style.left="-750%"
            analog.style.zIndex="5"
            smart.style.zIndex="5"
            digital.style.boxShadow="0 0 1.5vmax rgba(75, 73, 73, 0.582)"
           console.log("hwhhw")
        })
        dflag=0
    }
})

// ============= GSAP ==============
var tl = gsap.timeline()
tl.from("nav >ul >a",{
    y: -50,
    opacity: 0,
    duration: 0.5,
    delay: 0.5,
    stagger: 0.2,
    rotate:-120
})
tl.from(".contener-right >h1 ,.contener-right >p",{
    x: -90,
    opacity:0,
    duration: 0.5,
    stagger: 0.3
})
tl.from(".contener-right >button",{
    opacity:0,
    scale: 0.9,
    repeat: -1,
    yoyo: true
})
gsap.from(".page2-headding >h1 , .page4-headding >h1 , .page5-headding >h1",{
    y: -50,
    opacity: 0,
    duration: 0.5,
    // delay: 0.5,
    scale: 0.2,
    scrollTrigger:{
        trigger: ".page2-headding >h1, .page4-headding >h1 , .page5-headding >h1",
        scroll:"body",
        scrub: 1
    } 
})
gsap.from(".page3-heading >h1 ,.page3-left-top >h1 ,.page3-left-top >p ,.page3-right-top >h1 ,.page3-right-top >p ,.page3-left-buttom >h1, .page3-left-buttom >p ,.page3-right-buttom >h1 ,.page3-right-buttom >p",{
    y: -50,
    opacity: 0,
    duration: 0.5,
    // delay: 0.,
    scale: 0.2,
    stagger: 0.2,
    
    scrollTrigger:{
        trigger: ".page3-heading >h1",
        scroll:"body",
        scrub:1
    } 
})
gsap.from(".page4-left",{
    opacity: 0,
    repeat: -1,
    duration: 1,
    yoyo:true
    
})
var arrowscroll = document.querySelector(".scroller")

arrowscroll.addEventListener("click",function(){
    window.scrollTo(0 , 0)
    
})

gsap.from(".scroller",{
    opacity: 0,
    scrollTrigger:{
        trigger: "#page2",
        scroll:"body",
        scrub:1
    } 
})
