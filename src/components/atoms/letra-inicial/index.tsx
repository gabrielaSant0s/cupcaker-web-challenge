import React, { useState, useContext } from "react";
import { Avatar, Typography} from "@mui/material";
import { ConnectSelect } from "../../../contexts/index"



const LetraInicial = (): JSX.Element => {
    const {coin,setCoin} = useContext(ConnectSelect)
    
    function connectSelectWithLetters(coin=""){
    
        if (coin == "1"){
            const letra="B"
            return letra
        } else if (coin == "2"){
            const letra="E"
            return letra
        } else if (coin == "3"){
            const  letra="D"
            return letra
        }else{
            const  letra=""
            return letra
        }}
    
    return(
        <>
            <Avatar 
            sx={{ bgcolor: "#05C9BF",
                 width:"104px",
                 height:"104px"}}>
                     <Typography
                     variant="h3" 
                     sx={{fontFamily:"Inter", color:"#000000", fontWeight: "700"}}>{connectSelectWithLetters(coin)}</Typography>
            </Avatar>
        </>
    )
}

export default LetraInicial;

