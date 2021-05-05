import React from "react";
import Sketch from "react-p5";
import {getPointOnCircle} from './aux'
import Plant from './plant'
import Light from './light'

// ===============================
// ===============================
//      G A M E
// ===============================
// ===============================
export default ({socket}) => {

    // enumerations

    // globals
    const lights        = new Map();
    const plants        = [];

    // -- keep track of all objects we want to draw 
    // --- expects they implemented a draw(p5) method
    const toDraw        = [];

    // -- keep track of all objects we want to interact with 
    // --- expects they implemented all interactive methods as defined in the InteractiveObject class
    const toInteract    = [];

    const settings = {
        background: "yellow"
    }

    const lightSettings = {
        size: 30, 
        controlOffset: 20,
        offset: .4,
        strokeWeight: 2
    };

    const plantSettings = {
        amount: 2,
        size: 40,
        color: "darkgreen",
        alternativeColor: "lightgreen"
    }
    
    // ===============================
    //      A U X
    // ===============================
    const getCenter = (p5)=>{
        return p5.createVector(p5.width*.5, p5.height*.5);
    }

    const getRandomPoint = (p5)=> p5.createVector(Math.random()*p5.width, Math.random()*p5.height);
    
    // ===============================
    //      S E T U P
    // =============================== 
	const setup = (p5, canvasParentRef) => {
        // setup canvas
        if (canvasParentRef){
            p5.createCanvas(500, 500).parent(canvasParentRef);
        }

        // setup lights
        ["red", "green", "blue"].forEach((color, i)=>{
            lights.set(color, new Light(
                {
                    color, 
                    location: getPointOnCircle(p5, getCenter(p5), p5.width*lightSettings.offset, 3, i),
                    ...lightSettings
            }, p5));
            toDraw.push(lights.get(color));
            toInteract.push(lights.get(color));
        })

        for (let i = 0; i < plantSettings.amount; i++){
            plants[i] = new Plant({location: getRandomPoint(p5), ...plantSettings});
            toDraw.push(plants[i]);
            toInteract.push(plants[i]);
        }

        // setup sockets
        socket.on("/gameUpdateWorld", (gameWorld)=>{
            // world = gameWorld;
        })
	};


    // ===============================
    //      D R A W
    // =============================== 
	const draw = (p5) => {
		p5.background(settings.background);
        toDraw.forEach(td=>td.draw(p5));
	};

    // ===============================
    //      I / O
    // =============================== 
	const mousePressed = (p5)=>{
        toInteract.forEach(ti=>ti.mousePressed(p5));
	}

    const mouseReleased = (p5)=>{
        toInteract.forEach(ti=>ti.mouseReleased(p5));
    }

    const mouseDragged = (p5)=>{
        toInteract.forEach(ti=>ti.mouseDragged(p5));
    }

    const mouseMoved = (p5)=>{
        toInteract.forEach(ti=>ti.mouseMoved(p5));
    }

	return <Sketch  setup={setup} 
                    draw={draw} 
                    mousePressed={mousePressed} 
                    mouseReleased={mouseReleased} 
                    mouseDragged={mouseDragged}
                    mouseMoved={mouseMoved}
                    
                    />;
};
