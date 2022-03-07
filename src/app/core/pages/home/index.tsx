import React, { useContext } from 'react'

import { Panel, Typography, TypographyVariant } from 'components/atoms'
import { EmptyState, EmptyStateType } from 'components/molecules'

import styles from './styles.module.scss'

import PegaForm from 'components/atoms/pega-form'
import ButtonAdd from "../../../../components/atoms/button-add"

import { Grid } from '@mui/material'
import { useHistory } from 'react-router-dom'

const Home = (): JSX.Element => {
  const history = useHistory()

  
  
  return (
    
      <div className={styles.container}>
        <Grid container
        sx={{
        width:"100%",
        direction:"row",
        justifyContent:"space-between",
        alignItems:"center"}}>
          <Typography text="Watchlist" variant={TypographyVariant.h3} />
          <Grid  
           onClick={(event)=>{
            event.preventDefault();
            history.push("/add-new-coin")
            
        }}>
            <ButtonAdd/>
          </Grid>
        </Grid>
        
        <Panel className={styles.panel}>
          <EmptyState type={EmptyStateType.emptyWallet} />
        </Panel>
        <PegaForm/>
      </div>
    
  )
}


export default Home
