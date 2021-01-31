import React, {useEffect} from 'react'
import mapboxgl from 'mapbox-gl'

interface MoveProps {
  map?: mapboxgl.Map
  onMoveStart?: (e: mapboxgl.MapMouseEvent & mapboxgl.EventData) => void
  onMoveEnd?: (e: mapboxgl.MapMouseEvent & mapboxgl.EventData) => void
}


export const MapMove: React.FC<MoveProps> = ({ map, onMoveStart}) =>{
  const [isMoving, setIsMoving] = React.useState<boolean>(false)

  const handleMoveStart = (e: mapboxgl.MapMouseEvent & mapboxgl.EventData) => {
    if (!isMoving) {
      setIsMoving(true)
      onMoveStart && onMoveStart(e)
    }
  }

  // const handleMoveEnd = (e: mapboxgl.MapMouseEvent & mapboxgl.EventData) => {
  //   if (!isMoving) return
    
  //   setIsMoving(false)
  //   onMoveStart && onMoveStart(e)
  // }

  useEffect(() => {
    if (!map) return

    map.on('move', handleMoveStart)
    // map.on('moven', handleMoveStart)
    
    return () => { 
      map.off('move', handleMoveStart) 
    };
  }, [map, handleMoveStart])
  return (
    <></>
  );
}