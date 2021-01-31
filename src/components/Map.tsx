import mapboxgl from 'mapbox-gl';
import React, { ReactNode, useEffect, isValidElement, cloneElement } from 'react'

interface MapProps {
  children: ReactNode
}

export const Map: React.FC<MapProps> = (props) =>{
  const [mapboxMap, setMapboxMap] = React.useState<mapboxgl.Map | undefined>(undefined)

  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoiZHJld2hnb29kIiwiYSI6ImNrMzF5YXZxdTBlYTIzbG5xOXFubjZxb2wifQ.6wMo0Z9iKDGzmpTEAfl6BA';
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-74.5, 40],
      zoom: 9
    });
    setMapboxMap(map)
  }, [])

  const childrenWithProps = React.Children.map(props.children, child => {
    if (isValidElement(child)) {
      return cloneElement(child, { map: mapboxMap });
    }
    return child;
  });

  return ( 
    <div id='map'>
      {childrenWithProps}
    </div>
  );
}