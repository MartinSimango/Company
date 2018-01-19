<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
require "./vendor/autoload.php";
function submitEmail($fromAddress,$fromName,$message,$subject="Contact us from company.co.za"){
    //mail()

//SERVER SETUP
   $mail= new PHPMailer();
    $mail->isSMTP();                                      // Set mailer to use SMTP
    $mail->Host = Config::SMTP_HOST;  // Specify main and backup SMTP servers
    $mail->Username = Config::SMTP_USER;                 // SMTP username
    $mail->Password = Config::SMTP_PASSWORD;              // SMTP password
    $mail->Port = Config::SMTP_PORT;  
    $mail->SMTPAuth = true;                               // Enable SMTP authentication
    $mail->SMTPSecure = 'tls';                          // Enable TLS encryption, `ssl` also accepted
    

//CONTENT
$mail->isHTML(true); //can send html (can send links and shit)
$mail->CharSet="UTF-8";
$mail->Subject=$subject;
//Recipients
$mail->addReplyTo($fromAddress,$fromName);
$mail->setFrom($fromAddress,$fromName);
$mail->addAddress(Config::HOST_EMAIL);//the recipient
//add more recipeints if need be

//Body of message
$mail->Body=$message;
return $mail->send(); //send the email and return the result

//EASIER WAY (NOT WORKING YET)
/*$headers = "From: ${fromAddress}" . "\r\n" .
    "Reply-To: ${fromAddress}" . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

return mail(Config::HOST_EMAIL, $subject, $message, $headers);*/

}



?>