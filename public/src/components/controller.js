import React, {useEffect, useState} from 'react';
import { useSelector } from "react-redux";
import { Grid, Col, Row, Theme} from '../theme'
import SensorTypes from './sensorTypes';
import Plants from './plants';
import Countdown from './countdown';

const Controller = ({phase, phases, target, player})=>{
    const [theme, socket, client, gameSettings, plantClusters, sensorTypes] = useSelector(state => 
        [ state.data.theme, 
          state.data.socket, 
          state.data.client, 
          state.data.gameSettings,
          state.data.plantClusters,
          state.data.sensorTypes
        ]);

    useEffect(()=>{
        // console.log(plantClusters)
    })

    
    if (!theme || !client || !gameSettings || !socket || !sensorTypes){
        return null;
    }  

    return <div>
                <br/>
                <p>
                    ||==================================||
                        &nbsp;&nbsp;&nbsp; BIOMODD [BRG<sup>13</sup>] SPECTRUM
                    ||==================================||
                </p>
                
                <div> 
                    GameStatus = {phase} 
                </div>
                <div>
                    {player? <span>PlayerColor = {player} </span> : null}
                </div>
                <div>
                    {(target && phase == phases.RUNNING)? <span> <Countdown target={target} displaytext={"Time remaining"} endText={"THE END"} /> </span> : null}
                </div>

                <br/>
                

                <SensorTypes />
                <Plants />
                {/* {sensorTypes.map(st=><div>
                    {st.name}
                </div>)} */}

    </div>;
}

export default Controller;