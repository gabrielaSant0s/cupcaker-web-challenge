import { Grid, Typography} from "@mui/material";
import { Box } from "@mui/system";
import LetraInicial from "components/atoms/letra-inicial";
import ConnectSelect from "contexts";
import React, { useContext } from "react";

const RowCoin = (): JSX.Element => {
    const {sendForm} = useContext(ConnectSelect)
    const price = sendForm["price"]
    const date = sendForm["date"]
    const name = sendForm["name"]
    const quant = sendForm["quantity"]
    
    const multi = quant*price
    

    return(
    <Grid container sx={{width:"70em", marginBottom:"40%",direction:"row", height:"7.5em", borderBottom:"solid 2px #EEEEEE"}}>
        <Grid sx={{ marginLeft:"5%"}}>
            <LetraInicial/>
        </Grid>
        <Grid container 
                direction="column"
                justifyContent="space-between"
                alignItems="flex-start" 
                sx={{ marginLeft:"5%", width:"25%"}}>
            <Box sx={{marginRight:"10%"}}>
                <Typography  sx={{fontFamily:"inter", fontWeight:"500", fontSize:"2em", color:"#3E3E3E"}}>{name}</Typography>
            </Box>
            <Box>
                <Typography  sx={{fontFamily:"inter", fontWeight:"400",fontSize:"1em", marginBottom:"20%", color:"#3E3E3E"}}>Added {date}</Typography>
            </Box>
            
        </Grid>
        <Grid container justifyContent="center" sx={{bgcolor:"#0058FF", width:"20%", height:"35%", marginLeft:"30%", marginTop:"3%", borderRadius:"16px"}}>
        <Typography  sx={{fontFamily:"inter", fontWeight:"400",fontSize:"1.2em", marginBottom:"20%", color:"#FFFFFF", marginTop:"3%"}}>
            R${multi}</Typography>
            
        </Grid>
           
        
    </Grid>
        
    )
}

export default RowCoin