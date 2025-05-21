document.addEventListener("DOMContentLoaded", function () {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
        // Full name থেকে প্রথম আর শেষ নাম বের করে ফিল্ডে বসানো
        const fullName = user.name || "";
        const nameParts = fullName.split(" ");
        const firstName = nameParts[0] || "";
        const lastName = nameParts.slice(1).join(" ") || "";

        document.getElementById("firstName").value = firstName;
        document.getElementById("lastName").value = lastName;
        document.getElementById("email").value = user.email || "";

        // Profile picture সেট করা
        if (user.picture) {
            const previewImage = document.getElementById("previewImage");
            const defaultImage = document.getElementById("defaultImage");

            previewImage.src = user.picture;
            previewImage.style.display = "block";

            if (defaultImage) {
                defaultImage.style.display = "none";
            }
        }
    } else {
        // যদি user info না থাকে, তাহলে index.html এ পাঠিয়ে দাও
        window.location.href = "index.html";
    }
});document.addEventListener("DOMContentLoaded", function () {
  // Dynamic placeholder suggestions for the search input
  const searchInput = document.querySelector(".hero-search input");
  const suggestions = [
    "Search courses, topics, instructors...",
    "Try 'Python for Beginners'",
    "Try 'Live JavaScript Class'",
    "Try 'Cybersecurity Essentials'",
    "Try 'React Projects'"
  ];

  let suggestionIndex = 0;
  setInterval(() => {
    suggestionIndex = (suggestionIndex + 1) % suggestions.length;
    searchInput.setAttribute("placeholder", suggestions[suggestionIndex]);
  }, 3000);

  // Search button validation
  const searchButton = document.querySelector(".hero-search button");
  searchButton.addEventListener("click", function () {
    const query = searchInput.value.trim();
    if (!query) {
      alert("Please enter a search term.");
    } else {
      // Replace with real search behavior later
      alert(`Searching for: ${query}`);
    }
  });

  // Smooth scroll to featured categories when "Browse Courses" is clicked
  const browseLink = document.querySelector(".hero-buttons a:first-child");
  const categoriesSection = document.querySelector(".featured-categories");

  browseLink.addEventListener("click", function (e) {
    e.preventDefault();
    categoriesSection.scrollIntoView({ behavior: "smooth" });
  });

  // Optional: Add hover effect to hero buttons
  const heroButtons = document.querySelectorAll(".hero-buttons a");
  heroButtons.forEach(button => {
    button.addEventListener("mouseover", () => {
      button.style.opacity = "0.8";
    });
    button.addEventListener("mouseout", () => {
      button.style.opacity = "1";
    });
  });
});

