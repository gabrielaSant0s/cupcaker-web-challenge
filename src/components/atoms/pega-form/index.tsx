import React,{useContext,useEffect, useState} from "react";
import ConnectSelect from "contexts";
import Home from "app/core/pages/home";



const PegaForm = (): JSX.Element => {
    const{sendForm}=useContext(ConnectSelect)
    const {listaState, setListaState} = useContext(ConnectSelect)
    

    console.log(listaState,"listaaaaa");
    
    return(
    <>
        
    </>)
}

export default PegaForm