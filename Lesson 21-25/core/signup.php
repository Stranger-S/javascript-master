<?php
require_once 'config.php';

$name = trim($_POST['name']);
$secondName = trim($_POST['secondname']);
$pass = trim($_POST['pass']);
$email = trim($_POST['email']);
$birthday = trim($_POST['birthday']);
$sex = trim($_POST['sex']);

if ($name =='' OR $secondName =='' OR $pass=='' OR $email=='' OR $birthday=='' OR $sex ==''){
    echo 2;
    die;
}

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "INSERT INTO users (name, secondname, email, password, birthday, sex) VALUES ('".$name."', '".$secondName."', '".$email."', '".$pass."', '".$birthday."', '".$sex."')";

if ($conn->query($sql) === TRUE) {
    echo 1;
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>