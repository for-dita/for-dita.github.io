const beginButton = document.getElementById("beginButton");

beginButton.addEventListener("click", function () {
    document.getElementById("memories").scrollIntoView({
        behavior: "smooth"
    });
});
