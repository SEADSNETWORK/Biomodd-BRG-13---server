// ===============================
//      A U X
// ===============================
export const getPointOnCircle = (p5, centrum, offset, division, section)=>{
    let angle = ((2 * Math.PI) / division) * section;
    let pos = p5.createVector(Math.cos(angle), Math.sin(angle));
    pos.mult(offset);
    pos.add(centrum);
    return pos;
}



export const getPointLineDistance = (line, point) =>{
    let x0 = point[0];
    let y0 = point[1];
    let x1 = line[0][0];
    let y1 = line[0][1];
    let x2 = line[1][0];
    let y2 = line[1][1];
    return  Math.abs(((x2-x1)*(y1-y0))-((x1-x0)*(y2-y1)) )  / Math.sqrt(Math.pow((x2-x1),2)+Math.pow((y2-y1),2))
}

export const mouseV = (p5)=>p5.createVector(p5.mouseX, p5.mouseY);