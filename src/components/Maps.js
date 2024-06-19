import React, { useState, useCallback } from 'react';
import { GoogleMap, DirectionsService, DirectionsRenderer, LoadScript } from '@react-google-maps/api';
import { Button, Grid, Paper } from '@mui/material';

const containerStyle = {
  width: '50%',
  height: '400px',
};

const center = {
  lat: 40.756795,
  lng: -73.954298,
};

const stationsData = [
  { id: 1, name: 'תחנת מקור', address: 'פוקס אהרון דב 6 בני ברק' },
  { id: 2, name: 'תחנת יעד', address: 'גן קדושי ורשא בני ברק' },
  // ניתן להוסיף תחנות נוספות כרצונך
];

const MapComponent = () => {
  const [directions, setDirections] = useState(null);

  const directionsCallback = useCallback((response) => {
    if (response !== null) {
      if (response.status === 'OK') {
        setDirections(response);
      } else {
        console.error('Directions request failed due to ' + response.status);
      }
    }
  }, []);

//   useEffect(() => {
//     const script = document.createElement('script');
//     script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&libraries=places`;
//     script.async = true;
//     document.body.appendChild(script);

//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);

  const handleDirections = () => {
    const origin = stationsData[0].address; // תחנת מקור
    const destination = stationsData[1].address; // תחנת יעד

    if (origin && destination) {
      const directionsService = new window.google.maps.DirectionsService();
      directionsService.route(
        {
          origin,
          destination,
          travelMode: window.google.maps.TravelMode.DRIVING,
        },
        directionsCallback
      );
    }
  };

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY} libraries={['places']}>
    <Grid container justifyContent="center" spacing={2}>
      <Grid item xs={12}>
        <Paper style={{ padding: '20px' }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12}>
              <Button variant="contained" color="primary" onClick={handleDirections}>
                חשב מסלול
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <LoadScript
          googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
          libraries={['places']}
        >
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={12}
          >
            {directions && (
              <DirectionsRenderer
                options={{ directions: directions }}
              />
            )}
            <DirectionsService
              options={{
                destination: stationsData[1].address, // תחנת יעד
                origin: stationsData[0].address, // תחנת מקור
                travelMode: window.google.maps.TravelMode.DRIVING,
              }}
              callback={directionsCallback}
            />
          </GoogleMap>
        </LoadScript>
      </Grid>
    </Grid>
    </LoadScript>
  );
};

export default MapComponent;




// import React, { useState, useCallback } from 'react';
// import { GoogleMap, DirectionsService, DirectionsRenderer, LoadScript } from '@react-google-maps/api';
// import { Button, TextField, Grid, Paper } from '@mui/material';

// const containerStyle = {
//   width: '100%',
//   height: '400px',
// };

// const center = {
//   lat: 40.756795,
//   lng: -73.954298,
// };

// export default function Maps(){
//   const [origin, setOrigin] = useState('');
//   const [destination, setDestination] = useState('');
//   const [directions, setDirections] = useState(null);

//   const onMapLoad = useCallback((map) => {
//     console.log('map loaded:', map);
//   }, []);

//   const directionsCallback = useCallback((response) => {
//     if (response !== null) {
//       if (response.status === 'OK') {
//         setDirections(response);
//       } else {
//         console.error('Directions request failed due to ' + response.status);
//       }
//     }
//   }, []);

//   const handleDirections = () => {
//     if (origin && destination) {
//       const directionsService = new window.google.maps.DirectionsService();
//       directionsService.route(
//         {
//           origin,
//           destination,
//           travelMode: window.google.maps.TravelMode.DRIVING,
//         },
//         directionsCallback
//       );
//     }
//   };

//   return (
//     <Grid container justifyContent="center" spacing={2}>
//       <Grid item xs={12}>
//         <Paper style={{ padding: '20px' }}>
//           <Grid container spacing={2} alignItems="center">
//             <Grid item xs={12} md={4}>
//               <TextField
//                 fullWidth
//                 label="מוצא"
//                 variant="outlined"
//                 value={origin}
//                 onChange={(e) => setOrigin(e.target.value)}
//               />
//             </Grid>
//             <Grid item xs={12} md={4}>
//               <TextField
//                 fullWidth
//                 label="יעד"
//                 variant="outlined"
//                 value={destination}
//                 onChange={(e) => setDestination(e.target.value)}
//               />
//             </Grid>
//             <Grid item xs={12} md={4}>
//               <Button variant="contained" color="primary" onClick={handleDirections}>
//                 חשב מסלול
//               </Button>
//             </Grid>
//           </Grid>
//         </Paper>
//       </Grid>
//       <Grid item xs={12}>
//         <LoadScript
//           googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
//           libraries={['places']}
//         >
//           <GoogleMap
//             mapContainerStyle={containerStyle}
//             center={center}
//             zoom={12}
//             onLoad={onMapLoad}
//           >
//             {directions && (
//               <DirectionsRenderer
//                 options={{ directions: directions }}
//                 panel={document.getElementById('directions-panel')}
//               />
//             )}
//             <DirectionsService
//               options={{
//                 destination: destination,
//                 origin: origin,
//                 travelMode: window.google.maps.TravelMode.DRIVING,
//               }}
//               callback={directionsCallback}
//             />
//           </GoogleMap>
//         </LoadScript>
//       </Grid>
//     </Grid>
//   );
// };