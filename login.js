document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("form").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission

        // Get user input
        const email = document.querySelector("input[type='email']").value;
        const password = document.querySelector("input[type='password']").value;

        // Required credentials (Replace with backend validation in real applications)
        const validEmail = "user@example.com";
        const validPassword = "password123";

        if (email === validEmail && password === validPassword) {
            alert("Login Successful!");
            window.location.href = "dashboard.html"; // Redirect to dashboard or homepage
        } else {
            alert("Invalid email or password. Please try again.");
        }
    });
});
