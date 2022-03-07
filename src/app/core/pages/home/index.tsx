import React, { useContext } from 'react'

import { Panel, Typography, TypographyVariant } from 'components/atoms'
import { EmptyState, EmptyStateType } from 'components/molecules'

import styles from './styles.module.scss'
import  { ConnectSelect } from 'contexts'



const Home = (): JSX.Element => {
  const {sendForm} = useContext(ConnectSelect)

  console.log(sendForm, "sendForm");
  
  return (
    
      <div className={styles.container}>
        <Typography text="Watchlist" variant={TypographyVariant.h3} />
        <Panel className={styles.panel}>
          <EmptyState type={EmptyStateType.emptyWallet} />
        </Panel>
      </div>
    
  )
}


export default Home
