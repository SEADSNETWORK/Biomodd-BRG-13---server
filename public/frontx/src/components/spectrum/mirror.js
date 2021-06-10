import {InteractiveObject, IO_STATE} from './interactiveObject.js'
import Handle from "./handle.js"
import {segment_intersection} from "./auxi";
// ===============================
//      P L A N T
// ===============================
// Them plants

class Mirror extends InteractiveObject {
    constructor({location, size, color, alternativeColor, direction, id}, p5){
        super(location, size);
        this.color = color;
        this.alternativeColor = alternativeColor;
        this.direction = direction;
        this.rotation = 0;
        this.strokeWeight = 5;
        // store mirror id, as it can help with debugging
        this.id = "mirror_"+id;
        
        let randDirection = p5.createVector(p5.random(-1, 1), p5.random(-1, 1));
        this.handle = new Handle(this.location, 10, 30, randDirection, this.color, 2);
    }

    getPoints(){
        let x = this.location.x;
        let y = this.location.y;
        let p1 = {
            x: x,
            y: y,
        };
        let p3 = {
            x: x,
            y: y + this.size,
        };
        return [p1, p3];
    }

    
    isOver(loc){
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

        p5.line(this.location.x, this.location.y, this.location.x, this.location.y+size);
        
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