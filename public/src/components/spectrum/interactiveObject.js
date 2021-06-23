// ========================================
//      I N T E R A C T I V E  O B J E C T
// ========================================
// an interactive object, that knows when clicked or dragged
// currently assumes it is round

export const IO_STATE = Object.freeze({
    UNSELECTED: "unselected",
    CLICKED: "clicked",
    HOVERING: "hovering",
    DRAGGED: "dragged"
})

export class InteractiveObject {
    
    constructor(location, size, ID){
        this.location = location;
        this.size = size;
        this.state = IO_STATE.UNSELECTED;
        this.ID = ID;
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