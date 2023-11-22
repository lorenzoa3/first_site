/*function revealGif() {
    // Get the hidden GIF element
    var hiddenGif = document.getElementById("hiddenGif");

    // Toggle the visibility of the hidden GIF
    if (hiddenGif.style.display === "none") {
        hiddenGif.style.display = "block";
    } else {
        hiddenGif.style.display = "none";
    }
}*/

function revealGif() {
    // Get the clickable icon and hidden GIF elements
    var clickableIcon = document.getElementById("clickableIcon");
    var hiddenGif = document.getElementById("hiddenGif");

    // Toggle the visibility by changing the 'display' property
    clickableIcon.style.display = "none";
    hiddenGif.style.display = "block";
}