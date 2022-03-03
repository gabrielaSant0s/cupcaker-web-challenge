import React, { useState } from "react";
import { Avatar, Typography} from "@mui/material";



const LetraInicial = ({letra="A"}): JSX.Element => {
    return(
        <>
            <Avatar 
            sx={{ bgcolor: "#05C9BF",
                 width:"104px",
                 height:"104px"}}>
                     <Typography
                     variant="h3" 
                     sx={{fontFamily:"Inter", color:"#000000", fontWeight: "700"}}>{letra}</Typography>
            </Avatar>
        </>
    )
}

export default LetraInicial;