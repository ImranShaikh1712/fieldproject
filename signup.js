document.getElementById("signupForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const fullName = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    if (password.length < 6) {
        alert("Password must be at least 6 characters.");
        return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const exists = users.some(user => user.email === email);
    if (exists) {
        alert("User already exists. Please log in.");
        return;
    }

    users.push({ fullName, email, password });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Signup successful! Please login.");
    window.location.href = "login.html";
});
