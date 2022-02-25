import React from "react";
import {Container, InputLabel, TextField} from "@mui/material"



const InputQuantity = (): JSX.Element => {
    return (
      <Container maxWidth="sm">
        <form>
            <InputLabel sx={{color:'#3E3E3E',fontFamily:"Inter"}}>Quantity</InputLabel>
            <TextField id="input-quantity" variant="outlined" type="number" fullWidth/>
        </form>
      </Container>
    )
  }
  
  export default InputQuantity