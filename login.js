document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("form").addEventListener("submit", function (event) {
        event.preventDefault();

        const email = document.querySelector("input[type='email']").value.trim();
        const password = document.querySelector("input[type='password']").value;

        const users = JSON.parse(localStorage.getItem("users")) || [];

        const validUser = users.find(user => user.email === email && user.password === password);

        if (validUser) {
            sessionStorage.setItem("loggedInUser", JSON.stringify(validUser));
            alert("Login Successful!");
            window.location.href = "index.html";
        } else {
            alert("Invalid email or password.");
        }
    });
});
