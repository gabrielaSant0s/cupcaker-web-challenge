import React,{useContext,useEffect, useState} from "react";
import ConnectSelect from "contexts";



const PegaForm = ({label = "ADD NEW COIN"}): JSX.Element => {
    const{sendForm}=useContext(ConnectSelect)
    const[formNewC,setFormNewC]=useState({})

    console.log("pegaform", sendForm);

    useEffect(()=>{
        setFormNewC(sendForm)
    })
    
    console.log("formNewC", formNewC);

    return(<></>)
}

export default PegaForm