document.addEventListener("DOMContentLoaded", function () {
  // Subject Filter Functionality
  const subjectFilter = document.getElementById("subject-filter");

  subjectFilter.addEventListener("change", function () {
    const selectedSubject = this.value;

    // This part would be more dynamic if you had multiple class-cards with data-subject attributes.
    const allClasses = document.querySelectorAll(".class-card");

    allClasses.forEach((classCard) => {
      const subject = classCard.getAttribute("data-subject");

      if (selectedSubject === "all" || subject === selectedSubject) {
        classCard.style.display = "block";
      } else {
        classCard.style.display = "none";
      }
    });
  });

  // Register Form Submission (optional enhancement)
  const form = document.querySelector("form");
  form.addEventListener("submit", function (e) {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

    if (name === "" || email === "") {
      e.preventDefault();
      alert("Please fill in all required fields.");
    } else {
      alert("You have successfully registered for the class!");
    }
  });
});
