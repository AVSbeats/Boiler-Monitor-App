const correctUsername = "avs";
const correctPassword = "avs";

document.querySelector("#login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // prevent the form from submitting
    
    const enteredUsername = document.querySelector("#username").value;
    const enteredPassword = document.querySelector("#password").value;
    
    if (enteredUsername === correctUsername && enteredPassword === correctPassword) {
      // if the entered details match the correct login details, log the user in
      alert("Login successful!");
      // redirect the user to the app's main page or dashboard
      window.location.href = "dashboard.html"; 
    } else {
      // if the entered details don't match, display an error message
      alert("Incorrect username or password. Please try again.");
    }
  });