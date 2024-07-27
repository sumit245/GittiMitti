import { Divider } from '@mui/material'
import React from 'react'

export default function ProductDetails() {
  return (
    <div style={{
        flex: 1,
        backgroundColor: "#ededed",
        display: "flex",
      }}>

      <div className='sellerBox' style={{marginLeft:"5vh",width:"24vw", marginBottom:"2vh"}}>
      <p style={{fontWeight:"bold"}}>MOST SOLD PRODUCTS</p>
      <Divider/>
      <p style={{textAlign:"center", padding:"5vh"}}>No data found</p>
      </div>

      <div className='sellerBox' style={{marginLeft:"5vh",width:"24vw", height:"50vh", marginBottom:"2vh"}}>
      <p style={{fontWeight:"bold"}}>MOST SOLD BRANDS</p>
      <Divider/>
      <p style={{textAlign:"center", padding:"5vh"}}>No data found</p>
      </div>

      <div className='sellerBox' style={{marginLeft:"5vh",width:"24vw", height:"50vh",  marginBottom:"2vh"}}>
      <p style={{fontWeight:"bold"}}>POPULAR COSTUMER</p>
      <Divider/>
      <p style={{textAlign:"center", padding:"5vh"}}>No data found</p>
      </div>
    </div>
  )
}
