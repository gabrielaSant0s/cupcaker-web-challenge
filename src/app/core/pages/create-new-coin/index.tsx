import React, {useContext} from 'react'

import { Panel, Typography, TypographyVariant } from 'components/atoms'
import styles from '../home/styles.module.scss'
import InputQuantity from 'components/atoms/input-quantity'
import SelectCoin from 'components/atoms/select-coin'
import FieldPrice from 'components/atoms/field-price'
import { Grid, Box} from '@mui/material'
import BotaoAdd from 'components/atoms/button-add'
import LetraInicial from 'components/atoms/letra-inicial'
import {ConnectSelectProvider} from "../../../../contexts/index"
import TextCoin from 'components/atoms/text-coin'


const CreateNewCoin = (): JSX.Element => {
    
   

    function aoEnviarForm({dados={}}){
        console.log(dados);
    }
    

    return(
        <div className={styles.container}>
            <Typography text="Add New Coin" variant={TypographyVariant.h3} />
            <Panel className={styles.panel}>
            <ConnectSelectProvider>
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
                                <FieldPrice />
                            </Box>
                            <InputQuantity/>
                       
                    </Grid>    
                    <Grid
                    container
                    sx={{width:"40%", 
                        height:"80%",
                        justifyContent:"center", 
                        alignItems:"center", 
                        marginTop:"5%"
                     }}>
                        
                            <LetraInicial/>
                        
                        <Grid container >
                            <TextCoin/>
                        </Grid>
                    </Grid>
                    <Box>
                        <BotaoAdd/>
                    </Box>              
               </Grid>
               </ConnectSelectProvider>
            </Panel>
        </div>
    )
}

export default CreateNewCoin


 
