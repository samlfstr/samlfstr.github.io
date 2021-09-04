<?php
$email = $_POST['mail'];
// Validate email
if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo(true);
}
else{
    echo(false);
}