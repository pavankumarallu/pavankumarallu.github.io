$(document).ready(function(){

  $('#menu').click(function(){
    $(this).toggleClass('fa-times');
    $('header').toggleClass('toggle');
  });
  
  $(window).on('scroll load',function(){
    $('#menu').removeClass('fa-times');
    $('header').removeClass('toggle');
    if($(window).scrollTop() > 0){
      $('.top').show();
    }else{
      $('.top').hide();
    }
});

  // $('#autoWidth').lightSlider({
  //       autoWidth:true,
  //       loop:true,
  //       onSliderLoad: function() {
  //           $('#autoWidth').removeClass('cS-hidden');
  //       } 
  //   });  


    var form = document.getElementById("my-form");
    
    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("my-form-status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        status.innerHTML = "Thanks for your submission!";
        form.reset()
      }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form"
      });
    }
    form.addEventListener("submit", handleSubmit)


});