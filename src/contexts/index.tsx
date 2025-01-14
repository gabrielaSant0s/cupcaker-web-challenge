import { createContext, useState, useEffect } from "react";

type ConnectType = {
  coin: string,
  quantity: string,
  sendForm: any
  listaState:string[]
};

type PropConnectContext = {
  coin: string,
  setCoin: React.Dispatch<React.SetStateAction<string>>,
  quantity: string,
  setQuantity: React.Dispatch<React.SetStateAction<string>>,
  sendForm: any,
  setSendForm: React.Dispatch<React.SetStateAction<any>>,
  listaState: string[],
  setListaState:React.Dispatch<React.SetStateAction<any>>
  
};

const DEFAULT_VALUE = {
  coin: "",
  setCoin: () => "",
  quantity:"",
  setQuantity: () => "",
  sendForm: {},
  setSendForm:() => {[]},
  listaState: [],
  setListaState:() => []
};


export const ConnectSelect = createContext<PropConnectContext>(DEFAULT_VALUE);

const ConnectSelectProvider: React.FC = ({children}) => {
  const [coin,setCoin]=useState(DEFAULT_VALUE.coin)
  const [quantity, setQuantity] =useState(DEFAULT_VALUE.quantity)
  const [sendForm, setSendForm] = useState(DEFAULT_VALUE.sendForm)
  const [listaState,setListaState]=useState(DEFAULT_VALUE.listaState)

  console.log("quantity", quantity);
  console.log("select", coin);

  return(
    <ConnectSelect.Provider value={{coin,setCoin,quantity,setQuantity,sendForm,setSendForm,listaState,setListaState}}>
      {children}
    </ConnectSelect.Provider>

  )

}

export {ConnectSelectProvider}
export default ConnectSelect