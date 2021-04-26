import React, {useState, useEffect, useRef} from 'react';
import { Grid, Col, Row} from '../theme'
import { useSelector } from "react-redux";
import { io } from "socket.io-client";
import Input from './Input';
import Game from './game_simple'
import BlockContent from '@sanity/block-content-to-react';


const Home = ()=>{
    const theme = useSelector(state => state.data.theme);
    const news = useSelector(state => state.data.news);
    const [author, setAuthor] = useState("");
    const [device, setDevice] = useState('');
    const [sensor, setSensor] = useState('');
    const [gameSettings, setGameSettings] = useState(undefined);
    const [returnData, setReturnData] = useState(undefined);
    const newsref = useRef(null);
    const restref = useRef(null);
    const socketref = useRef(null);
    const gameref = useRef(null);
    let socket;

    useEffect(()=>{
      if (!gameSettings && socket){
        socket.emit("/gamesettings");
      }
    })


    if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1"){
        socket = io("http://localhost:2200/", { transports: ["websocket"] });
    } else {
        socket= io();
    }

    socket.on("/gamesettings", (settings)=>{
      if (!gameSettings){
        setGameSettings(settings);  
      }
    })

    socket.on("/push", (results)=>{

        console.log(results)

        setReturnData(results.map(r=><>
            {JSON.stringify(r)} <br/>
        </>))
    } )

    const getScroller = (ref)=>{
      return ()=>{
        ref.current.scrollIntoView()
      }
    }

    if (!theme){
        return null;
    } else {
        
  
    return <Grid>
      <Row align="center">
      <Col xs={12} sm={8} md={6}>
          <theme.Container>
            <br/><br/>
            <theme.Wrapped>
              <theme.Container>
                <theme.Title>
                    GoTo
                </theme.Title>
                <theme.Text>
                  <ul>
                    <li onClick={getScroller(newsref)}>
                      -> news
                    </li>
                    <li onClick={getScroller(gameref)}>
                      -> game
                    </li>
                    <li onClick={getScroller(restref)}>
                      -> store and retrieve data (RESTful)
                    </li>
                    <li onClick={getScroller(socketref)}>
                      -> store and retrieve data (WEBSOCKET)
                    </li>
                  </ul>
                </theme.Text>
              </theme.Container>
            </theme.Wrapped>
          </theme.Container>

          <theme.Container>
            <br/><br/>
            <theme.Wrapped>
              <theme.Container>
                <theme.Title ref={newsref}>
                    GAME
                </theme.Title>
                <br/>

                <theme.SubTitle>
                  Simple version
                </theme.SubTitle>
                <theme.Text>
                  Proof of concept game version with simulated data - will be updated as the development progresses
                  <br/>
                  <a href="https://docs.google.com/document/d/1EDprQQhg2VJHW0SUoAcNhATV1XVfRxaYFhYVQjl9Rd8/edit" target="_blank">
                    --> Game concept master
                  </a>
                  <br/><br/>
                  {/* {gameSettings?<Game socket={socket} resolution={gameSettings.resolution} world={gameSettings.world} /> : "LOADING" } */}
                  
                </theme.Text>
              </theme.Container>
            </theme.Wrapped>
          </theme.Container>

        </Col>
        
      <Col xs={12} sm={8} md={6}>
          <theme.Container>
            <br/><br/>
            <theme.Wrapped>
              <theme.Container>
                <theme.Title ref={newsref}>
                    NEWS
                </theme.Title>
                <br/>

                {news?

                news.map(({title, description, images})=><>
                  <theme.SubTitle>
                    {title}
                  </theme.SubTitle>
                  <theme.Text>
                      <BlockContent blocks={description} />
                  </theme.Text>
                  {(images && images.length)?
                  images.map(({title, description, image})=><>
                      <theme.Text>
                        <b>
                        {title}
                        </b>
                      </theme.Text>
                      <img src={image} alt={title} style={{width: "100%"}} />
                      <theme.Text>
                        <i>
                        <BlockContent blocks={description} />
                        </i>
                      </theme.Text>
                  </>)
                  : null}
                  <br/>
                </>)
                
                : <theme.Text>L O A D I N G</theme.Text>}
              </theme.Container>
            </theme.Wrapped>
          </theme.Container>
        </Col>

        

      </Row>
      <Row align="center">
        <Col xs={12} sm={8} md={6}>
          <theme.Container>
            <br/><br/>
            <theme.Wrapped>
              <theme.Container>
                <theme.Title ref={restref}>
                    Store and retrieve data (RESTFul API)
                </theme.Title>
                <br/>
                <theme.SubTitle>
                  Store data
                </theme.SubTitle>
                <theme.Text>
                  <code style={{fontSize: "1.4em"}}>
                    /push?var1=value1&var2=val2
                  </code>
                  <br/>
                  <b>required fields</b> :  author, device, sensor, value
                  <br/>
                  Example: 
                  <br/>
                  <i>/push?author=Pieter&device=T&sensor=ts&value=22</i>
                </theme.Text>
                <br/><br/>
                <theme.SubTitle>
                  Retrieve data
                </theme.SubTitle>
                <theme.Text>
                  <code style={{fontSize: "1.4em"}}>
                      /data?var1=value1&var2=val2
                  </code>
                  <br/>
                  <b>required fields</b> :  author, device and/or sensor
                  <br/><br/>
                  Example: 
                  <br/>
                  <i>
                    <a href="http://www.biomodd.xyz/data?author=Pieter" target="_blank">
                      /data?author=Pieter
                    </a>
                    </i>
                  <br/>
                  This will select only the data entries that have been added by the author Pieter
                  <br/><br/>
                  Example: 
                  <br/>
                  <i>
                  <a href="http://www.biomodd.xyz/data?device=Test&author=Pieter" target="_blank">
                    /data?device=Test&author=Pieter
                      </a>
                    </i>
                  <br/>
                  This will select only the data entries that have been added by the author Pieter and device "Test"
                  <br/>
                </theme.Text>
              </theme.Container>
            </theme.Wrapped>
          </theme.Container>
        </Col>
        <Col xs={12} sm={8} md={6}>
          <theme.Container>
            <br/><br/>
            <theme.Wrapped>
              <theme.Container>
                <theme.Title ref={socketref}>
                    Store and retrieve data (WEBSOCKET)
                </theme.Title>
                <br/>
                <theme.SubTitle>
                  Store data
                </theme.SubTitle>
                <theme.Text>
                    Connect to the socket on this server, and send a message "/push" with an object (js) with the fields:  author, device, sensor, value
                </theme.Text>
                <br/><br/>
                <theme.SubTitle>
                  Retrieve data
                </theme.SubTitle>
                <theme.Text>
                    Connect to the socket on this server, and send a message "/data" with an object (js) with the fields:  author, device and/or sensor,
                    you will get back a list (js) which contains the selection (AND logic).
                </theme.Text>
                <br/><br/>
                <theme.Wrapped>
                    <theme.Container>
                        <Input label="author" value={author} setValue={setAuthor} />
                        <Input label="device" value={device} setValue={setDevice} />
                        <Input label="sensor" value={sensor} setValue={setSensor}/>
                    </theme.Container>
                </theme.Wrapped>
                <br/>
                
                <theme.Text style={{width: "auto"}}>
                    Search for entries <br/> 
                    author: {author?author:"any"}, <br/>
                    device: {device?device:"any"}, <br/>
                    sensor: {sensor?sensor:"any"}
                </theme.Text>
                <br/><br/>
                &nbsp;&nbsp;<button style={{
                    fontSize: "2em",
                    background: "blue",
                    color: "white",
                    paddingLeft: "10px"
                }} onClick={()=>{
                    const rv = {};
                    if (author && author!==''){
                        rv.author = author;
                    }
                    if (device && device!==''){
                        rv.device = device;
                    }
                    if (sensor && sensor!==''){
                        rv.sensor = sensor;
                    }
                    socket.emit("/data", rv)
                }}> GO
                    
                    </button>

                    <br/><br/><br/>

                    <theme.Text>
                    {returnData? returnData:null}
                    </theme.Text>
                

              </theme.Container>
            </theme.Wrapped>
          </theme.Container>
        </Col>
      </Row>
    </Grid>
    }

    
  }

export default Home;