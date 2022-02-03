import * as React from 'react';
import {Stack,TextField} from '@mui/material';


export  function Search() {
  return (
    <Stack
    id="search"
      component="form"
      sx={{
        width: '40ch'
       
      }}
      spacing={2}
      noValidate
      autoComplete="off"
    >
      <TextField
        hiddenLabel
        fullWidth
        placeholder="Search"
        variant="filled"
        sx={{ backgroundColor:"white"}}
      />
    </Stack>
  );
}
