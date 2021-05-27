
$('.slider').slick({
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'linear'
  });
  $(document).ready(function() {
    var botao = $('.bt1');
    var dropDown = $('.ul-menu');    
   
       botao.on('click', function(event){
           dropDown.stop(true,true).slideToggle();
           event.stopPropagation();
       });
   });
   $(document).ready(function() {
    var botao = $('.bt2');
    var dropDown = $('.ul-pro');    
   
       botao.on('click', function(event){
           dropDown.stop(true,true).slideToggle();
           event.stopPropagation();
       });
   });
   $(document).ready(function() {
    var botao = $('.bt3');
    var dropDown = $('.ul-cont');    
   
       botao.on('click', function(event){
           dropDown.stop(true,true).slideToggle();
           event.stopPropagation();
       });
   });
   