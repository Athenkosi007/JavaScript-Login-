<html>
<head>
    <title>Login Form</title>
</head>
<body>
    <h1>Login</h1>
<form>
    <label for="usernameInput">Username:</label><input type="text" id="usernameInput"/><br/>
    <br/>
    <label for="passwordInput">Password:</label><input type="password" id="passwordInput"/><br/>
    <p> </p>
    <button type="button" onclick="verifyUser()">Login</button>
</form>
<script> 

    function verifyUser(){
    var username = document.getElementById("usernameInput").value;
    var password = document.getElementById("passwordInput").value;

    if (username === "" || password === "") {
        alert("Please fill in both fields.");
    } else {
        CheckLogin(username, password);
    }
    function CheckLogin() {
        var systemUsername = "Bond";
        var systemPassword = "007";
        
        if (username === systemUsername && password === systemPassword) {
            alert("Login successful!");
            
            window.location.href = "switch.html"; // Redirect to switch.html
            
        } else {
            alert("Invalid username or password.");
        }
    }
}
</script>
</body>
</html>