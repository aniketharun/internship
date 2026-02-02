function showLogin() {
  switchForm("login");
}

function showSignup() {
  switchForm("signup");
}

function switchForm(type) {
  document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
  document.querySelectorAll(".form").forEach(f => f.classList.remove("active"));

  if (type === "login") {
    document.querySelectorAll(".tab")[0].classList.add("active");
    loginForm.classList.add("active");
  } else {
    document.querySelectorAll(".tab")[1].classList.add("active");
    signupForm.classList.add("active");
  }
}

/* Login */
loginForm.addEventListener("submit", async e => {
  e.preventDefault();
  loginStatus.innerText = "Signing in...";

  await simulateRequest();

  loginStatus.innerText = "Signed in successfully";
  loginStatus.style.color = "green";
  
  setTimeout(() => {
    window.location.href = "home.html";
  }, 1000);
});

/* Signup */
signupForm.addEventListener("submit", async e => {
  e.preventDefault();
  signupStatus.innerText = "Creating account...";

  await simulateRequest();

  signupStatus.innerText = "Account created (UI only)";
  signupStatus.style.color = "green";
});

async function simulateRequest() {
  await new Promise(resolve => setTimeout(resolve, 1500));
}

function togglePassword(inputId, element) {
  const input = document.getElementById(inputId);

  if (input.type === "password") {
    input.type = "text";
    element.innerText = "Hide";
  } else {
    input.type = "password";
    element.innerText = "Show";
  }
}

