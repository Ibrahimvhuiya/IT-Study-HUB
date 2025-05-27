// ✅ Sample correct answers for auto-checking
const correctAnswers = {
  html: {
    1: '<!DOCTYPE html>\n<html>\n<head>\n<title>Page</title>\n</head>\n<body>\n<h1>Hello</h1>\n<p>This is a paragraph.</p>\n<img src="image.jpg" alt="Image">\n</body>\n</html>'
  },
  css: {
    1: 'nav {\n  display: flex;\n  justify-content: space-between;\n}'
  },
  js: {
    1: 'function maxOfThree(a, b, c) {\n  return Math.max(a, b, c);\n}'
  },
  python: {
    1: 'def is_prime(n):\n  if n <= 1:\n    return False\n  for i in range(2, int(n**0.5)+1):\n    if n % i == 0:\n      return False\n  return True'
  }
};

// ✅ Check and evaluate problem answer
function solveProblem(course) {
  const textarea = document.getElementById(`${course}-code`);
  const result = document.getElementById(`${course}-result`);
  const userAnswer = textarea.value.trim();

  const correctAnswer = correctAnswers[course][1].trim();

  if (normalize(userAnswer) === normalize(correctAnswer)) {
    updateProgress(course, true);
    result.textContent = "✅ Correct Answer! Progress Increased.";
    result.style.color = "green";
  } else {
    updateProgress(course, false);
    result.textContent = "❌ Incorrect Answer! Progress Decreased.";
    result.style.color = "red";
  }
}

// ✅ Normalize function to ignore spacing
function normalize(text) {
  return text.replace(/\s+/g, ' ').toLowerCase();
}

// ✅ Update course progress in localStorage
function updateProgress(course, increase = true) {
  const key = `${course}_progress`;
  let progress = parseInt(localStorage.getItem(key)) || 0;

  if (increase) {
    progress = Math.min(progress + 5, 100);
  } else {
    progress = Math.max(progress - 5, 0);
  }

  localStorage.setItem(key, progress);
}

// ✅ Quit clears the text box
function quitProblem(course) {
  const textarea = document.getElementById(`${course}-code`);
  const result = document.getElementById(`${course}-result`);
  textarea.value = '';
  result.textContent = '❌ You quit the problem.';
  result.style.color = 'orange';
}

// ✅ Set initial progress on load
document.addEventListener("DOMContentLoaded", function () {
  const courses = ['html', 'css', 'js', 'python'];
  courses.forEach(course => {
    const progress = parseInt(localStorage.getItem(`${course}_progress`)) || 0;
    const fill = document.getElementById(`${course}-progress`);
    if (fill) {
      fill.style.width = `${progress}%`;
      fill.textContent = `${progress}%`;
    }
  });
});
