import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Jumbo } from "../jumbotron";
import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "../../utils/queries";

export  function Nav(props) {
  const { loading, data } = useQuery(GET_PRODUCTS);
  if (loading) return "loading";
props = data;
  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar 
      color="transparent"
      sx={{backgroundColor:"black", opacity:".94"}}
      position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="primary"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{color:"white", flexGrow: 1 }}>
            coffeeCrew 
          </Typography>
          <Button sx={{color:"#1976D2"}} >Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
    <><Jumbo {...props}/></>
    </>
  );
}
