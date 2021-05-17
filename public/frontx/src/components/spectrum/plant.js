import {IO_STATE, InteractiveObject} from './interactiveObject.js'

import {getPointLineDistance} from './aux'

// ===============================
//      P L A N T
// ===============================
// Them plants

class Plant extends InteractiveObject {
    constructor({location, size, color, alternativeColor}){
        super(location, size);
        this.color = color;
        this.alternativeColor = alternativeColor;
        this.collisionColor = 'red';
        this.colorplaceholder = color;
    }




    detectCollision(lights){
        let col = false;
        for (let light of lights.values()) {
            for (let j = 0; j < light.beam.segments.length; j++) {
                var segment = light.beam.segments[j];
                let line = [];
                line[0] = [segment.p1_x, segment.p1_y];
                line[1] = [segment.p2_x, segment.p2_y];
                let point = [this.location.x, this.location.y];
                if (getPointLineDistance(line,point) < this.size/2){   // collision
                    col = true;
                }

            }
        }
        if (col) {
            this.color = this.collisionColor;
        } else {
            this.color = this.colorplaceholder
        }

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

export default Plant;