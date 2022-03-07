import React, { useState,useContext} from "react";
import {Container, InputLabel, TextField} from "@mui/material"
import ConnectSelect from "contexts";

const InputQuantity = (): JSX.Element => {
  const {quantity,setQuantity}=useContext(ConnectSelect)

  const [erros,setErros]=useState({quantity:{valido:true, texto:""}})

  
  
    return (
      <Container maxWidth="sm">
        <form 
          onSubmit={(event) =>{
            event.preventDefault();}}
        >            
            <InputLabel sx={{color:'#3E3E3E',fontFamily:"Inter"}}>Quantity</InputLabel>
            <TextField 
            value={quantity}
            onChange ={(event)=>{
              setQuantity(event.target.value)
            }}
            onBlur={(event)=>{
              if (quantity.length>0){
                setErros({quantity:{valido:true,texto:""}})
              }else{
                setErros({quantity:{valido:false,texto:"Quantity must be filled!"}})}
            }}

            error={!erros.quantity.valido}
            helperText={erros.quantity.texto}
            id="input-quantity" 
            variant="outlined" 
            type="number" 
            fullWidth
            size="small"/>
        </form>
      </Container>
    )
  }
  
  export default InputQuantity