import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Grid,Divider} from '@mui/material';



export  function Cards(props) {
    console.log(props)
  return (
      <>
      <Grid container sx={{ pt:"1rem",justifyContent:"space-between"}}>
      {props.products.map((item)=>(
    <Box sm={12} key={item.product_name}sx={{ py:"3rem" ,px:"5rem", width: 400 }}>
      <Card id="shopItems"  variant="outlined">
      <CardContent>
      <Typography sx={{}} variant="h5" component="div">
      {item.product_name}
      </Typography>
      <Divider/>
      <Typography sx={{pt:'.5rem', mb: 1.5 }} color="text.secondary">
        {item.stock}
      </Typography>
      <Typography variant="body2">
      {item.price}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
      </Card>
    </Box>

      ))}
      </Grid>
    </>
  );
}
