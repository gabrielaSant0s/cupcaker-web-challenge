import { MenuItem, Select, InputLabel, Container, FormHelperText} from "@mui/material";
import React, {useState} from "react";


const SelectCoin = (): JSX.Element => {
    const [coin,setCoin]=useState("")
    const [erros,setErros]=useState({coin:{valido:true,texto:""}})
    console.log(coin);
    
    console.log(erros);
    
    return(
        <Container maxWidth="sm">
            <form
                onSubmit={(event) =>{
                    event.preventDefault();
                }}
            >
                <InputLabel sx={{color:'#3E3E3E',fontFamily:"Ubuntu"}}>Coin</InputLabel>
                <Select
                    value={coin}
                    onChange ={(event)=>{
                        setCoin(event.target.value)
                    }}
                    onBlur={(event)=>{
                        if (coin !== ""){
                            setErros({coin:{valido:true,texto:""}})
                          }else{
                            setErros({coin:{valido:false,texto:"Coin must be filled!"}})}
                    }}
                error={!erros.coin.valido}
                fullWidth
                size="small">
                    <MenuItem value={10}>Ten</MenuItem>
                </Select>
                <FormHelperText sx={{color:"red"}}>{erros.coin.texto}</FormHelperText>
            </form>
        </Container>
    )
}

export default SelectCoin