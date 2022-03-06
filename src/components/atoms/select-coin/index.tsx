import { MenuItem, Select, InputLabel, Container, FormHelperText, Grid, Box} from "@mui/material";
import React, {useState,useEffect,useContext} from "react";
import { number } from "yup";
import LetraInicial from "../letra-inicial";
import ConnectSelect from "contexts";




const SelectCoin = (): JSX.Element => {
    const {coin,setCoin} = useContext(ConnectSelect)
    const [erros,setErros]=useState({coin:{valido:true,texto:""}})
    

    function mudanca(){
        return  (   <Select
                    id="meuselect"
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
                    <MenuItem value={1}>Bitcoin</MenuItem>
                    <MenuItem value={2}>Ethereum</MenuItem>
                    <MenuItem value={3}>Dogecoin</MenuItem>

                </Select>)
    }
    
    
    
    
    return(
        <Container maxWidth="sm">
            <form>            
                <InputLabel sx={{color:'#3E3E3E',fontFamily:"Ubuntu"}}>Coin</InputLabel>
                {mudanca()}
                <FormHelperText sx={{color:"red"}}>{erros.coin.texto}</FormHelperText>
            </form>
           
        </Container>
    )
}

export default SelectCoin


