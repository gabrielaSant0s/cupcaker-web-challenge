import { Container , InputLabel, TextField} from "@mui/material";
import React, {useState, useContext} from "react";
import ConnectSelect from "contexts";



const FieldPrice = ({preco=""}): JSX.Element => {
  const {coin, sendForm, setSendForm} = useContext(ConnectSelect)

  const dadosAddCoin = [{
    label: "Bitcoin",
    value: {
        id: 1,
        name: "Bitcoin",
        description: "Bitcoin is a decentralized digital currency, without a central bank or single administrator, that can be sent from user to user on the peer-to-peer bitcoin network without the need for intermediaries.",
        price: 223483.32
    }
},
{
    label: "Ethereum",
    value: {
        id: 2,
        name: "Ethereum",
        description: "Ethereum is a technology that's home to digital money, global payments, and applications. The community has built a booming digital economy, bold new ways for creators to earn online, and so much more. It's open to everyone, wherever you are in the world – all you need is the internet.",
        price: 215262.18
    }
},
{
    label: "Dogecoin",
    value: {
        id: 3,
        name: "Dogecoin",
        description: "Dogecoin (DOGE), seen by some as the original “memecoin,” caused a stir in 2021 as the price of the coin skyrocketed. The coin, which uses an image of the Shiba Inu as its avatar, is accepted as a form of payment by some major companies, including the Dallas Mavericks, Kronos, and—perhaps most notably—SpaceX, an American aerospace manufacturer owned by Elon Musk.",
        price: 0.74
    }
}]

      if (coin == "1"){
        preco = String(dadosAddCoin[0]["value"]["price"])
    } else if (coin == "2"){
        preco = String(dadosAddCoin[0]["value"]["price"])
    } else if (coin == "3"){
        preco = String(dadosAddCoin[0]["value"]["price"])
    }else{
        preco="0"
    }

    const precoAuxiliar = String(preco)
    const [price,setPrice]=useState(precoAuxiliar)
    
    return (
      <Container maxWidth="sm">
        <form 
          onSubmit={(event) =>{
            event.preventDefault();}}
        >            
            <InputLabel sx={{color:'##AFAFAF',fontFamily:"Inter"}}>Price</InputLabel>
            <TextField 
            sx={{height:"10px"}}
            value={preco}
            onChange ={(event)=>{
              setPrice(event.target.value)
            }}
            disabled
            id="field-price" 
            variant="outlined"  
            fullWidth
            size="small"/>
        </form>
      </Container>
    )
}

export default FieldPrice