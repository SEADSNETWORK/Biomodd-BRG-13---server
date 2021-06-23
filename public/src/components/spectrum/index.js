import React from "react";
import Sketch from "react-p5";
import {getPointOnCircle} from './auxi'
import Plant from './plant'
import Light from './light'
import Mirror from "./mirror";

// ===============================
// ===============================
//      G A M E
// ===============================
// ===============================
export default ({socket, player, mirrorsPerPlayer, safeDistance, scoreUpdate}) => {

    // enumerations

    // globals
    const lights        = new Map();
    const plants        = [];

    const mirrors        = [];


    // -- keep track of all objects we want to draw 
    // --- expects they implemented a draw(p5) method
    const toDraw        = [];

    // -- keep track of all objects we want to interact with 
    // --- expects they implemented all interactive methods as defined in the InteractiveObject class
    const toInteract    = [];

    const settings = {
        background: "black"
    }

    const lightSettings = {
        size: 30, 
        controlOffset: 20,
        offset: .4,
        strokeWeight: 2
    };

    const plantSettings = {
        amount: 1,
        size: 40,
        color: "darkgreen",
        alternativeColor: "lightgreen"
    }

    const mirrorSettings = {
        amount: 5,
        size: 50,
        color: "magenta",
        alternativeColor: "0f0"
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
        console.log("game started")
        // setup canvas
        if (canvasParentRef && canvasParentRef.offsetWidth){
            console.log(canvasParentRef.offsetWidth)
            p5.createCanvas(canvasParentRef.offsetWidth, window.screen.height).parent(canvasParentRef);
        } else {
            throw "canvas not found"
        }

        // create mirrors
        
        
        // create plants
        // for (let i = 0; i < plantSettings.amount; i++){
        //     plants[i] = new Plant({location: getRandomPoint(p5), ...plantSettings});
        //     toDraw.push(plants[i]);
        //     toInteract.push(plants[i]);
        // }


        // setup sockets
        socket.on("/gameUpdate", (gameUpdate)=>{
            if (plants.length){
                // update location

            } else {
                //  instantiate 
                gameUpdate.plants.forEach((p, i, arr)=>{
                    plants[i] = new Plant({location: p5.createVector(p.x*p5.width, p.y*p5.height), ID: p.ID,...plantSettings});
                    toDraw.push(plants[i]);
                    toInteract.push(plants[i]);
                });
            }

            if (mirrors.length){
                // update
            } else {
                gameUpdate.mirrors.forEach((m, i, arr)=>{
                    mirrors[i] = new Mirror({location: p5.createVector(m.x*p5.width, m.y*p5.height), player: m.player, ID: m.ID,...mirrorSettings}, p5);
                    toDraw.push(mirrors[i]);
                    toInteract.push(mirrors[i]);
                });

                

                let colors = ["red", "green", "blue"];
                colors.forEach((color, i)=>{
                    lights.set(color, new Light(
                        {
                            color, 
                            location: getPointOnCircle(p5, getCenter(p5), p5.width*lightSettings.offset, 3, i),
                            ...lightSettings
                    }, mirrors, p5));
                    toDraw.push(lights.get(color));
                    toInteract.push(lights.get(color));
                })
            }

        })
	};


    // ===============================
    //      D R A W
    // =============================== 
	const draw = (p5) => {
		p5.background(settings.background);
        toDraw.forEach(td=>td.draw(p5));
        plants.forEach(mr=>mr.detectCollision(lights));

        if (p5.frameCount%scoreUpdate == 0){
            socket.emit("/score", {player, score: p5.frameCount})
            socket.emit("/giveGameUpdate");
        }
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
