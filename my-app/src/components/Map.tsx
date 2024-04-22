'use client';
import React, { useRef, useEffect, useState } from 'react';
import * as maptilersdk from '@maptiler/sdk';
import '@maptiler/sdk/dist/maptiler-sdk.css';
import process from 'process';

export default function Map() {
  const mapContainer = useRef(null);
  const map = useRef<maptilersdk.Map | null>(null);
  const beerse = { lng: 4.85304, lat: 51.31927 };
  const [zoom] = useState(9);

  useEffect(() => {
    const initializeMap = async () => {
      try {
        // const apiKey = await getApiKey();
        maptilersdk.config.apiKey = process.env.NEXT_PUBLIC_MAPTILER_KEY || '';

        if (!map.current) {
          map.current = new maptilersdk.Map({
            container: mapContainer.current!,
            style: maptilersdk.MapStyle.STREETS,
            center: [beerse.lng, beerse.lat],
            zoom: zoom,
          });
        }
      } catch (error) {
        console.error('Error initializing map:', error);
      }
    };

    initializeMap();

    // Cleanup function
    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, [beerse.lng, beerse.lat, zoom]);

  return (
    <div className='relative w-[300px] h-[300px]'>
      <div ref={mapContainer} className='absolute w-[300px] h-[300px]' />
    </div>
  );
}
