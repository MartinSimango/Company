 <!--<div class="w3-container" id="contact" style="margin-top:75px">
    <h1 class="w3-xxxlarge w3-text-red"><b>Contact.</b></h1>
    <hr style="width:500px;border:5px solid red" class="w3-round">
    <h1 class="w3-xlarge w3-text-white"><b><p> If you would like us to design anything for you please contanct us below.</p> </b></h1>
    <form action="http://www.w3schools.com/w3css/form.asp" target="_blank">
      <div class="w3-group">
        <label>
          <h1 class="w3-xlarge w3-text-white">Name</h1>
        </label>
        <input class="w3-input w3-border" type="text" name="Name" required>
      </div>
      <div class="w3-group">
        <label>
          <h1 class="w3-xlarge w3-text-white">Email</h1>
        </label>
        <input class="w3-input w3-border" type="text" name="Email" required>
      </div>
      <div class="w3-group">
        <label>
          <h1 class="w3-xlarge w3-text-white">Message</h1>
        </label>
        <input class="w3-input w3-border" type="text" name="Message" required>
      </div>
      <button type="submit" class="w3-btn-block w3-padding-large w3-red w3-margin-bottom"><h1 class="w3-xlarge w3-text-white">Send Message</button>
    </form>  
  </div>-->

    <div class="container">
  <div class="col-xs-9 col-xs-offset-0" id="contact" >
    <div class="from-wrap">
    <h1 class="w3-xxxlarge w3-text-red"><b>Contact.</b></h1>
    <hr style="width:50px;border:5px solid red" class="w3-round">
     <h1 class="w3-xlarge w3-text-white"><b><p> Do you want us to style your home? Fill out the form and fill me in with the details :) We love meeting new people!</p> </b></h1>
    <form method="post" action="" autocomplete="off" id="contact-form">
      <div class="form-group inputWithIcon">
        <label class="sr-only">Name</label>
        <input type="text" class="form-control input_icon" name="Name" id="username" placeholder="Enter Name" required>
        <i class="glyphicon glyphicon-exclamation-sign hidden" title="Field can't be empty" id="username_icon" style='color:red;'> </i>
      </div>
      <div class="form-group inputWithIcon">
        <label class="sr-only">Email</label>
        <input type="email" class="form-control input_icon"  name="Email" id="user_email" placeholder="Enter Email" required>
        <i class="glyphicon glyphicon-exclamation-sign hidden" title="Field can't be empty" id="user_email_icon" style='color:red;'> </i>
      </div>
      <div class="form-group">
        <label class="sr-only">Message</label>
        <textarea class="form-control" id="message" name="Message" cols=10 rows=15 required></textarea>
      </div>
      <button id="email_submit_btn"  type="submit" class="w3-btn-block w3-padding-large w3-red w3-margin-bottom">Send Message</button>
      <p id="email_confirmation_string"> </p>
    </form>  
  </div>
  </div>
  </div>