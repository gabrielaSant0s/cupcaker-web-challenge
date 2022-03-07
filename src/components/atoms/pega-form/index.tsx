import React,{useContext,useEffect, useState} from "react";
import ConnectSelect from "contexts";
import Home from "app/core/pages/home";



const PegaForm = (): JSX.Element => {
    const{sendForm}=useContext(ConnectSelect)

    const lista = []
    lista.push(sendForm)
    console.log("lista sendForm", lista);
    

    return(
    <>
        
    </>)
}

export default PegaForm