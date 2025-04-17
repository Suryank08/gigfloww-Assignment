const form = document.getElementById("signupForm");
const thankYouMsg = document.getElementById("thankYouMsg");

function isValidName(input) {
  const regex = /^[a-zA-Z\s]+$/;
  return regex.test(input);
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const skill = form.skill.value;
  const portfolio = form.portfolio.value.trim();

  if (name.length < 2) {
    alert("Name must be at least 2 characters.");
    return;
  }
  if (!isValidName(name)) {
    alert("Please enter a valid name.");
    return;
  }
  if (!email || !email.includes('@') || !email.includes('.')) {
    alert("Please enter a valid email.");
    return;
  }
  if (!skill) {
    alert("Please select a skill category.");
    return;
  }
  if (!portfolio.startsWith("http")) {
    alert("Please enter a valid portfolio URL.");
    return;
  }

  thankYouMsg.classList.add("show-toast");

  setTimeout(() => {
    console.log("submitted");
    thankYouMsg.classList.remove("show-toast");
  }, 4000);
  form.reset();
});
