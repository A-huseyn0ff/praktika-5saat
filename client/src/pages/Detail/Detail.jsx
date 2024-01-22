import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useParams } from 'react-router-dom'

const Detail = () => {
    const [detail, setdetail] = useState([])
    const {id}=useParams()

    const fetchdetail=async()=>{
        const res=await axios.get(`http://localhost:4000/product/${id}`)
        setdetail(res.data)
    }
    useEffect(()=>{
        fetchdetail()
    },[]
       
    )
  return (
    <>
    {detail ? (
        <>
        <Helmet>
               
        <title>{detail.name}</title>
       
    </Helmet>
        <div className='col' key={detail._id}>
            <img src={detail.image} alt="" />
            <h2>{detail.name}</h2>
            <p>${detail.price}</p>
        </div>
        </>
    ):<></>}
    </>
  )
}

export default Detail
