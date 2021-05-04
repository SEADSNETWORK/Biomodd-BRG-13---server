import React from "react";
import Sketch from "react-p5";

// ========================================
//      I N T E R A C T I V E  O B J E C T
// ========================================
// an interactive object, that knows when clicked or dragged
// currently assumes it is round

const IO_STATE = Object.freeze({
    UNSELECTED: "unselected",
    CLICKED: "clicked",
    HOVERING: "hovering",
    DRAGGED: "dragged"
})

class InteractiveObject {
    
    constructor(location, size){
        this.location = location;
        this.size = size;
        this.state = IO_STATE.UNSELECTED;
    }

    isOver(loc){
        return loc.dist(this.location) < this.size/2;
    }

    isCurrentOver(p5){
        return this.isOver(p5.createVector(p5.mouseX, p5.mouseY));
    }

    mousePressed(p5){
        if (this.isCurrentOver(p5)){
            this.state = IO_STATE.CLICKED;
        }
    }

    mouseReleased(p5){
        this.state = IO_STATE.UNSELECTED;
        this.mouseMoved(p5);
    }

    mouseDragged(p5){
        if (this.state !== IO_STATE.UNSELECTED){
            this.state = IO_STATE.DRAGGED;
        }   
    }

    mouseMoved(p5){
        if (this.state === IO_STATE.UNSELECTED && this.isCurrentOver(p5)){
            this.state = IO_STATE.HOVERING;
        } else if (this.state === IO_STATE.HOVERING && !this.isCurrentOver(p5)){
            this.state = IO_STATE.UNSELECTED;
        }
    }
}

// ===============================
//      P L A N T
// ===============================
// Them plants

class Plant extends InteractiveObject {
    constructor({location, size, color, alternativeColor}){
        super(location, size);
        this.color = color;
        this.alternativeColor = alternativeColor;
    }

    draw(p5){
        p5.noStroke();
        if (this.state === IO_STATE.UNSELECTED || this.state === IO_STATE.HOVERING){
            p5.fill(this.color);
        } else {
            if (this.state === IO_STATE.DRAGGED ){
                this.location.x = p5.mouseX;
                this.location.y = p5.mouseY;
            }
            p5.fill(this.alternativeColor);
        }

        let size = this.size;
        if (this.state === IO_STATE.HOVERING){
            size+=Math.sin(p5.millis())*2;
        }
        
        p5.circle(this.location.x, this.location.y, size);
    }
}

// ===============================
//      L I G H T
// ===============================
// The object that emits a beam of light
class Light {
    constructor({color, size, location, controlOffset, strokeWeight}){
        this.color = color;
        this.size = size;
        this.location = location;
        this.controlOffset = controlOffset;
        this.strokeWeight = strokeWeight;
    }

    draw(p5){
        p5.noStroke();
        p5.fill(this.color);
        p5.circle(this.location.x, this.location.y, this.size);
        p5.noFill();
        p5.strokeWeight(this.strokeWeight);
        p5.stroke(this.color);
        p5.circle(this.location.x, this.location.y, this.size + this.controlOffset);
    }

    mousePressed(p5){
        console.log(p5.mouseX)
    }
}

// ===============================
//      A U X
// ===============================
const getPointOnCircle = (p5, centrum, offset, division, section)=>{
    let angle = ((2 * Math.PI) / division) * section;
    let pos = p5.createVector(Math.cos(angle), Math.sin(angle));
    pos.mult(offset);
    pos.add(centrum);
    return pos;
}

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
    const toDraw        = [];
    const toInteract    = [];
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
            }));
            toDraw.push(lights.get(color));
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
		p5.background("yellow");
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
