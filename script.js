document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const target = e.target.getAttribute("href");
            window.location.href = target;
        });
    });

    const loginForm = document.querySelector("#login-form");
    const registerForm = document.querySelector("#register-form");
    const feedbackForm = document.querySelector("#feedback-form");

    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const uname = document.querySelector("#uname").value;
            const pass = document.querySelector("#pass").value;
            console.log(`Username: ${uname}, Password: ${pass}`);
            // Add logic for login form submission
        });
    }

    if (registerForm) {
        registerForm.addEventListener("submit", async (e) => {
            e.preventDefault();
            const formData = {
                name: document.querySelector("#name").value,
                email: document.querySelector("#email").value,
                password: document.querySelector("#password").value
            };
            console.log("Submitting form data:", formData);
            try {
                const response = await fetch("http://localhost:3001/users/register", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(formData)
                });
                const result = await response.json();
                console.log("Form data submitted successfully!", result);
                alert(result.message || "Registration successful");
            } catch (error) {
                console.error("Error submitting form:", error);
                alert("Error submitting form: " + error.message);
            }
        });
    }

    if (feedbackForm) {
        feedbackForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const formData = {
                name: document.querySelector("[name='name']").value,
                age: document.querySelector("[name='age']").value,
                rollno: document.querySelector("[name='rollno']").value,
                class: document.querySelector("[name='class']").value,
                feedback: document.querySelector("[name='feedback']").value
            };
            console.log("Feedback submitted:", formData);
            // Add logic to handle feedback form submission
        });
    }
});
