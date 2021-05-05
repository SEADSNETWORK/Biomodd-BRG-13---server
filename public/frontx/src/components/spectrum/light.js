import {IO_STATE, InteractiveObject} from './interactiveObject'
import {mouseV} from './aux'
// ===============================
//      L I G H T
// ===============================
// The object that emits a beam of light

// the handle that allows for the rotation of the light
class Handle extends InteractiveObject {
    constructor (location, size, color){
        super(location, size);
        this.color = color;
    }

    draw(p5){
        p5.noStroke();
        p5.fill(this.color);
        p5.circle(this.location.x, this.location.y, this.state===IO_STATE.UNSELECTED?this.size:this.size*1.2);
    }
}


class Segment {
    constructor(p1_x, p1_y, p2_x, p2_y, color){
        this.p1_x = p1_x;
        this.p1_y = p1_y;
        this.p2_x = p2_x;
        this.p2_y = p2_y;
        this.color = color;
    }
}


class Beam {

    createSegmentZero(p5){
        const p2 = p5.createVector(0, 0).set(this.direction);
        p2.mult(p5.width);
        p2.add(this.origin);
        this.segments[0]= new Segment(p2.x, p2.y, this.origin.x, this.origin.y, this.color);
    }

    addSegment(i, x, y, angle, color){
        console.log(this.segments);
        let segLength = this.segments.length;

        this.segments.splice(i+1, segLength-(i));
        // calc enddddddddd
        let x2 = Math.cos(angle)*800;
        let y2 = Math.sin(angle)*800;
        this.segments[this.segments.length] = new Segment(x, y, x2, y2, color);

    }

    constructor(origin, direction, color, p5){
        this.origin = origin;
        this.direction = direction;
        this.color = color;
        this.segments = []
        this.createSegmentZero(p5);
    }

    setDirection(direction, p5){
        this.direction = direction;
        this.createSegmentZero(p5);
        //this.segments[0].direction = direction;
    }

    draw(p5){
        p5.noFill();
        for (let i=0; i<this.segments.length; i++){


        p5.stroke(this.segments[i].color);
        p5.line(this.segments[i].p1_x, this.segments[i].p1_y, this.segments[i].p2_x, this.segments[i].p2_y);
        }
    }
}

class Light extends InteractiveObject {
    constructor({color, size, location, controlOffset, strokeWeight}, p5){
        super(location, size);
        this.color = color;
        this.controlOffset = controlOffset;
        this.strokeWeight = strokeWeight;

        this.handle = new Handle(p5.createVector(0, 0), 10, this.color);
        this.beam = new Beam(this.location, this.getDirection(p5), color, p5);
        const r = ()=>p5.random(-this.handleOffset(), this.handleOffset());
        this.moveHandle(p5, p5.createVector().set(this.location).add(p5.createVector(r(), r())))
        
    }

    draw(p5){
        if (this.handle.state === IO_STATE.DRAGGED){
            this.moveHandle(p5);
        }

        // draw light
        p5.noStroke();
        p5.fill(this.color);
        p5.circle(this.location.x, this.location.y, this.size);
        p5.noFill();
        p5.strokeWeight(this.strokeWeight);
        p5.stroke(this.color);
        p5.circle(this.location.x, this.location.y, this.size + this.controlOffset);

        // draw handle
        this.handle.draw(p5);

        // draw beam
        this.beam.draw(p5);
    }

    handleOffset(){
        return (this.controlOffset+this.size)/2;
    }

    getDirection(p5){
        const direction = p5.createVector(0,0).set(this.location);
        direction.sub(this.handle.location);
        direction.normalize();
        return direction;
    }

    moveHandle(p5, loc){

        if (!loc){
            loc = mouseV(p5);
        } 

        // we move the handle in such a way that it resembles
        // the location of the mouse while dragging;
        const diff = p5.createVector(0,0).set(this.location).sub(loc);
        
        // limit to handleoffset
        diff.normalize();
        diff.mult(-this.handleOffset());

        // add to center
        diff.add(this.location);
        this.handle.location.set(diff);
        this.beam.setDirection(this.getDirection(p5), p5);
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

export default Light;