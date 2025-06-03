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

 ScrollReveal().reveal(".header__content h1",{
    ...scrollRevealOpition,
})
 ScrollReveal().reveal("header form ",{
    ...scrollRevealOpition,
    
    delay:500,
})
ScrollReveal().reveal(".servico__card",{
    ...scrollRevealOpition,
    interval:500,
})

ScrollReveal().reveal(".experencia__content .section__header",{
    ...scrollRevealOpition,
})
ScrollReveal().reveal(".experencia__content p ",{
    ...scrollRevealOpition,
    delay:500,
})

ScrollReveal().reveal(".experencia__btn",{
    ...scrollRevealOpition,
    delay:1000,
})

ScrollReveal().reveal(".experencia__stats ",{
    ...scrollRevealOpition,
    delay:1500,
})

/**SWIPER */

const swiper = new Swiper(".swiper", {
    slidesPerView: 2,
    spaceBetween:20,
    loop:true,
})

scrollReveal().reveal(".subriscreve .section__header",{
    ...scrollRevealOpition,
})
scrollReveal().reveal(".subriscreve form",{
    ...scrollRevealOpition,
    delay:500,
})