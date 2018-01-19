    $(document).ready(function(){
        //ERROR HANDLING
      
        $(".input_icon").each(function(){
            this.addEventListener('focus',function(){
                $(this).removeClass("red-error");
                $("#"+$(this).attr("id")+"_icon").addClass("hidden");
            });
            this.addEventListener('focusout',function(){
                if($(this).val().length == 0 ){
                    $(this).addClass("red-error");
                    $("#"+$(this).attr("id")+"_icon").removeClass("hidden");
                }
            });
         });


         //WHEN SUBMITE BUTTON IS CLICKED
         $("#contact-form").submit(function(event){
            event.preventDefault();
            var email= $("#user_email").val();
            var name= $("#username").val();
            var message= $("#message").val();
            var submit=$("#email_submit_btn").val();

            //just more error handling not needed though
           /* $(".input_icon").each(function(){
                if($(this).val().length==0){
                     $(this).addClass("red-error");
                    $("#"+$(this).attr("id")+"_icon").removeClass("hidden");
                }
            });*/ 
            //start LOADER
           $("#message").addClass("loading");
            $("#message").attr("readonly",true);
            $("#email_confirmation_string").load("submit_email.php",{
                email,
                name,
                message,
                submit
                 

            });


         });




    }
    );