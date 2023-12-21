document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission
        handleLoginFormSubmission();
    });
});

function handleLoginFormSubmission() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Updated authentication logic
    const userRole = authenticateUser(username, password);

    if (userRole) {
        const errorElement = document.getElementById('loginError');
        errorElement.textConstent = '';
        // Redirect based on user role or perform other actions
        redirectToDashboard(userRole);
    } else {
        // Display an error message
        const errorElement = document.getElementById('loginError');
        errorElement.textContent = 'Invalid username or password. Please try again.';
    }
}

// Updated authentication logic with fixed usernames and passwords
function authenticateUser(username, password) {
    // Predefined usernames and passwords
    const userCredentials = {
        'employee': 'password123',
        'manager': 'managerPass',
        'admin': 'adminPass'
    };

    // Check if the entered username exists and matches the predefined password
    if (userCredentials.hasOwnProperty(username) && password === userCredentials[username]) {
        return username; // Return the username as the user role
    } else {
        return null; // Return null if authentication fails
    }
}

function redirectToDashboard(userRole) {
    switch (userRole) {
        case 'employee':
            window.location.href = 'employee-dashboard.html';
            break;
        case 'manager':
            window.location.href = 'manager-dashboard.html';
            break;
        case 'admin':
            window.location.href = 'admin-dashboard.html';
            break;
        default:
            break;
    }
}

