// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  
  form.addEventListener("submit", function (e) {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    // Basic validation
    if (!name || !email || !message) {
      alert("Please fill in all required fields.");
      e.preventDefault(); // Stop the form from submitting
      return;
    }

    // Optional: Simple email validation
    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      e.preventDefault();
      return;
    }

    // Confirmation message
    alert("Thank you! Your message has been prepared to send.");
  });

  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
});
