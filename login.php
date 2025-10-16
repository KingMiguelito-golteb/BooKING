<?php
// Database connection
$servername = "localhost";
$dbusername = "root";
$dbpassword = "";
$dbname = "booking_system";

$conn = mysqli_connect($servername, $dbusername, $dbpassword, $dbname);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $password = $_POST['password'];
    
    $sql = "SELECT * FROM users WHERE email = '$email'";
    $result = mysqli_query($conn, $sql);
    
    if (mysqli_num_rows($result) == 1) {
        $user = mysqli_fetch_assoc($result);
        
        if (password_verify($password, $user['password'])) {
            echo "<script>alert('Login successful!'); window.location.href='home.html';</script>";
        } else {
            echo "<script>alert('Invalid password!'); window.location.href='welcome.html';</script>";
        }
    } else {
        echo "<script>alert('No account found with this email!'); window.location.href='welcome.html';</script>";
    }
}

mysqli_close($conn);
?>