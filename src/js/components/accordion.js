const accordionContent = document.querySelectorAll(".accordion-content");

accordionContent.forEach(accordionContent => {
    accordionContent.addEventListener("click", () => {
        accordionContent.classList.toggle("active");
    })
})