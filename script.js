// Wait until the webpage has completely loaded
document.addEventListener("DOMContentLoaded", function () {

    // Find the main heading
    const heading = document.querySelector(".hero h1");

    // Save the original text
    const originalText = heading.textContent;

    // Clear the heading
    heading.textContent = "";

    // Create a typing effect
    let index = 0;

    function typeText() {
        if (index < originalText.length) {
            heading.textContent += originalText.charAt(index);
            index++;

            setTimeout(typeText, 100);
        }
    }

    typeText();

});