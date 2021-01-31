import React, {useEffect} from 'react'
import mapboxgl from 'mapbox-gl'

interface ClickProps {
  map?: mapboxgl.Map
  onClick: (e: mapboxgl.MapMouseEvent & mapboxgl.EventData) => void
}

export const Click: React.FC<ClickProps> = ({map, onClick}) =>{
  useEffect(() => {
    if (!map) return

    map.on('click', onClick)
    
    return () => { map.off('click', onClick) };
  }, [map, onClick])
  return (
    <></>
  );
}