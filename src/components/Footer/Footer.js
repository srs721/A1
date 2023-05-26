import React from 'react'
import Box from '@mui/material/Box';
import { Grid, List, ListItemText, Typography } from '@mui/material'
import FaceBookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'

export default function Footer() {
  return (
    <Box sx={{
      background:"#1976d2",
      p:{ xs: 4, md: 10},
      pt: 12,
      pb: 12,
      fontSize: {xs: '12px', md: '14px'}

    }}>
      <Grid container spacing = {2} justifyContent="center">
        <Grid item md={6} lg={4}>
          <Typography 
          variant="body1"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.2rem',
            color: 'white',
            textDecoration: 'none',
          }}
        >
          ABOUT US</Typography>
          <Typography sx={{color:"white"}}variant="caption2">
          “Customers don’t expect you to be perfect. They do expect you to fix things when they go wrong.” -Donald Porter, VP at British Airways
          </Typography>

          <Box sx={{ mt: 4}}>
            <FaceBookIcon sx={{mr:1}} />
            <InstagramIcon sx={{mr:1}} />
            <TwitterIcon sx={{mr:1}} />
          </Box>
        </Grid>
        <Grid item md={6} lg={2}>
          <Typography 
          variant="body1"         
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.2rem',
            color: 'white',
            textDecoration: 'none',
          }}
        >
        INFORMATION</Typography>
          <List>
            <ListItemText>
              <Typography sx={{color:"white"}}lineHeight={2} variant= "caption2">
                About Us
              </Typography>
            </ListItemText>

            <ListItemText>
              <Typography sx={{color:"white"}}lineHeight={2} variant= "caption2">
                Order Tracking
              </Typography>
            </ListItemText>

            <ListItemText>
              <Typography sx={{color:"white"}}lineHeight={2} variant= "caption2">
                Privacy & Policy
              </Typography>
            </ListItemText>

            <ListItemText>
              <Typography sx={{color:"white"}}lineHeight={2} variant= "caption2">
                Terms and Conditions
              </Typography>
            </ListItemText>
          </List>
        </Grid>
        <Grid item md={6} lg={2}>
          <Typography
          variant="body1"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.2rem',
            color: 'white',
            textDecoration: 'none',
          }}
        >MY ACCOUNT</Typography>
          <List>
            <ListItemText>
              <Typography sx={{color:"white"}}lineHeight={2} variant= "caption2">
               Login
              </Typography>
            </ListItemText>

            <ListItemText>
              <Typography sx={{color:"white"}}lineHeight={2} variant= "caption2">
                My Cart
              </Typography>
            </ListItemText>

            <ListItemText>
              <Typography sx={{color:"white"}}lineHeight={2} variant= "caption2">
                My Account
              </Typography>
            </ListItemText>

            <ListItemText>
              <Typography sx={{color:"white"}}lineHeight={2} variant= "caption2">
                Wishlist
              </Typography>
            </ListItemText>
          </List>    
        </Grid>
      </Grid>
    </Box>
    
  )
}
