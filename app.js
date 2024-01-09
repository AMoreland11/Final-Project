// function slideLeft() {
//     document.body.classlist += "slide-left"
// }



// function slideRight() {
//     document.body.classList += "slide-right"
// }

const scrollOffset = 30;
const sections = document.querySelectorAll(".animate-section");

const sectionInView = (section, offset = 0) => {
    const sectionTop = section.getBoundingClientRect().top;
    return (
        sectionTop <=
        (window.innerHeight || document.documentElement.clientHeight) - offset
    );
};


const handleScrollAnimation = () => {
    sections.forEach(section => {
        if (sectionInView(section, scrollOffset)) {
            section.classList.add("scrolled");
        } else {
            section.classList.remove("scrolled");
        }
    });
};

window.addEventListener("scroll", () => {
    handleScrollAnimation();
});



