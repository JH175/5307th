import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken =
  'pk.eyJ1IjoiamgxNzUiLCJhIjoiY2t3eTlwbnNrMGozbTJvcXZmYzIwaWkyciJ9.Ez4_u57k7BFDx2i4CkM2Dw';

function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(94.27);
  const [lat, setLat] = useState(22.91);
  const [zoom, setZoom] = useState(4.5);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/jh175/cl661clt6000814pt5v1e8blu',
      center: [lng, lat],
      zoom: zoom,
      attributionControl: false,
    });
  });

  return (
    <div>
      <div>
        <div ref={mapContainer} className='mx-auto h-[35rem]' />
      </div>
    </div>
  );
}

export default Map;
