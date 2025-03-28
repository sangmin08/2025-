const splitAreas = document.querySelectorAll(".split-area");
const backgroundContainer = document.querySelector("#background-container");
const titleElements = document.querySelectorAll(".title");
const arrowElements = document.querySelectorAll(".arrow");
const motos = document.querySelectorAll(".motos div");

splitAreas.forEach(area => {
    area.addEventListener("mouseover", () => {
        titleElements.forEach(t => t.classList.add("hide"));
        arrowElements.forEach(r => r.classList.remove("show"));
        const selectedTitle = area.querySelector(".title");
        if(selectedTitle) selectedTitle.classList.remove("hide");
        const selectedArrow = area.querySelector(".arrow");
        if(selectedArrow) selectedArrow.classList.add("show");
        const bgImage = area.getAttribute("data-image");
        backgroundContainer.style.backgroundImage = `url(${bgImage})`;
        splitAreas.forEach(a =>a.classList.add('fade-out'));
        backgroundContainer.classList.add('fade-in');
        const areaNo = area.getAttribute("data-no");
        const selectedMoto = document.querySelector(`.motos .moto-${areaNo}`);
        if(selectedMoto) selectedMoto.classList.add("active");

    });

    area.addEventListener("mouseleave", () => {
        titleElements.forEach(t => t.classList.remove("hide"));
        arrowElements.forEach(r => r.classList.remove("show"));
        splitAreas.forEach(a => a.classList.remove("fade-out"));
        motos.forEach(m => m.classList.remove("active"));
        backgroundContainer.classList.remove('fade-in');
    });
});
