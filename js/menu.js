$(document).ready(function(){ 

    console.log(":D");

    $('#toggle').click(function() {
   $(this).toggleClass('active');
   $('#overlay').toggleClass('open');
  });

    
});