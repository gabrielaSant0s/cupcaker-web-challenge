import { createContext, useState, useEffect } from "react";

type ConnectType = {
  coin: string;
};

type PropConnectContext = {
  coin: string,
  setCoin: React.Dispatch<React.SetStateAction<string>>,
};

const DEFAULT_VALUE = {
  coin: "",
  setCoin: () => "",
};


export const ConnectSelect = createContext<PropConnectContext>(DEFAULT_VALUE);

const ConnectSelectProvider: React.FC = ({children}) => {
  const [coin,setCoin]=useState(DEFAULT_VALUE.coin)


  return(
    <ConnectSelect.Provider value={{coin,setCoin}}>
      {children}
    </ConnectSelect.Provider>

  )

}

export {ConnectSelectProvider}
export default ConnectSelect