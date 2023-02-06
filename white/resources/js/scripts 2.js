

   
 
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
