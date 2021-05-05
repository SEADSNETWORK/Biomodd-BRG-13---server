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

export const mouseV = (p5)=>p5.createVector(p5.mouseX, p5.mouseY);