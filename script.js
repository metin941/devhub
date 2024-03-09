// Smooth scrolling with flashing effect
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        window.scrollTo({
            top: target.offsetTop,
            behavior: 'smooth'
        });

        // Add flashing class to the target section after scrolling
        setTimeout(() => {
            target.classList.add('flashing');
            setTimeout(() => {
                // Remove flashing class after 500ms
                target.classList.remove('flashing');
            }, 400); // Adjust the time as needed
        }, 400); // Adjust the time as needed
    });
});

window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    const navbar = document.getElementById('navbar');
    const sticky = header.offsetTop;

    if (window.pageYOffset > sticky) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }

    if (window.pageYOffset > 50) {
        navbar.style.top = '0';
    } else {
        navbar.style.top = '20px'; // Adjust this value to your liking
    }
});

function selectOption(optionText) {
    var dropdownButton = document.getElementById("dropdown-button");
    var dropdownContent = document.getElementById("dropdown-content");

    // Update the text of the button to the selected option
    dropdownButton.textContent = optionText;

    // Hide the dropdown content
    dropdownContent.style.display = "none";
}

function toggleDropdown() {
    var dropdownContent = document.getElementById("dropdown-content");
    if (dropdownContent.style.display === "none" || dropdownContent.style.display === "") {
        dropdownContent.style.display = "block";
    } else {
        dropdownContent.style.display = "none";
    }
}
// Get current year
var currentYear = new Date().getFullYear();
// Update footer date
document.getElementById("footer-date").innerHTML = "&copy; " + currentYear + " Metin Hasanov";
