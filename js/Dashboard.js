// Toggle menu
function toggleMenu() {
  const nav = document.getElementById("mobileMenu");
  nav.classList.toggle("show");
}

// Load user info from localStorage
const user = JSON.parse(localStorage.getItem("user"));

if (!user) {
  window.location.href = "login.html";
} else {
  const infoDiv = document.getElementById("userInfo");
  infoDiv.innerHTML = `
    <img src="${user.picture}" class="user-img" alt="User Picture" />
    <h3>👋 Hello, ${user.name}</h3>
    <p>${user.email}</p>
  `;
}

// Logout
function logout() {
  localStorage.removeItem("user");
  window.location.href = "index.html";
}
