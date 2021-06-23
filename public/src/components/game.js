import React, {useEffect, useState} from 'react';
import { useSelector } from "react-redux";
import { Grid, Col, Row, Theme} from '../theme'
import { io } from "socket.io-client";
import Spectrum from '../components/spectrum'
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import Controller from './controller'
import Countdown from './countdown';
import Score from './score';

const Game = ()=>{
    const [theme, socket, client, gameSettings, plantClusters, sensorTypes] = useSelector(state => 
      [ state.data.theme, 
        state.data.socket, 
        state.data.client, 
        state.data.gameSettings,
        state.data.plantClusters,
        state.data.sensorTypes
      ]);
    const handle = useFullScreenHandle();
    const [start, setStart] = useState(null);
    const gamewidth = 9;
    const PHASES = Object.freeze({
      LOAD: "load",
      RUNNING: "running",
      END: "ended"
    });
    const [phase, setPhase] = useState(PHASES.END);
    const [players, setPlayers] = useState(null);
    const [player, setPlayer] = useState(null);
    const [target, setTarget] = useState(null);
    const [listeners, setListeners] = useState(null);

    const setTargetFromDate = (seconds)=>{
      const d = new Date();
      d.setSeconds( d.getSeconds() + seconds);
      setTarget(d)
    }

    useEffect(()=>{

      if (socket){
        setListeners(true);
        socket.on("/phase", (newphase)=>{
          setPhase(newphase);
          switch(newphase){
            case PHASES.END:
              setPlayer(null);
              setTarget(null);
              break;
            case PHASES.LOAD:
              if (gameSettings){
                setTargetFromDate(gameSettings.beginningTime);
              }
              break;
            case PHASES.RUNNING:
              if (gameSettings){
                setTargetFromDate(gameSettings.duration);
              }
              break;
          } 
        })

        if (!players){
          socket.emit("/givePlayers"); 
        }
    
        socket.on("/players", (newplayers)=>{
          setPlayers(newplayers);
        })
      }

      return ()=>{
        // clean up our listeners here
        if (socket){
          socket.off("/phase");
          socket.off("/players");
          setListeners(false);
        }
      }
    }, [listeners, setListeners, socket, gameSettings])

    const go = ()=>{
        setStart(true);
        handle.enter();
    }

    const MakePlayer = (color)=>{

      const killed = <div className="kill" >
        [PLAY {color.toUpperCase()}]
      </div>;

      const selected = <div>
        [{color.toUpperCase()} SELECTED]
      </div>;

      if (player){
        if (player == color){
          return selected;
        } else if (player == color+"s"){
            return selected;
        } else {
          return killed;
        }
      }

      if (players[color] && players[color+"s"]){
        return killed;
      } else if (players[color]){
        return <div className="hoverer" onClick={()=>{
          if (!player){
            socket.emit("/startgame", color+"s");
            setPlayer(color+"s");
          }
        }}>
          [PLAY {color.toUpperCase()} support]
        </div>
      } else {
        return <div className="hoverer" onClick={()=>{
          if (!player){
            socket.emit("/startgame", color);
            setPlayer(color)
          }
        }}>
          [PLAY {color.toUpperCase()}]
        </div>
      }
    }

    const content = ()=>{
      switch(phase){
        case PHASES.LOAD : 
        case PHASES.END :

          return <div style={{color: "white", width: "100%", textAlign:"center"}}>
            <br/><br/><br/>
            || ==== LOAD NEW GAME ==== ||
            <br/><br/>

            <div >
              {MakePlayer("red")}
              {MakePlayer("green")}
              {MakePlayer("blue")}
            </div>

            <br/><br/><br/>
            <Countdown target={target} displaytext={"Time before launch"} endText="LETS GO"/>
          </div>
          break;
        case PHASES.RUNNING : 
          return <Spectrum socket={socket} player={player} scoreUpdate={gameSettings.scoreUpdate} />;
          break;
      }
    }

    if (!theme || !client || !gameSettings || !players){
        return null;
    }

    return <div>
      {start?null:<button onClick={go}>LOAD</button>}

      <FullScreen handle={handle}>
        <Row>
          <Col xs={12} sm={12} md={gamewidth}>
            <theme.Empty style={{padding: "0", margin: "0"}}>
              <div style={{width: "100%", height: "100vh"}}> 
                {(gameSettings)?start?content():content() : null}
                </div>
                <div>
                  <Score socket={socket} />
                </div>
            </theme.Empty>
          </Col>
          <Col xs={12} md={12-gamewidth} style={{background: "black", color: "white", borderLeft: "solid 2px white"}}>
            <Controller phase={phase} phases={PHASES} target={target} player={player} />
          </Col>
        </Row>
      </FullScreen>
    </div>
}

export default Game;


