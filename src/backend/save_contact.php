<?php  
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

$conn = new mysqli("localhost", "root", "", "contact_db"); 

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$data = json_decode(file_get_contents("php://input"), true);

if ($data) {
    $name = $conn->real_escape_string($data['name']);
    $email = $conn->real_escape_string($data['email']);
    $area = $conn->real_escape_string($data['area']);
    $phone = $conn->real_escape_string($data['phone']);
    $message = $conn->real_escape_string($data['message']);

    $sql = "INSERT INTO contacts (name, email, area, phone, message) VALUES ('$name', '$email','$area','$phone', '$message')";

    if ($conn->query($sql) === TRUE) {
        echo json_encode(["success" => true, "message" => "Message saved successfully"]);
    } else {
        echo json_encode(["success" => false, "message" => "Error: " . $conn->error]);
    }
} else {
    echo json_encode(["success" => false, "message" => "Invalid input"]);
}

$conn->close(); 

?>

