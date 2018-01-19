<?php include "includes/header.php" ?>

<!-- Sidenav/menu -->
<?php include "includes/navigations.php" ?>

<!-- Top menu on small screens -->
<header class="w3-container w3-top w3-hide-large w3-red w3-xlarge w3-padding">
  <a href="javascript:void(0)" class="w3-btn w3-red w3-border w3-border-white w3-margin-right" onclick="w3_open()">&#9776;</a>
  <span>Brand Cupid</span>
</header>

<!-- Overlay effect when opening sidenav on small screens -->
<div class="w3-overlay w3-hide-large" onclick="w3_close()" style="cursor:pointer" title="close side menu" id="myOverlay"></div>

<!-- !PAGE CONTENT! -->
<div class="w3-main" style="margin-left:340px;margin-right:40px">

  <!-- Header -->
  <div class="w3-container" style="margin-top:80px" id="showcase">
    <h1 class="w3-jumbo"><b></b></h1>
    <img src="images/logo.jpg" style="width:75%">
    <h1 class="w3-xxxlarge w3-text-red"><b>Who We Are.</b></h1>
    <hr style="width:500px;border:5px solid red" class="w3-round">
  </div>
  
  <?php include "includes/image_modal.php" ?>    <!-- Modal for full size images on click-->


  <!-- Compaign -->
  <div class="w3-container" id="services" style="margin-top:75px">
    <h1 class="w3-xxxlarge w3-text-red"><b>Our Compaigns.</b></h1>
    <hr style="width:500px;border:5px solid red" class="w3-round">
    
    <!-- Compaign Slide Show -->
    <div class="w3-row-padding">
      <div class="w3-half">
        <img src="images/cmp1.jpg" style="width:100%" onclick="onClick(this)" alt="Desing 1">
        <img src="images/cmp2.jpg" style="width:100%" onclick="onClick(this)" alt="Design 2">
        
      </div>

    </div>

    
  </div>
  
  <!-- Services -->
  <div class="w3-container" id="designers" style="margin-top:75px">
    <h1 class="w3-xxxlarge w3-text-red"><b>Our Services.</b></h1>
    <hr style="width:500px;border:5px solid red" class="w3-round">
    <h1 class="w3-xlarge w3-text-white"><b>We do a lot of branding, this includes Logos, Business Cards, Posters, Company Profiles, Letterheads, and Email Signatures..</b></h1>
    
    

   
    <!-- Manual Slideshow -->

 
         <h2 class="w3-center">Manual Slideshow</h2>  
          <div class="slideshow-container" id="manual_slide_div">
  
         <a class="prev" onclick="controller.plusSlides(-1,'<?php echo MANUAL ?>')">&#10094;</a>
          <a class="next" onclick="controller.plusSlides(1,'<?php echo MANUAL ?>')">&#10095;</a>

          </div>
          
        

      

   
      <h1 class="w3-xlarge w3-text-white"><b><p> We also do marketing like wall banners, T-shirt designs, Bag designs, and Pan Designs.</p> </b></h1>
            
   
  
          <h2 class="w3-center" >Automatic Slideshow</h2>      
          <div class="slideshow-container" id="auto_slide_div">
            
         <a class="prev" onclick="controller.plusSlides(-1,'<?php echo AUTO ?>')">&#10094;</a>
          <a class="next" onclick="controller.plusSlides(1,'<?php echo AUTO ?>')">&#10095;</a>

            </div>

      

          


        

       
        
            <!-- -->

  </div>

  
  <!-- Contact -->
 <?php include "includes/contact.php" ?>

<!-- End page content -->
</div>

<?php include "includes/footer.php" ?>