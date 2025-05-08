<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");


$host = "localhost";
$user = "root"; 
$pass = ""; 
$dbname = "contact_db";

$conn = new mysqli($host, $user, $pass, $dbname);

if ($conn->connect_error) {
    die(json_encode(["error" => "Database connection failed"]));
}

$sql = "SELECT name, email, phone, area FROM contactss ORDER BY area";
$result = $conn->query($sql);

$rescuers = [];

while ($row = $result->fetch_assoc()) {
    $rescuers[$row['area']][] = $row;
}

echo json_encode($rescuers);
$conn->close();
?>
