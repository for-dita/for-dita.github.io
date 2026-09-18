const beginButton = document.getElementById("beginButton");

beginButton.addEventListener("click", function () {
    document.getElementById("letter").scrollIntoView({
        behavior: "smooth"
    });
});


const photoButton = document.getElementById("photoButton");
const photoOverlay = document.getElementById("photoOverlay");
const closePhoto = document.querySelector(".close-photo");


photoButton.addEventListener("click", function () {
    photoOverlay.classList.add("active");
});


closePhoto.addEventListener("click", function () {
    photoOverlay.classList.remove("active");
});


photoOverlay.addEventListener("click", function (event) {
    if (event.target === photoOverlay) {
        photoOverlay.classList.remove("active");
    }
});
