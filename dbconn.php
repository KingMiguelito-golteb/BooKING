<?php
$servername = "localhost";
$dbusername = "root";
$dbpassword = "";
$dbname = "booking_system";


$conn = mysqli_connect($servername, $dbusername, $dbpassword, $dbname);


if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Create database if it doesn't exist
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
    
    if (!mysqli_query($conn, $create_table)) {
        echo "Error creating table: " . mysqli_error($conn);
    }
} else {
    echo "Error creating database: " . mysqli_error($conn);
}
?>