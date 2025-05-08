const menuBtn = document.getElementById("menu-btn")
const navlinks = document.getElementById("nav-links")
const menuBtnIcon = menuBtn.querySelector("line")

menuBtn.addEventListener("click", (e) => {

    navlinks.classList.toggle("open")

    const isOpen = navlinks.classList.contains("open");
    menuBtnIcon.setAttribute(
        "class",
        isOpen ? "" : ""
    )
    
});

navlinks.addEventListener("click", (e) =>{
    navlinks.classList.remove("open");
})