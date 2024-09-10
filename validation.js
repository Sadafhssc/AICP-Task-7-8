

// 1. Function to show login screen
function showLoginScreen() {
    hideAllScreens();
    document.getElementById('login-screen').classList.add('active');
}

// 2. Function to show sign up screen
function showSignUpScreen() {
    hideAllScreens();
    document.getElementById('signup-screen').classList.add('active');
}

// 3. Function to hide all screens
function hideAllScreens() {
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => screen.classList.remove('active'));
}

// 4. Function to handle login
function login() {
    const loginUsername = document.getElementById("login-username").value;
    const loginPassword = document.getElementById("login-password").value;
    const users = getUsersFromStorage();
    const user = users.find(user => user.username === loginUsername && user.password === loginPassword);

    if (user) {
        alert("Logged in successfully");
        if (user.role === "admin") {
            // Add admin view functionality here if needed
        } else if (user.role === "recruiter") {
            window.location.href = 'task7.html';
        } 
    } else {
        alert("Invalid username or password");
    }
}

// 5. Function to handle sign up
function signUp() {
    const signUpUsername = document.getElementById("signup-username").value;
    const signUpPassword = document.getElementById("signup-password").value;
    const signUpRole = document.getElementById("signup-role").value;
    const users = getUsersFromStorage();
    const adminExists = users.some(user => user.role === "admin");

    if (signUpRole === "admin" && adminExists) {
        alert("Admin account already exists");
        return;
    }

    if (signUpUsername && signUpPassword) {
        users.push({ username: signUpUsername, password: signUpPassword, role: signUpRole });
        localStorage.setItem('users', JSON.stringify(users));
        showLoginScreen();
    }
}

// 6. Function to retrieve users from localStorage
function getUsersFromStorage() {
    const users = localStorage.getItem('users');
    return users ? JSON.parse(users) : [];
}

// Initialize the app by showing the login screen
showLoginScreen();
