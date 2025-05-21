document.addEventListener("DOMContentLoaded", () => {
  // Prefill email if remembered
  const rememberedEmail = localStorage.getItem("rememberedEmail");
  if (rememberedEmail) {
    document.getElementById("gmail").value = rememberedEmail;
    document.getElementById("rememberMe").checked = true;
  }
});

function loginUser(event) {
  event.preventDefault();

  const email = document.getElementById("gmail").value.trim();
  const password = document.getElementById("password").value.trim();
  const remember = document.getElementById("rememberMe").checked;

  if (!email || !password) {
    alert("Please fill in both email and password.");
    return;
  }

  if (remember) {
    localStorage.setItem("rememberedEmail", email);
  } else {
    localStorage.removeItem("rememberedEmail");
  }

  // Simulate login validation (replace this with real authentication)
  if (email === "test@example.com" && password === "123456") {
    alert("Login successful!");
    window.location.href = "index.html"; // redirect to dashboard
  } else {
    alert("Invalid email or password.");
  }
}

function signInWithFacebook() {
  alert("Facebook login not yet implemented.");
  // Redirect to Facebook OAuth or show a popup if implemented
}

function signInWithGoogle() {
  alert("Google login via button is not connected yet.");
  // Normally, you'd use Google Identity Services SDK here
}

function signInWithTwitter() {
  alert("Twitter login not yet implemented.");
  // Similar to other platforms, use OAuth
}

function forgotPassword() {
  const email = prompt("Enter your registered email:");
  if (email) {
    alert(`A password reset link has been sent to ${email} (simulated).`);
    // You can replace this with actual API logic to send reset link
  }
}
