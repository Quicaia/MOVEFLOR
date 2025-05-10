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

//SCROLL

const scrollRevealOpition = {
    distance: "50px",
    origin:"bottom",
    duration: 1000,
}

scrollReveal().reveal(".header__content h1",{
    ...scrollRevealOpition,
})
scrollReveal().reveal("header form ",{
    ...scrollRevealOpition,
    delay:500,
})
scrollReveal().reveal(".servico__card",{
    ...scrollRevealOpition,
    interval:500,
})

scrollReveal().reveal(".experencia__content .section__header",{
    ...scrollRevealOpition,
})
scrollReveal().reveal(".experencia__content p ",{
    ...scrollRevealOpition,
    delay:500,
})

scrollReveal().reveal(".experencia__btn",{
    ...scrollRevealOpition,
    delay:1000,
})

scrollReveal().reveal(".experencia__stats ",{
    ...scrollRevealOpition,
    delay:1500,
})

/**SWIPER */

const swiper = new Swiper('.swiper', {
    slidesPerView: 2,
    spaceBetween:20,
    loop:true,
})