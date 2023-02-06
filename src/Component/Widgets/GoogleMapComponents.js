import { GoogleApiWrapper, Map } from 'google-maps-react';
import React, { useEffect, useState } from 'react';

  const demoFancyMapStyles = [
    {
      "featureType": "administrative",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#444444"
        }
      ]
    },
    {
      "featureType": "landscape",
      "elementType": "all",
      "stylers": [
        {
          "color": "#f2f2f2"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "all",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "all",
      "stylers": [
        {
          "saturation": "-100"
        },
        {
          "lightness": "45"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "all",
      "stylers": [
        {
          "visibility": "simplified"
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "transit",
      "elementType": "all",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "all",
      "stylers": [
        {
          "color": "#b2d0ff"
        },
        {
          "visibility": "on"
        }
      ]
    }
  ]

const GoogleMapComponents = (props) => {

  // console.log(props);
  
  
  function onMapReady(mapProps, map){
    var directionsService = new window.google.maps.DirectionsService();
    var directionsRenderer = new window.google.maps.DirectionsRenderer();
    map.setOptions({
      styles: demoFancyMapStyles
    });
    
    directionsRenderer.setMap(map);

    const onChangeHandler = function() {
      calculateAndDisplayRoute(directionsService, directionsRenderer);
    }

    document.getElementById("pickupLocation").addEventListener("change", onChangeHandler);
    document.getElementById("dropLocation").addEventListener("change", onChangeHandler);
       
  };
  

  function calculateAndDisplayRoute(directionsService, directionsRenderer) {
    const start = document.getElementById("pickupLocation").value;
    const end = document.getElementById("dropLocation").value;
  
    directionsService
      .route({
        origin: start,
        destination: end,
        travelMode: 'DRIVING',
      })
      .then((response) => {
        directionsRenderer.setDirections(response);

        console.log(response);
      })
      .catch((e) => {
        
      });
  }



  window.onMapReady = onMapReady;
  
  // function handelhaga() {
    // if(props.start || props.end){
      // alert()
      // let request = {
      //   origin: props.end,
      //   destination: props.start,
      //   travelMode: 'DRIVING',
      // };
     
      //   directionsService.route(request, function (result, status) {
      //     if (status == 'OK') {
      //       directionsDisplay.setDirections(result);
      //     }
      //     alert(0);
      //   });   

    // }
  // }






  return (
    <div className='w-full h-full'>
      <Map
          className="map"
          initialCenter={{ lat:-26.650000, lng: 153.066666 }}
          google={props.google}
          onReady={onMapReady}
          style={{ height: '100%', position: 'relative',  width: '100%' }}
          containerStyle={{
              width: '100%',
              height: '100%', position: 'relative', 
            }}
          zoom={8}
        ></Map>
    </div>
  )
}


export default GoogleApiWrapper({
  apiKey: 'AIzaSyCNKfLc9Skv5ijjGqkTSfJjOsMHIYuFvLc',
  version: '3.40',
})(GoogleMapComponents);

// export default ;
