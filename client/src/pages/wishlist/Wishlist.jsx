import React, { useContext } from 'react'
import { wishlistContext } from '../../context/wishlist'
import { Helmet } from 'react-helmet'

const Wishlist = () => {
    const {wishlist,deletefromwishlist}=useContext(wishlistContext)
  return (
   <>
   <Helmet>
<title>Wishlist</title>
</Helmet>
{wishlist && wishlist.map(item=>(

    
       <div className='col'>
       <img src={item.image} alt="" />
       <h2>{item.name}</h2>
       <p>Adobe Guide, Layes, Smart Objects etc...</p>
       
       <div className='icons'>
           
           <i class="fa-solid fa-trash" onClick={()=>deletefromwishlist(item._id)}></i>
       </div>
       <div className='col_bottom'>
           <img src="https://preview.colorlib.com/theme/course/images/author.jpg" alt="" />
           <p>Michael Smith, Author</p>
           <span>${item.price}</span>
       </div>
                   </div>
))}
   </>
  )
}

export default Wishlist
