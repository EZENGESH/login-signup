function login() {
    var username = document.getElementById("login-username").value;
    var password = document.getElementById("login-password").value;

    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message); // Show the success message
        if (data.message === 'Login successful') {
            localStorage.setItem('isLoggedIn', true); // Set authentication status
            window.location.href = '/homepage.html'; // Redirect to home page
            // Manipulate the browser history to remove the login page
            history.pushState(null, null, '/homepage.html');
        }
    })
    .catch(error => console.error('Error:', error));
}
