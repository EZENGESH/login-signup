function signup() {
   var username = document.getElementById("signup-username").value;
   var email = document.getElementById("signup-email").value;
   var password = document.getElementById("signup-password").value;

   // Send the signup data to the server for processing and storage
   fetch('/signup', {
       method: 'POST',
       headers: {
           'Content-Type': 'application/json',
       },
       body: JSON.stringify({ username, email, password }),
   })
   .then(response => response.text())
   .then(data => {
       alert(data); // You can handle the response here (e.g., show a success message or redirect)
   })
   .catch(error => console.error('Error:', error));
   console.log("Signup button clicked");
}
