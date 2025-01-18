const themeSelector = document.querySelector('#mode-selector');
function changeTheme() {
    // check to see what the current value of our select is.
    // The current value is conveniently found in themeSelector.value!
    if (themeSelector.value === "Dark") { // if the value is dark then:
        document.body.classList.add("Dark"); // add the dark class to the body
        let newLogo = document.querySelector('.logo'); // change the source of the logo img to point to the white logo.
        newLogo.src = "byui-logo_white.png";
    } else { // otherwise
        document.body.classList.remove("Dark"); // remove the dark class
        document.querySelector('.logo').src = "byui-logo_blue.webp"; // make sure the logo src is the blue logo.
    }
}
// add an event listener to the themeSelector element here.
// Use the changeTheme function as the event handler function.
themeSelector.addEventListener('change', changeTheme);