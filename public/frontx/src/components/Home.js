import React, {useState, useEffect, useRef} from 'react';
import { Grid, Col, Row} from '../theme'
import { useSelector } from "react-redux";


import BlockContent from '@sanity/block-content-to-react';
import { NavLink } from 'react-router-dom';
import Moment from 'react-moment';


const Home = ()=>{
    const theme = useSelector(state => state.data.theme);
    const news = useSelector(state => state.data.news);
    const events = useSelector(state=>state.data.events)
    
    
    
    const newsref = useRef(null);
    

    if (!theme){
        return null;
    } else {

      const getEvents = (events)=>events.map(({title, description, available, moment})=><div key={title}>
      <theme.SubTitle>
        <Moment format="DD/MM">{moment}</Moment> &nbsp;&nbsp; {title}
      </theme.SubTitle>
      <theme.Text>
          <BlockContent blocks={description} />
      </theme.Text>
      <theme.Text>
          <i>
            Available places: {available}
          </i>
      </theme.Text>
      <br/>                  <br/>                  <br/>
    </div>)
        
  
    return <Row align="center">
      
        
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
                  <theme.SubTitle key={title}>
                    {title}
                  </theme.SubTitle>
                  <theme.Text>
                      <BlockContent blocks={description} />
                  </theme.Text>
                  {(images && images.length)?
                  images.map(({title, description, image})=><>
                      <theme.Text key={title}>
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

        <Col xs={12} sm={8} md={6}>
          <theme.Container>
            <br/><br/>
            <theme.Wrapped>
              <theme.Container>
                <theme.Title >
                    EVENTS
                </theme.Title>
                <br/>

                {events?
                  getEvents(events.filter((e)=>{
                    return new Date(e.moment) >= new Date();
                  }))                
                : <theme.Text>L O A D I N G</theme.Text>}

                <br/>
                <theme.Title >
                    PAST EVENTS
                </theme.Title>
                <br/>


                {events?
                  getEvents(events.filter((e)=>{
                    return new Date(e.moment) < new Date();
                  }))                
                : null}


                
                  
                

                

              </theme.Container>
            </theme.Wrapped>
          </theme.Container>
        </Col>

        

      </Row>
      
    
    }

    
  }

export default Home;