const menuBtn = document.getElementById("menu-btn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");
});

window.addEventListener("scroll", () => {

    const reveals = document.querySelectorAll(
        ".card,.collection-card,.product-card,.feature,.testimonial"
    );

    reveals.forEach(item => {

        const top = item.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){
            item.style.transform = "translateY(0)";
            item.style.opacity = "1";
        }

    });

});

document.querySelectorAll(
".card,.collection-card,.product-card,.feature,.testimonial"
).forEach(item => {

    item.style.opacity = "0";
    item.style.transform = "translateY(50px)";
    item.style.transition = "0.6s";

});