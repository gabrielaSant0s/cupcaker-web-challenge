import React,{useContext} from "react";
import { Container, Button, Typography } from "@mui/material";
import ConnectSelect from "contexts";
import { useHistory } from "react-router-dom";



const BotaoAdd = ({label = "ADD NEW COIN"}): JSX.Element => {
    const {coin,quantity,sendForm,setSendForm} = useContext(ConnectSelect)
    const history = useHistory()
    
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
  function formAddNewCoin(coin="", quantity=""){
    
    const date="07-03-2022"
    if (coin == "1"){
      const name = dadosAddCoin[0]["value"]["name"]
      const description = dadosAddCoin[0]["value"]["description"]
      const price = dadosAddCoin[0]["value"]["price"]
      return {name, description, price, quantity,date}
    }else if(coin== "2"){
      const name = dadosAddCoin[1]["value"]["name"]
      const description = dadosAddCoin[1]["value"]["description"]
      const price = dadosAddCoin[1]["value"]["price"]
      return {name, description, price, quantity,date}

    }else if(coin== "3"){
        const name = dadosAddCoin[2]["value"]["name"]
        const description = dadosAddCoin[1]["value"]["description"]
        const price = dadosAddCoin[1]["value"]["price"]
        return {name, description, price, quantity,date}
    }else{
        const name = ""
        const description = ""
        const price = 0
        const quantity = ""
        return {name, description, price, quantity,date}}
        
  }

  console.log(sendForm);
  

    return(
       <Container maxWidth="sm">
           <Button 
            onClick={(event)=>{
                setSendForm(formAddNewCoin(coin,quantity))
                
                
            }}
           variant="contained" 
           sx={{bgcolor:"#0341B6",width:"327px",height:"40px"}}>
               <Typography 
               sx={{fontFamily:"Inter", color:"#FFFFFF", fontWeight: "500"}}>{label}</Typography>
            </Button>
       </Container>
    )
}

export default BotaoAdd

