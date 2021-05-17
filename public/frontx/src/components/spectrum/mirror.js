import {IO_STATE, InteractiveObject} from './interactiveObject.js'

// ===============================
//      P L A N T
// ===============================
// Them plants

class Mirror extends InteractiveObject {
    constructor({location, size, color, alternativeColor, direction}){
        super(location, size);
        this.color = color;
        this.alternativeColor = alternativeColor;
        this.direction = direction;
        this.rotation = 0;
        this.strokeWeight = 5;
    }
    isOver(loc){
        var x = loc.x
        var y = loc.y
        return this.location.x <= x && x <= this.location.x + this.strokeWeight &&
            this.location.y <= y && y <= this.location.y + this.size;
    }



    checkLineIntersection(l11_x, l11_y, l12_x, l12_y, l21_x, l21_y, l22_x, l22_y) {
        // if the lines intersect, the result contains the x and y of the intersection and boolean for whether line segment contains the point
        var denominator, a, b, numerator1, numerator2, result = {
            inter: false,
            x: null,
            y: null,
        };
        denominator = ((l22_y - l21_y) * (l12_x - l11_x)) - ((l22_x - l21_x) * (l12_y - l11_y));
        if (denominator === 0) {
            return result;
        }
        a = l11_y - l21_y;
        b = l11_x - l21_x;
        numerator1 = ((l22_x - l21_x) * a) - ((l22_y - l21_y) * b);
        numerator2 = ((l12_x - l11_x) * a) - ((l12_y - l11_y) * b);
        a = numerator1 / denominator;
        b = numerator2 / denominator;

        // if we cast these lines infinitely in both directions, they intersect here:
        result.x = l11_x + (a * (l12_x - l11_x));
        result.y = l11_y + (a * (l12_y - l11_y));
        /*
                // it is worth noting that this should be the same as:
                x = line2StartX + (b * (line2EndX - line2StartX));
                y = line2StartX + (b * (line2EndY - line2StartY));
                */
        // if line1 is a segment and line2 is infinite, they intersect if:
        if (a > 0 && a < 1 && b > 0 && b < 1) {
            result.inter = true;
        }

        return result;
    };

    getPoints(){
        var x = this.location.x;
        var y = this.location.y;
            var p1 = {
                x: x,
                y: y,
            };
            var p2 = {
                x: x + this.strokeWeight,
                y: y,
            };
            var p3 = {
                x: x,
                y: y + this.size,
            };
            var p4 = {
                x: x + this.strokeWeight,
                y: y + this.size,
            };

            var lines = [];

            lines[0] =  [p1,p3];    // left
            lines[1] = [p2,p4];   // right

            return lines;

    }

    checkSegments(lights){
        var rectLines = this.getPoints();
        for (let i = 0; i < rectLines.length; i++) {
            var rectLine = rectLines[i];
            for (let light of lights.values()) {
                for (let j = 0; j < light.beam.segments.length; j++) {
                    var segment = light.beam.segments[j];
                    //console.log(rectLines);
                    var inter = this.checkLineIntersection(rectLine[0].x, rectLine[0].y, rectLine[1].x, rectLine[1].y, segment.p1_x, segment.p1_y, segment.p2_x, segment.p2_y);

                    if (inter.inter) {

                        var angleRotation = this.rotation;


                        //if (inter.x = rectLines[0][0].x) {
                        if (segment.p1_x < rectLines[0][0].x ) {    // entering from left

                            let side1 = segment.p1_x - inter.x;
                            let side2 = segment.p1_y - inter.y;
                            var angle = Math.atan(side2 / side1);
                            angle =  Math.PI - angle;

                            light.beam.addSegment(j, inter.x, inter.y, angle, light.color);
                        } else {   // entering from right
                            let side1 = segment.p1_x - inter.x;
                            let side2 = segment.p1_y - inter.y;
                            var angle = Math.atan(side2 / side1);
                            angle =  2*Math.PI - angle;

                            light.beam.addSegment(j, inter.x, inter.y, angle, light.color);
                        }
                    }

                }


            }
        }

    }

    draw(p5){
        //p5.noStroke();
        if (this.state === IO_STATE.UNSELECTED || this.state === IO_STATE.HOVERING){
            p5.stroke(this.color);
        } else {
            if (this.state === IO_STATE.DRAGGED ){
                this.location.x = p5.mouseX ;
                this.location.y = p5.mouseY ;
            }
            p5.fill(this.alternativeColor);
        }

        let size = this.size;
        if (this.state === IO_STATE.HOVERING){
            size+=Math.sin(p5.millis())*2;
        }

        p5.line(this.location.x, this.location.y, this.location.x, this.location.y+size);
        p5.strokeWeight(this.strokeWeight);
        //p5.stroke(200);
    }
}

export default Mirror;