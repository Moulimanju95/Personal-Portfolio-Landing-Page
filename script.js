// Function to handle project button clicks and open the project in a new tab
function viewProject(url) {
  window.open(url, "_blank");
}

// Handling form submission
document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submission behavior

    // Grab the values from the form fields
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Display a thank you message after form submission
    const formMessage = document.getElementById("form-message");
    formMessage.textContent = `Thank you for reaching out, ${name}! We'll get back to you soon.`;
    formMessage.style.color = "green";

    // Clear form fields after submission
    document.getElementById("contact-form").reset();
  });

// JavaScript for Hamburger Menu Toggle
document.getElementById("hamburger").addEventListener("click", function () {
  const navLinks = document.getElementById("nav-links");
  navLinks.classList.toggle("hidden");
});


// Dynamically Populate Skills List
const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'];

const skillsList = document.getElementById('skills-list');
skills.forEach(skill => {
    const listItem = document.createElement('li');
    listItem.textContent = skill;
    skillsList.appendChild(listItem);
});
