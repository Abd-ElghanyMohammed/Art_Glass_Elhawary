import { auth } from "./config.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

// Toggle between forms
window.showSignup = function () {
  document.getElementById("loginForm").style.display = "none";
  document.getElementById("signupForm").style.display = "block";
};

window.showLogin = function () {
  document.getElementById("signupForm").style.display = "none";
  document.getElementById("loginForm").style.display = "block";
};

// Handle Sign Up
document.getElementById("signupFormData").addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("signupName").value.trim();
  const email = document.getElementById("signupEmail").value.trim();
  const password = document.getElementById("signupPassword").value;
  const confirmPassword = document.getElementById("signupConfirmPassword").value;

  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(userCredential.user, { displayName: name });

    alert("✅ Account created successfully!");
    console.log("User signed up:", userCredential.user);

    // Redirect or show login form
    showLogin();
  } catch (error) {
    alert("❌ " + error.message);
    console.error(error);
  }
});

// Handle Login
document.getElementById("loginFormData").addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value;

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);

    alert("✅ Welcome back " + (userCredential.user.displayName || "User") + "!");
    console.log("User signed in:", userCredential.user);

    // Example: redirect after login
    window.location.href = "index.html";
  } catch (error) {
    alert("❌ " + error.message);
    console.error(error);
  }
});
