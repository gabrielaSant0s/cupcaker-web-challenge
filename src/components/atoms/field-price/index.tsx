import { Container , InputLabel, TextField} from "@mui/material";
import React, {useState} from "react";


const FieldPrice = (): JSX.Element => {
    const [price,setPrice]=useState("200,00")
    
    return (
      <Container maxWidth="sm">
        <form 
          onSubmit={(event) =>{
            event.preventDefault();}}
        >            
            <InputLabel sx={{color:'##AFAFAF',fontFamily:"Inter"}}>Price</InputLabel>
            <TextField 
            sx={{height:"10px"}}
            value={price}
            onChange ={(event)=>{
              setPrice(event.target.value)
            }}
            disabled
            id="field-price" 
            variant="outlined"  
            fullWidth
            size="small"/>
        </form>
      </Container>
    )
}

export default FieldPrice