// JavaScript for form validation goes here!

//hookup the form submit button to a validate function
$(document).ready(function(){
    $('input[type="submit"]').on("click",validate);
});

//perform validate logic on form
function validate(event){
    //prevent the form from submitting
    event.preventDefault();
    //remove old error messages    
    removeErrors();
    
    var isError = false;
    
    var id = $("#emp-id").val();
    if(id.length !=10){
        report("emp-id-error","employee id must be 10 characters long");
        isError=true;
    }
    
    var hours = parseInt($("#hours").val());
    if(!Number.isInteger(hours)){
        report("hours-error","Hours must be numeric");
        isError = true;
    }
    else if(hours < 1 || hours > 100){
        report("hours-error","Hours must be between 1 and 100");
        isError = true;
    }
    
    //validate rate, must be numeric and positive
    var rate = $("payrate").val();
    if(!Number.isInteger(rate)){
        report("payrate-error","Pay rate must be a number");
        isError = true;
    }
    else if(rate < 0){
        report("payrate-error","Pay rate must be positive");
        isError = true;
    }
    
    //submit form if data is good
    if(!isError){
        $("#payroll-form").submit();
    }
    
}
//update form.php to display error message
function report(id,message){
    $("#"+id).html(message);
    $("#"+id).parent().show();    
}

//clear previous errors
function removeErrors(){
    $("#emp-id-error").parent().hide();
     $("#hours-error").parent().hide();
     $("#payrate-error").parent().hide();
    
    
}

