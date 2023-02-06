//twitter
window.twttr = (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
  t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);
  t._e = [];
  t.ready = function(f) {
    t._e.push(f);
  };
  return t;
}(document, "script", "twitter-wjs"));

// facebook
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.10";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));



    //

    $(document).ready(function(){

      var $root = $('html, body');
               $('.navbar-nav a').click(function() {
                 var href = $.attr(this, 'href');
                 if (href != undefined && href != '#') {
                   $root.animate({
                     scrollTop: $(href).offset().top
                   }, 500, function () {
                     window.location.hash = href;
                   });
                 }
                 return false;
               });

       $(function () {
         $('#item1').tooltip();
       });

        

//works section start here
for(var i = 0; i < works.length; ++i ) {
  $("#work").append("\
    <div class='col-sm-6 col-md-3'>\
    <a href= '"+ works[i].url + " ' class='work-img'>\
       <img src='" + works[i].pic + "' class='img-responsive'>\
       <span class='info'><p class='proj-title'>Title:</p> " + works[i].title + " </span>\
     </a>\
   </div>\
  ");
  var images = $("#work img");
  if(i%2 === 0){
    $(images[i]).css("border", "2px solid DodgerBlue");
  } else {
    $(images[i]).css("border", "2px solid salmon");
  };
};
// actiion on mouse hover
$(".work-img").mouseenter(function(){
  $(".info", this).show();
}).mouseleave(function(){
  $(".info", this).hide();
});
});

$(".message-box").css("background-color", "pink");
//google maps
var map;
var position;
var marker;
     function initMap() {
       map = new google.maps.Map(document.getElementById('map'), {

         center: {lat: 30.2961594 , lng: -81.6065125 },
         zoom: 16
       });
       marker = new google.maps.Marker({
     position: position,
     map: map
 });
 var iconBase = 'http://maps.google.com/mapfiles/ms/icons/';
           var marker = new google.maps.Marker({
             position: {lat: 30.2961594 , lng:-81.6065125  },
             map: map,
             icon: iconBase + 'red-dot.png'
           });

     }
