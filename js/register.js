document.getElementById('registerForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;

  const user = {
    name,
    email,
    password,
    major: "Not set",
    bio: "Bio not written yet"
  };

  localStorage.setItem('user', JSON.stringify(user)); // ✅ single key for all user data
  alert("Registration successful!");
  window.location.href = 'courses.html';
});
