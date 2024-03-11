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
    const section_about = document.getElementById('about');
    const section_education = document.getElementById('education');
    const section_experience = document.getElementById('experience');
    const section_skills = document.getElementById('skills');
    const section_projects = document.getElementById('projects');
    const sticky = header.offsetTop;

    if (window.pageYOffset > sticky) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }

    // Adjusting the padding of the section when the header becomes sticky
    if (window.pageYOffset > 50) {
        header.style.top = '0px';
        section_about.style.paddingBlock = '60px';
        section_education.style.paddingBlock = '60px';
        section_experience.style.paddingBlock = '60px';
        section_skills.style.paddingBlock = '60px';
        section_projects.style.paddingBlock = '60px';
    } else {
        header.style.top = '0px'; // Adjust this value to your liking
        section_about.style.paddingBlock = '60px';
        section_education.style.paddingBlock = '60px';
        section_experience.style.paddingBlock = '60px';
        section_skills.style.paddingBlock = '60px';
        section_projects.style.paddingBlock = '60px';
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
