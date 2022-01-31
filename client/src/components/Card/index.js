import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Grid,Divider} from '@mui/material';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Word of the Day
      </Typography>
      <Typography variant="h5" component="div">
        be{bull}nev{bull}o{bull}lent
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        adjective
      </Typography>
      <Typography variant="body2">
        well meaning and kindly.
        <br />
        {'"a benevolent smile"'}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </React.Fragment>
);

export  function Cards(props) {
    console.log(props)
  return (
      <>
      <Grid container>
      {props.products.map((item)=>(
    <Box sm={12} key={item.product_name}sx={{ py:"1rem" ,px:"2rem", width: 400 }}>
      <Card id="shopItems" variant="outlined">
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
