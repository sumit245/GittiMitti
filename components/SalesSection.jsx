import { Divider } from '@mui/material'
import React from 'react'

export default function SalesSection() {
  return (
    <div style={{
        flex: 1,
        backgroundColor: "#ededed",
        display: "flex",
      }}>
      <div className='sellerBox' style={{marginLeft:"5vh",width:"37vw"}}>

        <p style={{fontWeight:"bold"}}>SALES PER DAY</p>
        <Divider/>
        <img src='../src/image.png'></img>

      </div>
      <div className='sellerBox' style={{marginLeft:"5vh",width:"37vw"}}>

      <p style={{fontWeight:"bold"}}>ORDER THIS MONTH</p>
      <Divider/>
      <p style={{textAlign:"center", padding:"5vh"}}>No data found</p>
      </div>
    </div>
  )
}
