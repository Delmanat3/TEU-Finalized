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
import { QUERY_ALL_PRODUCTS } from "../../utils/queries";
import PatternIcon from '@mui/icons-material/Pattern';
import PersonAddAltSharpIcon from '@mui/icons-material/PersonAddAltSharp';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import Auth from '../../utils/auth';
import Cart from '../Cart';
export  function Nav(props) {
  const Balls="https://coffee-crew.herokuapp.com"
  const { loading, data } = useQuery(QUERY_ALL_PRODUCTS);
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
          <Typography variant="h6"  sx={{color:"white", flexGrow: 1,fontFamily:"Montserrat" }}>
            Coffee Crew 
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="primary"
            aria-label="menu"
            href="/Login"
            sx={{ mr: 2, fontSize:"14px"}}
          >
           Login <PatternIcon/>
          </IconButton>
          <IconButton
            size="large"
            edge="start"
            color="primary"
            aria-label="menu"
            href="/SignUp"
            sx={{ mr: 2, fontSize:"14px"}}
          >
           Sign Up <PersonAddAltSharpIcon/>
          </IconButton>
          {Auth.loggedIn() ? (
          <IconButton
            size="large"
            edge="start"
            color="primary"
            aria-label="menu"
            href="/Checkout"
            sx={{ mr: 2, fontSize:"14px"}}
          >
           <ShoppingCartSharpIcon/>
          </IconButton>
          
           ) : (
            <div></div>
            )}
        </Toolbar>
      </AppBar>
    </Box>
    <><Jumbo {...props}/></>
    </>
  );
}
