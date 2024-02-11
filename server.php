<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $to = "julietogegod@gmail.com";
    $subject = "New Contact Form Submission";
    $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";

    if (mail($to, $subject, $body)) {
        http_response_code(200);
        echo "Message sent successfully!";
    } else {
        http_response_code(500);
        echo "Oops! Something went wrong.";
    }
} else {
    http_response_code(403);
    echo "Forbidden";
}
?>
