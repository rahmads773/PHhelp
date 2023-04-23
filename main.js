
// fade
const fade = (ele) => { 
    ele.classList.toggle("active")
 }

// toggle menu
let menu = document.querySelector(".menu i")
let overlay = document.querySelector(".overlay")
menu.addEventListener("click",(eo) => { 
    let list = `
    <i class="fa-solid fa-xmark"></i>
    <ul>
    <li><a href="index.html" class="link">Home</a></li>
    <li><a href="#about" class="link">About</a></li>
    <li><a href="#notes" class="link">Notes</a></li>
    <li>
    <a href="#bac">Bac</a>
    <img src="ph design/new.png" alt="new" class="new">
  </li>
    <li><a href="#contact" class="link">Contact</a></li>
</ul>
<i class="fa-solid fa-pills"></i>
    `
      let listSecond = `
    <i class="fa-solid fa-xmark"></i>
    <ul>
    <li><a href="index.html" class="link">Home</a></li>
    <li><a href="index.html#about" class="link">About</a></li>
    <li><a href="index.html#notes" class="link">Notes</a></li>
    <li>
    <a href="index.html#bac">Bac</a>
    <img src="ph design/new.png" alt="new" class="new">
  </li>
    <li><a href="index.html#contact" class="link">Contact</a></li>
</ul>
<i class="fa-solid fa-pills"></i>
    `
    if(overlay.classList.contains("secondary")){
        overlay.innerHTML = listSecond
    }else{
        overlay.innerHTML = list
    }
    
    overlay.classList.add("active")

 })

 overlay.addEventListener("click",(eo) => { 
    overlay.classList.remove("active")
  })



//   toggle list

let mainItems =  document.querySelectorAll("main .list .main-item")
let courseLists =  document.querySelectorAll("main .list .main-item .course-list")
let arrows =  document.querySelectorAll("main .list .main-item i")

mainItems.forEach((item) => {
    item.addEventListener("click",(eo) => {     
let ele = eo.target.parentElement.getElementsByClassName("course-list")[0]
    ele.classList.toggle("active")
let arrow = eo.target.parentElement.querySelector("i")

    if(ele.classList.contains("active")){
        ele.style.height = `${ele.scrollHeight}px`
        arrow.style.transform = "rotate(180deg)"
        
    }else{
        ele.style.height = `0`
        arrow.style.transform = "rotate(0)"
    }
    

     })
});



// onload animation

let header =  document.querySelector("header")
let mainTitle = document.querySelector("main .main-title")
let mainItem =  document.querySelectorAll("main .list .main-item")
let loader =  document.querySelector(".loader")

for (let i = 0; i < mainItem.length; i++) {
    mainItem[i].style.transitionDelay += `${i / 10}s`
    
}

window.onload = (eo) => { 
    loader.classList.add("active")
    header.style.transform =  "translate(0)"
    mainTitle.style.opacity = "1"
    mainTitle.style.transform = `translate(0)`
    mainItem.forEach(ele => {
        ele.style.opacity ="1"
        ele.style.transform = "translate(0)"
        
    });
   
    }



