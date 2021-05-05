import {IO_STATE, InteractiveObject} from './interactiveObject.js'

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

export default Plant;