import { createContext, useState } from "react";


export const wishlistContext=createContext()

const WishlistProvider=({children})=>{
    const [wishlist, setwishlist] = useState(localStorage.getItem('wishlist') ? JSON.parse(localStorage.getItem('wishlist')):[])
    localStorage.setItem('wishlist',JSON.stringify(wishlist))

    function addtowishlist(item) {
        const existedproduct=wishlist.find(x=>x._id ===item._id)
        if (!existedproduct) {
            setwishlist([...wishlist,item])
            return
        }
        deletefromwishlist(item._id)
    }

    function deletefromwishlist(id) {
        setwishlist(wishlist.filter(item=>item._id !==id))
    }
    const data={
        wishlist,
        setwishlist,
        addtowishlist,
        deletefromwishlist
    }
    return(
        <wishlistContext.Provider value={data}>
            {children}
        </wishlistContext.Provider>
    )
}

export default WishlistProvider