import React from "react";
import {Box, Typography} from "@mui/material"
import ProductList from "./ProductList"

export default function Products(){


    return(
<>
        <Typography sx={{textAlign: 'center', fontSize: 50}} variant="subtitle2"> Our Products </Typography>
     
        <Box>
          
            <ProductList />
        </Box>
      
        </>
        
    );
}