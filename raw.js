const hambarger=document.querySelector(".hambarger")
const navMenu=document.querySelector(".nav-menu")
hambarger.addEventListener("click",()=>{
    hambarger.classList.toggle("active")
    navMenu.classList.toggle("active")
})
document.querySelectorAll(".nav-links").forEach(n=>n.addEventListener("click",()=>{
    hambarger.classList.remove("active")
    navMenu.classList.remove("active")
}))