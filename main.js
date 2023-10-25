window.addEventListener("scroll", function() {
    const header = document.querySelector(".headerOnStart");
    
    if (window.scrollY > 0) {
        header.classList.add("fixed-header");
    } else {
        header.classList.remove("fixed-header");
    }
});
