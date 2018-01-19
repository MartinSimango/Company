const MANUAL="manual";
const AUTO="auto";
var SlideController=  (function(){
var changeSlides; //Interval varaible for the automatic slide show
var slide_arrays= {
    manual: ["Logo1.jpg","Logo2.jpg","card1.jpg","card2.jpg","Web Image_13.jpg",
    "Web Image_07.jpg","Web Image_08.jpg" ,"Web Image_09.jpg"],
    auto: ["Logo1.jpg","Logo2.jpg","card1.jpg","card2.jpg","Web Image_13.jpg",
    "Web Image_07.jpg","Web Image_08.jpg" ,"Web Image_09.jpg"],
}
var slideIndex={
    manual:0,
    auto:0
}
var DOMStrings={
    manual:{
        slide_div: "#manual_slide_div",
        slides:".manualSlides",
        dots:".dot"
    },
    auto:{
        slide_div: "#auto_slide_div",
        slides:".autoSlides",
        dots:".dotAuto"

    }
}

return {
  insertSlides: function(type){ //type is the type of slide auto or manual
            var div= document.querySelector(DOMStrings[type].slide_div);
            var html="";
            for(var i=0;i<slide_arrays[type].length;i++){
                html+="<div class='fadeSlideImage "+type+"Slides'> \
                <div class='numbertext' id='slide_num'>"+(i+1)+"/"+slide_arrays[type].length +"</div>\
                <img src='images/"+(slide_arrays[type])[i]+"' style='width:100%'></div>";

                }
            div.insertAdjacentHTML("afterbegin",html);
    
        },
   insertDots: function(type){
            var slide=document.querySelector(DOMStrings[type].slide_div);
            var dotClass="dot";
            if(type===AUTO)
                dotClass="dotAuto";
            var html="<br> <div style='text-align:center'> ";
            for(var i=0;i<slide_arrays[type].length;i++){
                html+="<span class='"+dotClass+"' onclick=\"controller.currentSlides("+i+",'"+type+"')\"></span> "
            } 
            html+="</div>";
            slide.insertAdjacentHTML("afterend",html);
        },
  startSlideShow: function(type){
      this.showSlides(0,type);
      if(type===AUTO){ //if its an automatic slide show
         changeSlides=setInterval(()=>{
                this.showSlides(slideIndex[type]+1,type); //change slide every 3 seconds
        },3000);
      }
  },
   showSlides: function(n,type) {
            var i;
            var slides = document.querySelectorAll(DOMStrings[type].slides);
            var dots = document.querySelectorAll(DOMStrings[type].dots);
            slideIndex[type]=n;
            if (n > slides.length-1) {slideIndex[type]= 0}    //go to starting slide
            if (n < 0) {slideIndex[type] = slides.length-1} //go to last slide
        
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";  
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace("active", ""); //make all dots inactive
            }
            slides[slideIndex[type]].style.display = "block";  
            dots[slideIndex[type]].className += " active";
            
      },
    plusSlides: function(n,type){
        if(type===AUTO){//restart time image must be displayed
            clearInterval(changeSlides);
            this.showSlides(slideIndex[type]+n,type);
            changeSlides=setInterval(()=>{
            this.showSlides(slideIndex[type]+1,type); //change slide every 3 seconds
            },3000);
        }
        else{
         this.showSlides(slideIndex[type]+n,type);
        }

    },
    currentSlides:function(n,type){
         if(type===AUTO){ //restart timer for image
            clearInterval(changeSlides);
            this.showSlides(n,type);
            changeSlides=setInterval(()=>{
            this.showSlides(slideIndex[type]+1,type); //change slide every 3 seconds
            },3000);
        }
        else{
            this.showSlides(n,type);
        }
    }
       
}

})();

var controller =(function(SlideCtrl){
return{
    init: function(){
        SlideCtrl.insertSlides(MANUAL);
        SlideCtrl.insertDots(MANUAL);
        SlideCtrl.startSlideShow(MANUAL);
        SlideCtrl.insertSlides(AUTO);
        SlideCtrl.insertDots(AUTO);
        SlideCtrl.startSlideShow(AUTO);
        
        //start slide
    },
    plusSlides: function(n,type){
        SlideCtrl.plusSlides(n,type);
    },
    currentSlides: function(n,type) {
       SlideCtrl.currentSlides(n,type);
   },

}
})(SlideController); //IEFFI
controller.init();


