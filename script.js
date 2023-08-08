// Menu
const navMenu = document.querySelector(".nav-menu")
const hamburger = document.querySelector(".hamburger")

hamburger.addEventListener("click", () =>{    
    navMenu.classList.toggle("active");
   hamburger.classList.toggle("active");
})

const image1 = document.querySelector(".image1")

image1.addEventListener("mouseenter", () => {
    image1.style.transform = "scale(1.1)"
})

image1.addEventListener("mouseleave", () => {
    image1.style.transform = "scale(1)"
})

const image2 = document.querySelector(".image2")

image2.addEventListener("mouseenter", () => {
    image2.style.transform = "scale(1.1)"
})

image2.addEventListener("mouseleave", () => {
    image2.style.transform = "scale(1)"
})

const image3 = document.querySelector(".image3")

image3.addEventListener("mouseenter", () => {
    image3.style.transform = "scale(1.1)"
})

image3.addEventListener("mouseleave", () => {
    image3.style.transform = "scale(1)"
})

// Ověření e-mailu
const username = document.querySelector(".fullName")
const text = document.querySelector(".message")
const email1 = document.querySelector(".email1")
const email2 = document.querySelector(".email2")
const paragraphText = document.querySelector(".result-text")
const submit = document.querySelector("odeslat")

email1.addEventListener("input", () => {
    const email1Value = email1.value
    const email2Value = email2.value

    if (email1Value == email2Value) {
        paragraphText.textContent = "Emaily jsou shodné"
    } else {
        paragraphText.textContent = "Emaily nejsou stejné"
    }
})

email2.addEventListener("input", () => {
    const email1Value = email1.value
    const email2Value = email2.value

    if (email1Value == email2Value) {
        paragraphText.textContent = "Emaily jsou shodné"
    } else {
        paragraphText.textContent = "Emaily nejsou stejné"
    }
})

// scollování
window.addEventListener("scroll", function(){
    let scrolled = window.scrollY
    let scrollable = document.documentElement.scrollHeight - this.window.innerHeight

        if(Math.ceil(scrolled) === scrollable){
            let toTop = document.querySelector(".top-page")
            toTop.style.display = "block"

            toTop.addEventListener("click", function (){
                toTop.style.display = "none"
            })
        }
})
// Dark/light

var icon = document.getElementById("icon");
icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
      icon.src ="img/sun.png";
    }else{
        icon.src = "img/mesic.png";  
    }   
}
