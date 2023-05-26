import { Box, Grid, Typography,Rating} from '@mui/material'
import React from 'react'
import Button from '@mui/material/Button';

export default function ProductList() {

    const products = [
        {
          img: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
          name: "Ray Ban Sunglasses",
          description: "Not only do they look great, but they also provide excellent protection from the sun's harmful rays",
          price: "$90.00",
          shipping: "$5.95 for shipping",
          rating: 3.5,
        },
        {
            img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
            name: "Lee Women Jogging Set",
            description: "Lee Women Jogging Set",
                        
            price: "$120.00",
            shipping: "$5.95 for shipping",
            rating: 4.5,
        },
    
        {
            img: "https://images.unsplash.com/photo-1544816155-12df9643f363?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NjB8NDU4NTAwMXx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60",
            name: "Jute Bag",
            description: "Jute Bag",
                       
            price: "$40.00",
            shipping: "$5.95 for shipping",
            rating: 4.5,
        },  
        {
            img: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbiUyMG1lbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
            name: "Mens Beige Casual Blazer",
            description: "Mens Beige Casual Blazer",
            price: "$70.00",
            shipping: "$5.95 for shipping",
            rating: 3.0,
        }, 
        {
            img: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
            name: "Multi colored Shoes",
            description: "Multi colored Shoes",
            price: "$50.00",
            shipping: "$5.95 for shipping",
            rating: 5.0,
        }, 
        {
            img: "https://images.unsplash.com/photo-1562262199-f6b3dfb3ec43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGFwcGFyZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
            name: "Womens Hat",
            description: "Womens Hat",
            price: "$90.00",
            shipping: "$5.95 for shipping",
            rating: 2.5,
        }, 
    ];

  

  return (     
            <Grid sx={{mt:12, mb:7, p:2,pt:2,my:2}} container spacing={2} >
            
            {products.map(product=> (
            <Grid item md={3}> 
        
                 <Box 
                 sx={{width:"100%", height: "70%" ,borderRadius: '16px'}} 
                 component='img' 
                 src={product.img}
                 />
                 <Typography variant='h6' sx={{fontWeight: 'bold' }}>
                 {product.name}
                 </Typography>

                 <Typography variant='body'>
                     {product.description}
                 </Typography>

                 <Typography variant='h5' sx={{fontWeight: 'bold', color:'#ff6d00' }} >
                         {product.price}
                     </Typography>

                 <Typography display="block" variant='subtitle2'
                 sx={{fontWeight: "bold" ,color:"gray"}}>
                     {product.shipping}
                 </Typography> 
                
                 <Box sx={{
                     display: "flex", alignItems:"center"
                 }}>                
                 <Rating name="half-rating" defaultValue={product.rating} precision={0.5} />
                 <Typography>{product.rating}</Typography>
                 </Box>

                 <Box sx={{
                     display: "flex", alignItems:"center", mt:2, mr:2
                 }}>  
                 <Button variant="contained" onClick={() => {
                    alert('Item added to Cart');
                    }}
                 >ADD TO CART</Button>
                 <Button variant="outlined" onClick={() => {
                    alert('Item added to Wishlist');
                    }}>ADD TO WISHLIST</Button>
                 </Box>
                
             </Grid>    
             )) }
            </Grid>
          
  )
       
}
