document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("form").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission

        // Get user input
        const email = document.querySelector("input[type='email']").value;
        const password = document.querySelector("input[type='password']").value;

        // Allowed credentials
        const validUsers = [
            { email: "imranvub45@gmail.com", password: "imran123" },
            { email: "ganesh@gmail.com", password: "ganesh123" },
            { email: "vishnu@gmail.com", password: "vishnu123" },
            { email: "bhoomika@gmail.com", password: "bhoomika123" }
        ];

        // Check if credentials match any of the valid users
        const isValid = validUsers.some(user => user.email === email && user.password === password);

        if (isValid) {
            alert("Login Successful!");
            window.location.href = "dashboard.html"; // Redirect to dashboard
        } else {
            alert("Invalid email or password. Please try again.");
        }
    });
});
