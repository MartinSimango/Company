<!-- W3.CSS Container -->
<div class="w3-light-grey w3-container w3-padding-32" style="margin-top:75px;padding-right:58px"><p class="w3-right">Powered by <a href="default.html" title="W3.CSS" target="_blank" class="w3-hover-opacity">w3.css</a></p></div>


</body>

<!-- Mirrored from www.w3schools.com/w3css/tryw3css_templates_interior_design.htm by HTTrack Website Copier/3.x [XR&CO'2014], Tue, 13 Dec 2016 20:56:36 GMT -->
 <!--JQUERY-->
<script src="js/jquery.js"></script>

<!-- Bootstrap Core JavaScript -->
<script src="js/bootstrap.min.js"></script>

<!--script for empty input-->
<script src="js/contact.js"></script>
 <!--scripts for slideshow-->
<script src="js/slides.js"></script>


<script> 
// Script to open and close sidenav
function w3_open() {
    document.getElementById("mySidenav").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
}
 
function w3_close() {
    document.getElementById("mySidenav").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
}

// Modal Image Gallery
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;

}

</script>
</html>