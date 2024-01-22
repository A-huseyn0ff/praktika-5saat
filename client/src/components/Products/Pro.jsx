import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import './pro.scss'
import { wishlistContext } from '../../context/wishlist'
import { Link } from 'react-router-dom'
const Pro = () => {
    const {addtowishlist}=useContext(wishlistContext)
    const [data, setdata] = useState([])

    const fetchdata=async()=>{
const res=await axios.get('http://localhost:4000/product')
setdata(res.data)
    }

    useEffect(()=>{
        fetchdata()
    },[])
  return (
   <section className='product'>
    <div className='con'>
        <div className='txt'>
            <span></span>
            <h2>Popular Courses</h2>
        </div>
        <div className='product_row'>
           {data && data.map(item=>(
            <div className='col' key={item._id}>
<img src={item.image} alt="" />
<h2>{item.name}</h2>
<p>Adobe Guide, Layes, Smart Objects etc...</p>

<div className='icons'>
    <i class="fa-solid fa-heart" onClick={()=>addtowishlist(item)}></i>
    <Link to={`/detail/${item._id}`}><i class="fa-solid fa-eye" ></i></Link>
</div>
<div className='col_bottom'>
    <img src="https://preview.colorlib.com/theme/course/images/author.jpg" alt="" />
    <p>Michael Smith, Author</p>
    <span>${item.price}</span>
</div>
            </div>
           ))}
        </div>
    </div>
   </section>
  )
}

export default Pro
