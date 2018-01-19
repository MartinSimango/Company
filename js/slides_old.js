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
/* ******************************AUTOMATIC SLIDE***************************************/
        
var AutoSlideController=(function(){
    var changeSlides;
    var autoSlideIndex = 0;
    var autoslideshow_array= ["Logo1.jpg","Logo2.jpg","card1.jpg","card2.jpg","Web Image_13.jpg",
    "Web Image_07.jpg","Web Image_08.jpg" ,"Web Image_09.jpg"];
    var DOMstring={
    auto_slide_div: "#auto_slide_div",
    autoSlides:".autoSlides",
    autoDots:".dotAuto"
    }
    return {
        insertSlides: function(){
            var div= document.querySelector(DOMstring.auto_slide_div);
            var html="";
            for(var i=0;i<autoslideshow_array.length;i++){
                html+="<div class='fade autoSlides'> \
                <div class='numbertext' id='slide_num'>"+(i+1)+"/"+autoslideshow_array.length +"</div>\
                <img src='images/"+autoslideshow_array[i]+"'id='auto_slide_img' style='width:100%'></div>";

                }
            div.insertAdjacentHTML("afterbegin",html);
    
        },
        insertDots: function(){
            var slide=document.querySelector(DOMstring.auto_slide_div);
            var html="<br> <div style='text-align:center'> ";
            for(var i=0;i<autoslideshow_array.length;i++){
                html+="<span class='dotAuto' onclick='controller.autoCurrentSlides("+i+")'></span> "
            } 
            html+="</div>";
            slide.insertAdjacentHTML("afterend",html);
        },
        startSlideShow: function(){
           /* var i;
            var slide_images=document.querySelectorAll(DOMstring.autoSlides);
            for (i = 0; i < slide_images.length; i++) {
                slide_images[i].style.display="none";
            }
            slide_images[autoSlideIndex].style.display="block";
            var dots=document.querySelectorAll(DOMstring.autoDots);
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            dots[autoSlideIndex].className += " active";
            autoSlideIndex++;
            if ((autoSlideIndex+1) > autoslideshow_array.length) {autoSlideIndex = 0}  */  
            this.showSlides(0);
            changeSlides=setInterval(()=>{
                this.showSlides(autoSlideIndex+1); //change slide every 3 seconds
            },3000);
        },
        showSlides: function(n) {
            var i;
            var slides = document.querySelectorAll(DOMstring.autoSlides);
            var dots = document.querySelectorAll(DOMstring.autoDots);
            autoSlideIndex=n;
            if (n > slides.length-1) {autoSlideIndex = 0}    //go to starting slide
            if (n < 0) {autoSlideIndex = slides.length-1} //go to last slide
        
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";  
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace("active", ""); //make all dots inactive
            }
            slides[autoSlideIndex].style.display = "block";  
            dots[autoSlideIndex].className += " active";
            
      },
        plusSlides: function(n){
            clearInterval(changeSlides);
            this.showSlides(autoSlideIndex+n);
             changeSlides=setInterval(()=>{
                this.showSlides(autoSlideIndex+1); //change slide every 3 seconds
            },3000);

        },
        currentSlides:function(n){
            clearInterval(changeSlides);
            this.showSlides(n);
             changeSlides=setInterval(()=>{
                this.showSlides(autoSlideIndex+1); //change slide every 3 seconds
            },3000);
        }
        
       

    }
})();

/* ******************************MANUAL SLIDE***************************************/
var ManualSlideController = (function(){
manualSlideShow_array=["Logo1.jpg","Logo2.jpg","card1.jpg","card2.jpg","Web Image_13.jpg",
    "Web Image_07.jpg","Web Image_08.jpg" ,"Web Image_09.jpg"];
var DOMstring = {
    manual_slide_div:"#manual_slide_div",
    manualSlides:".manualSlides",
    dot:".dot"
}
var slideIndex=0;
return {
     insertSlides: function(){
        var manualSlideIndex=0;
        var div= document.querySelector(DOMstring.manual_slide_div);
        var html="";
        for(var i=0;i<manualSlideShow_array.length;i++){
            html+="<div class='fade manualSlides'> \
            <div class='numbertext' id='slide_num'>"+(i+1)+"/"+manualSlideShow_array.length +"</div>\
            <img src='images/"+manualSlideShow_array[i]+"' style='width:100%'></div>";

            }
        div.insertAdjacentHTML("afterbegin",html);
    },
     insertDots: function(){
            var slide=document.querySelector(DOMstring.manual_slide_div);
            var html="<br> <div style='text-align:center'> ";
            for(var i=0;i<manualSlideShow_array.length;i++){
                html+="<span class='dot' onclick='controller.manualCurrentSlides("+i+")'></span> "
            } 
            html+="</div>";
            slide.insertAdjacentHTML("afterend",html);
     },
     startSlideShow: function(){
           /* var slide_image= document.querySelector(DOMstring.manualSlides); //get the first slide
            var active_dot=document.querySelector(DOMstring.dot);
            active_dot.className += " active";
            slide_image.style.display="block";*/
            this.showSlides(0); //SHOW THE FIRST IMAGE IN THE SLIDE
     },
    showSlides: function(n) {
        var i;
        var slides = document.querySelectorAll(DOMstring.manualSlides);
        var dots = document.querySelectorAll(DOMstring.dot);
        slideIndex=n;
        if (n > slides.length-1) {slideIndex = 0}    //go to starting slide
        if (n < 0) {slideIndex = slides.length-1} //go to last slide
       
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace("active", ""); //make all dots inactive
        }
        slides[slideIndex].style.display = "block";  
        dots[slideIndex].className += " active";
},
    plusSlides: function(n){
        this.showSlides(slideIndex+n);
    },
    currentSlides:function(n){
        this.showSlides(n);
    }
    
}


})();




var controller =(function(ASCtrl,MSCtrl){

return{
    init: function(){
         MSCtrl.insertSlides();
         MSCtrl.insertDots();
         MSCtrl.startSlideShow();
         ASCtrl.insertSlides(); 
         ASCtrl.insertDots();  
         ASCtrl.startSlideShow();
        
        //start slide
    },
    manualPlusSlides: function(n){
        MSCtrl.plusSlides(n);
    },
    manualCurrentSlides: function(n) {
       MSCtrl.currentSlides(n);
   },
    autoPlusSlides: function(n){
        ASCtrl.plusSlides(n);
    },
    autoCurrentSlides: function(n) {
       ASCtrl.currentSlides(n);
   }

}
})(AutoSlideController,ManualSlideController); //IEFFI

controller.init();

