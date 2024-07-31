import ImageSlider from '../components/ImageSlider'
import Menu from '../components/Menu'
import React from 'react'
import Service from '../components/Service'

export default function NewHome() {
  return (
    <>
    <div style={{display:"flex", flexDirection:"row", margin:"5vh", width:"80vw",height:"60vh", justifyContent:"center"}}>
      <Menu/>
      <ImageSlider/>
    </div>
    <Service/>
    </>
  )
}
