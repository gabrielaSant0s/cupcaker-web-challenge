import React from 'react'

import { Panel, Typography, TypographyVariant } from 'components/atoms'
import { EmptyState, EmptyStateType } from 'components/molecules'

import styles from '../home/styles.module.scss'
import InputQuantity from 'components/atoms/input-quantity'
import SelectCoin from 'components/atoms/select-coin'
import FieldPrice from 'components/atoms/field-price'
import { Container, Grid, Box} from '@mui/material'
import BotaoAdd from 'components/atoms/button-add'
import LetraInicial from 'components/atoms/letra-inicial'


const CreateNewCoin = (): JSX.Element => {
    return(
        <div className={styles.container}>
            <Typography text="Add New Coin" variant={TypographyVariant.h3} />
            <Panel className={styles.panel}>
                <Grid 
                container 
                sx={{width:"100%",
                    height:"100%", 
                    justifyContent:"center"}}>
                    <Grid
                    container
                    sx={{width:"50%", 
                        height:"60%", 
                        marginTop:"10%", 
                        marginRight:"5%",
                        justifyContent:"center"}}>
                        <SelectCoin/>
                        <Box sx={{width:"100%",
                                marginTop:"-5%"}}>
                            <FieldPrice/>
                        </Box>
                        <InputQuantity/>
                    </Grid>    
                    <Grid
                    container
                    sx={{width:"40%", 
                        height:"80%",
                        justifyContent:"center", 
                        alignItems:"center", 
                        marginTop:"5%" }}>
                        <LetraInicial/>
                        <Box>
                            <p style={{fontFamily:"Inter",
                                         width:"100%", 
                                         fontSize:"18px", 
                                         marginBottom:"25%", 
                                         textAlign:"center", 
                                         color:"#3E3E3E"}}>
                            Dogecoin (DOGE), seen by some as the original “memecoin,” 
                            caused a stir in 2021 as the price of the coin skyrocketed. 
                            The coin, which uses an image of the Shiba Inu as its avatar, 
                            is accepted as a form of payment by some major companies, 
                            including the Dallas Mavericks, Kronos, and—perhaps most 
                            notably—SpaceX, an American aerospace manufacturer owned by 
                            Elon Musk.</p>   
                        </Box>
                    </Grid>
                    <Box>
                        <BotaoAdd/>
                    </Box>
                   
                    
                </Grid>
            </Panel>
        </div>
    )
}

export default CreateNewCoin