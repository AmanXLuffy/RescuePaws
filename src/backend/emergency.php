<?php

require_once 'vendor/autoload.php'; // Path to Composer's autoloader
require_once __DIR__ . '/vendor/autoload.php';  // Autoload Composer dependencies

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();


use Twilio\Rest\Client;

$twilioSid = getenv('TWILIO_SID');
$twilioAuthToken = getenv('TWILIO_AUTH_TOKEN');




$twilio_number = '+127076475140'; // Your Twilio number

// Get area from POST request
$area = $_POST['area'] ?? '';
$messageText = $_POST['message'] ?? 'Emergency Alert!';

// Check if input is valid
if (empty($area) || empty($messageText)) {
    echo json_encode(["status" => "error", "message" => "Area and message are required."]);
    exit;
}

// Connect to database
$conn = new mysqli("localhost", "contact_db", "", "contacts");

// Check DB connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Fetch phone numbers of rescuers in that area
$stmt = $conn->prepare("SELECT phone FROM rescuers WHERE area = ?");
$stmt->bind_param("s", $area);
$stmt->execute();
$result = $stmt->get_result();

$client = new Client($sid, $token);

try {
    while ($row = $result->fetch_assoc()) {
        $client->messages->create(
            $row['phone'],
            [
                'from' => $twilio_number,
                'body' => $messageText
            ]
        );
    }
    echo json_encode(["status" => "success", "message" => "SMS sent to rescuers in $area"]);
} catch (Exception $e) {
    echo json_encode(["status" => "error", "message" => "Error sending SMS: " . $e->getMessage()]);
}


?>