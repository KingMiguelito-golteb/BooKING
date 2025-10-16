<?php
// Database connection
$servername = "localhost";
$dbusername = "root";
$dbpassword = "";
$dbname = "booking_system";

$conn = mysqli_connect($servername, $dbusername, $dbpassword);

// Create database if not exists
$create_db = "CREATE DATABASE IF NOT EXISTS $dbname";
if (mysqli_query($conn, $create_db)) {
    mysqli_select_db($conn, $dbname);
    
    // Create users table
    $create_table = "CREATE TABLE IF NOT EXISTS users (
        id INT(11) AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )";
    
    mysqli_query($conn, $create_table);
} else {
    die("Error creating database: " . mysqli_error($conn));
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = mysqli_real_escape_string($conn, $_POST['name']);
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $password = $_POST['password'];
    
    // Check if email exists
    $check_email = "SELECT * FROM users WHERE email = '$email'";
    $result = mysqli_query($conn, $check_email);
    
    if (mysqli_num_rows($result) > 0) {
        echo "<script>alert('Email already exists!'); window.location.href='UserRegis.html';</script>";
    } else {
        // Hash password and insert user
        $hashed_password = password_hash($password, PASSWORD_DEFAULT);
        $sql = "INSERT INTO users (name, email, password) VALUES ('$name', '$email', '$hashed_password')";
        
        if (mysqli_query($conn, $sql)) {
            echo "<script>alert('Account created successfully!'); window.location.href='home.html';</script>";
        } else {
            echo "<script>alert('Error creating account.'); window.location.href='UserRegis.html';</script>";
        }
    }
}

mysqli_close($conn);
?>