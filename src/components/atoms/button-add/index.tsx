import React from "react";
import { Container, Button, Typography } from "@mui/material";

const label = "ADD NEW COIN"

const BotaoAdd = (): JSX.Element => {
    return(
       <Container maxWidth="sm">
           <Button variant="contained" 
           sx={{bgcolor:"#0341B6",width:"327px",height:"40px"}}>
               <Typography 
               sx={{fontFamily:"Inter", color:"#FFFFFF", fontWeight: "500"}}>{label}</Typography>
            </Button>
       </Container>
    )
}

export default BotaoAdd