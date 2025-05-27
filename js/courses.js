document.addEventListener("DOMContentLoaded", function () {
    const user = localStorage.getItem("user");
    if (!user) {
      alert("Please login to access the courses.");
      window.location.href = "Login.html"; // ব্যাক Login পেইজে রিডিরেক্ট করবে
    }
  });