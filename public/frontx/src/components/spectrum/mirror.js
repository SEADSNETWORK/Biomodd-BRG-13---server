import {InteractiveObject, IO_STATE} from './interactiveObject.js'
import Handle from "./handle.js"
import {segment_intersection} from "./auxi";


class Mirror extends InteractiveObject {
    constructor({location, size, color, alternativeColor, direction, id}, p5){
        super(location, size);
        this.color = color;
        this.alternativeColor = alternativeColor;
        this.rotation = 0;
        this.strokeWeight = 5;
        // store mirror id, as it can help with debugging
        this.id = "mirror_"+id;
        
        // generate a random direction and create the handle
        let randDirection = p5.createVector(p5.random(-1, 1), p5.random(-1, 1));
        this.handle = new Handle(this.location, 10, 25, randDirection, this.color, 2);
    }

    
    // gets the start and end coordinates of the mirror
    // returns an array of length 2, with each element being an object containing an x & y value
    getPoints(p5){
        // calculate the start and end point of the mirror
        // adjust vector based on the direction set by the handle
        let adjustV = this.handle.getDirection(p5).setMag(this.size/2);
        let adjust = p5.createVector(adjustV.x, adjustV.y).rotate(Math.PI/2);

        // startpoint of mirror
        let startPoint = p5.createVector(this.location.x, this.location.y);
        startPoint.add(p5.createVector(-adjust.x, -adjust.y));
        // endpoint
        let endPoint = p5.createVector(this.location.x, this.location.y);
        endPoint.add(adjust);
        
        return [{x: startPoint.x, y: startPoint.y}, {x: endPoint.x, y: endPoint.y}];
    }

    
    // is a given coordinate (loc) over this mirror?
    isOver(loc){
        // needs to be rewritten!
        let x = loc.x;
        let y = loc.y;
        return this.location.x <= x && x <= this.location.x + this.strokeWeight &&
            this.location.y <= y && y <= this.location.y + this.size;
    }

   
   draw(p5){
       //p5.noStroke();
       p5.strokeWeight(this.strokeWeight);
       p5.stroke(this.color);
       if (this.state !== IO_STATE.UNSELECTED && this.state !== IO_STATE.HOVERING){
           if (this.state === IO_STATE.DRAGGED ){
               this.location.x = p5.mouseX ;
               this.location.y = p5.mouseY ;
            }
        }
        
        let size = this.size;
        if (this.state === IO_STATE.HOVERING){
            size+=Math.sin(p5.millis())*2;
        }
       
        // draw the line
        let linePoints = this.getPoints(p5);
        p5.line(linePoints[0].x, linePoints[0].y, linePoints[1].x, linePoints[1].y);

        // draw the handle
        this.handle.draw(p5);
        
    }
    
    
    // ---- I/O stuff 
    // passing interactions down to the handle member
    mousePressed(p5){
        super.mousePressed(p5);
        this.handle.mousePressed(p5);
    }

    mouseReleased(p5){
        super.mouseReleased(p5);
        this.handle.mouseReleased(p5);
    }

    mouseDragged(p5){
        super.mouseDragged(p5);
        this.handle.mouseDragged(p5);
    }

    mouseMoved(p5){
        super.mouseMoved(p5);
        this.handle.mouseMoved(p5);
    }    
}

export default Mirror;