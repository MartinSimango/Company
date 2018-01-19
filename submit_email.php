<?php include "functions.php" ?>
<!--to show a nice modal when email is sent or fails to send-->
<?php include "includes/email_modal.php" ?>

<?php
require "./vendor/phpmailer/phpmailer/src/PHPMailer.php";
if(isset($_POST['submit'])){
    $name=$_POST['name'];
    $emailAddress=$_POST['email'];
    $message=$_POST['message'];
    //double check if somehow details are empty
    $error="false";
     if(empty(trim($name)) || empty(trim($emailAddress)) || empty(trim($message)) ){
           $error="true";
    }
    //no errors can submit 
    if($error==="false"){
      if(submitEmail($emailAddress,$name,$message)){
          ?>
         <script> 
        $("#myModalSuccess").modal('show');
        $("#message").removeClass("loading "); 
        $("#message").attr("readonly",false); //make textarea editable again
   
          </script>

          <?php
            //echo "<p class='bg-success'>Email Sent!</p>";
      }
      else{
          ?>
         <script> 
        // $(".modal_link_fail").attr("href","index.php#contact?name='<?php echo $name ?>'&email='<?php echo $emailAddress ?>'&message='<?php echo $message?>'");
        $("#myModalFail").modal('show');
        $("#message").removeClass("loading ");
        $("#message").attr("readonly",false);
          </script>

          <?php

        //  echo "<p class='bg-danger'>Email Failed!</p>";
      }

    }
}





?>
