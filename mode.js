// dark mode

let moon =  document.querySelector(".moon")
let sun =  document.querySelector(".sun")
let body = document.querySelector("body")
moon.addEventListener("click", (eo) => {
    mode("dark");
    localStorage.setItem("theme", "dark");
  });
  
  sun.addEventListener("click", (eo) => {
    mode("light");
    localStorage.setItem("theme", "light");
  });



  if (document.body.classList.contains("dark")) {
    mode(localStorage.getItem("theme", "dark"));
  } else {
    mode(localStorage.getItem("theme", "light"));
  }
  onload = (eo) => {
    mode(localStorage.getItem("theme"));
  };



function mode(ld) {
    if (ld === "dark") {
      body.classList.add("dark");
      moon.style.display = "none"
      sun.style.display ="block"
    } else if (ld === "light") {
      body.classList.remove("dark");
      moon.style.display = "block"
      sun.style.display ="none"
    }
  }
