import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';

const index = ({
  singleMarker,
  singleLocationData,
  multipleMarkers,
  multipleLocationData,
}) => {
  const MapPlaceholder = () => {
    return (
      <p>
        Map of Lebanon.{' '}
        <noscript>You need to enable JavaScript to see this map.</noscript>
      </p>
    );
  };
  return (
    <>
      <MapContainer
        center={[33.8547, 35.8623]}
        zoom={8}
        placeholder={<MapPlaceholder />}
        minZoom={8}
      >
        <TileLayer
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <>
          {multipleMarkers && multipleLocationData && (
            <MarkerClusterGroup>
              {multipleLocationData.map(
                (loc, index) =>
                  loc.status === 'Available' && (
                    <Marker
                      key={index}
                      position={[loc.location.latitude, loc.location.longitude]}
                    >
                      <Popup>
                        {loc.name} <br /> {loc.location.locationName}
                      </Popup>
                    </Marker>
                  )
              )}
            </MarkerClusterGroup>
          )}
          {singleMarker && singleLocationData && (
            <Marker
              position={[
                singleLocationData.latitude,
                singleLocationData.longitude,
              ]}
            >
              <Popup>{singleLocationData.locationName}</Popup>
            </Marker>
          )}
        </>
      </MapContainer>
    </>
  );
};

export default index;
