// animation on scroll and on load


let landingTexts =  [document.querySelector(".landing .text .h1-con span"),document.querySelector(".landing .text .p-con span")]
let landingTitles =  [document.querySelector(".landing .text .h1-con"),document.querySelector(".landing .text .p-con"),document.querySelector(".landing .text a")]
let landingImg =  document.querySelector(".landing .image img")
let title = document.querySelectorAll(".main-title")
let pills =  document.querySelectorAll(".main-title i")
let about =  document.querySelector(".about")
let aboutImg = document.querySelector(".about .image img")
let aboutSpan = document.querySelectorAll(".about .content .p-about span")
let aboutText = document.querySelector(".about .content")
let noteBoxes =  document.querySelectorAll(".notes .box")
let videos =  document.querySelectorAll(".videos .chan-box")

const come = (item) => { 
    item.style.transform = "translate(0)"
    item.style.opacity = "1"
 }


window.onload = (eo) => { 
    loader.classList.add("active")
setTimeout(() => { loader.style.display = "none" },6000)
header.style.transform =  "translate(0)"
if(landingTexts){
    landingTexts.forEach((item) => { 
        item.style.width = "0"
     })
}
 landingTitles.forEach((ele) => { 
    come(ele)
  })
 come(landingImg)
}

window.onscroll = () => { 


title.forEach((ele) => { 
    if(window.scrollY >= ele.parentElement.offsetTop - 500){
        come(ele)
            }
 })

if(window.scrollY >= about.offsetTop - 300){
come(aboutImg)
aboutSpan.forEach((ele) => { 
    ele.style.width = "0"
 })
come(aboutText)
}

noteBoxes.forEach(ele => {
    if(window.scrollY >= ele.offsetTop - 550){
   come(ele)
    }    
});

    videos.forEach(ele => {
    if(window.scrollY >= ele.offsetTop - 650){
   come(ele)

    }    
});
 }
