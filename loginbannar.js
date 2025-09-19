document.addEventListener('DOMContentLoaded', () => {
  const loginBanner = document.getElementById('loginBanner');
  if (loginBanner) {
    loginBanner.addEventListener('click', () => {
      window.location.href = 'login-signup.html';
    });
  }
});
 // Form switching animation
        function showSignup() {
            const loginForm = document.getElementById('loginForm');
            const signupForm = document.getElementById('signupForm');

            loginForm.style.animation = 'fadeOut 0.3s ease-out';
            setTimeout(() => {
                loginForm.style.display = 'none';
                signupForm.style.display = 'block';
                signupForm.style.animation = 'fadeIn 0.5s ease-out';
            }, 300);
        }

        function showLogin() {
            const loginForm = document.getElementById('loginForm');
            const signupForm = document.getElementById('signupForm');

            signupForm.style.animation = 'fadeOut 0.3s ease-out';
            setTimeout(() => {
                signupForm.style.display = 'none';
                loginForm.style.display = 'block';
                loginForm.style.animation = 'fadeIn 0.5s ease-out';
            }, 300);
        }

        // Add fadeOut animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes fadeOut {
                from {
                    opacity: 1;
                    transform: translateY(0);
                }
                to {
                    opacity: 0;
                    transform: translateY(-20px);
                }
            }
        `;
        document.head.appendChild(style);

        // Form validation and submission
        document.getElementById('loginFormData').addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;

            if (email && password) {
                alert('Login successful! Welcome back.');
                // Here you would typically send the data to your server
            }
        });

        document.getElementById('signupFormData').addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('signupName').value;
            const email = document.getElementById('signupEmail').value;
            const password = document.getElementById('signupPassword').value;
            const confirmPassword = document.getElementById('signupConfirmPassword').value;
            const terms = document.getElementById('terms').checked;

            if (name && email && password && confirmPassword && terms) {
                if (password === confirmPassword) {
                    alert('Account created successfully! Welcome to ArtGlass.');
                    // Here you would typically send the data to your server
                } else {
                    alert('Passwords do not match.');
                }
            } else {
                alert('Please fill in all fields and agree to the terms.');
            }
        });

        // Add glass effect animation
        setInterval(() => {
            const glassEffect = document.querySelector('.glass-effect');
            if (glassEffect) {
                glassEffect.style.animation = 'none';
                setTimeout(() => {
                    glassEffect.style.animation = 'rotate 6s linear infinite';
                }, 10);
            }
        }, 6000);