const form = document.getElementById("registrationForm");
const message = document.getElementById("message");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  message.textContent = "";
  message.style.color = "red";

  // Name validation
  if (!/^[A-Za-z ]+$/.test(name)) {
    message.textContent = "Name must contain only letters and spaces.";
    return;
  }

  // Email validation
  if (!/^\S+@\S+\.\S+$/.test(email)) {
    message.textContent = "Invalid email format.";
    return;
  }

  // Phone number validation
  if (!/^\d{10}$/.test(phone)) {
    message.textContent = "Phone number must be exactly 10 digits.";
    return;
  }

  // Password validation
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

  if (!passwordRegex.test(password)) {
    message.textContent =
      "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character.";
    return;
  }

  // Password match
  if (password !== confirmPassword) {
    message.textContent = "Passwords do not match.";
    return;
  }

  // Success
  message.style.color = "green";
  message.textContent = "Registration successful!";
});
