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
const body = document.querySelector("body"),
  nav = document.querySelector("nav"),
  modeToggle = document.querySelector(".dark-light"),
  searchToggle = document.querySelector(".searchToggle"),
  sidebarOpen = document.querySelector(".sidebarOpen"),
  siderbarClose = document.querySelector(".siderbarClose");
let getMode = localStorage.getItem("mode");
if (getMode && getMode === "dark-mode") {
  body.classList.add("dark");
}
// js code to toggle dark and light mode
modeToggle.addEventListener("click", () => {
  modeToggle.classList.toggle("active");
  body.classList.toggle("dark");
  // js code to keep user selected mode even page refresh or file reopen
  if (!body.classList.contains("dark")) {
    localStorage.setItem("mode", "light-mode");
  } else {
    localStorage.setItem("mode", "dark-mode");
  }
});
// js code to toggle search box
searchToggle.addEventListener("click", () => {
  searchToggle.classList.toggle("active");
});

//   js code to toggle sidebar
sidebarOpen.addEventListener("click", () => {
  nav.classList.add("active");
});
body.addEventListener("click", (e) => {
  let clickedElm = e.target;
  if (
    !clickedElm.classList.contains("sidebarOpen") &&
    !clickedElm.classList.contains("menu")
  ) {
    nav.classList.remove("active");
  }
});

// Dynamically Populate Skills List
const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Node.js",
  "MongoDB",
  "SQL",
];

const skillsList = document.getElementById("skills-list");
skills.forEach((skill) => {
  const listItem = document.createElement("li");
  listItem.textContent = skill;
  skillsList.appendChild(listItem);
});
