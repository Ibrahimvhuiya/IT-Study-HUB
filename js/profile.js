document.addEventListener("DOMContentLoaded", () => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) {
    alert("Please login first.");
    window.location.href = "login.html";
    return;
  }

  document.getElementById("profile-name").textContent = user.name || "John Doe";
  document.getElementById("profile-email").textContent = user.email || "john@example.com";
  document.getElementById("profile-major").textContent = user.major || "Computer Science";
  document.getElementById("profile-bio").textContent = user.bio || "Aspiring web developer passionate about building amazing applications.";
});
