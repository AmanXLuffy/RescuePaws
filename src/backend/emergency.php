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
    $phone = $conn->real_escape_string($data['phone']);
    $area = $conn->real_escape_string($data['area']);
    $description = $conn->real_escape_string($data['description']);

    $sql = "INSERT INTO emergency_alert (name, phone, area, description) VALUES ('$name', '$phone','$area','$description')";

    if ($conn->query($sql) === TRUE) {
        echo json_encode(["success" => true, "message" => "data received successfully"]);
    } else {
        echo json_encode(["success" => false, "message" => "Error: " . $conn->error]);
    }
} else {
    echo json_encode(["success" => false, "message" => "Invalid input"]);
}

$conn->close(); 

?>

