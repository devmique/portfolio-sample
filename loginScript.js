// Default credentials
const defaultEmail = "mique@gmail.com";
const defaultPassword = "mique";

// Form handling
document.getElementById("loginForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form from refreshing the page

  // Get user input
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Validate credentials
  if (email === defaultEmail && password === defaultPassword) {
    
    window.location.href = "index.html"; 
  } else {
    alert("Invalid email or password. Please try again.");
  }
});