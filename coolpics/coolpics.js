const menuButton = document.querySelector(".menu-btn");
function toggleMenu() {
    const menu = document.querySelector(".nav");
    menu.classList.toggle("hide");
}

menuButton.addEventListener("click", toggleMenu);

const body = document.body;
const gallery = document.querySelectorAll(".gallery img");

function viewerTemplate(pic, alt) {
    return `<div class="viewer">
        <button class="close-viewer">X</button>
        <img src="${pic}" alt="${alt}">
    </div>`;
}

function viewHandler(event) {
    const clickedElement = event.target;
    const fullImageSrc = clickedElement.src.replace("-sm.jpeg", "-full.jpeg");
    const altText = clickedElement.alt;

    const viewerHTML = viewerTemplate(fullImageSrc, altText);
    body.insertAdjacentHTML("beforeend", viewerHTML); // Add to the end of the body

    const viewer = document.querySelector(".viewer");
    const viewerImg = viewer.querySelector("img");
    const closeButton = viewer.querySelector(".close-viewer");

    viewerImg.src = fullImageSrc;
    viewer.style.display = "flex";

    closeButton.addEventListener("click", closeViewer);

    // Prevent interaction with the background:
    body.style.overflow = "hidden"; // Prevent scrolling
    body.style.pointerEvents = "none"; // Disable clicks on background elements
    viewer.style.pointerEvents = "auto"; // Re-enable clicks inside the viewer

}

function closeViewer() {
    const viewer = document.querySelector(".viewer");
    viewer.remove();

    // Re-enable interaction with the background:
    body.style.overflow = "auto";
    body.style.pointerEvents = "auto";
}

gallery.forEach(image => {
    image.addEventListener("click", viewHandler);
});