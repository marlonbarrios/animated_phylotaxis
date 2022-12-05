const canvasSketch = require('canvas-sketch');
const p5 = require('p5');

new p5()


const settings = {

  pixelsPerInch: 300,
   // Tell canvas-sketch we're using p5.js
   p5: true,
   // Turn on a render loop (it's off by default in canvas-sketch)

   duration: 3,

    animate: true,
    // We can specify dimensions if we want a fixed size on the first render
    dimensions:[512, 512],
    // orientation: 'landscape',
    bleed: 1 / 8,
    // attributes: {
    // antialias: true
    // }
};

const radius = 0.48;
const dotSize = 0.039;
const PHI = (1 + Math.sqrt(5)) / 2;

let t;
const frames = 1000;


function cosn(v) {
  return cos(v * TWO_PI) * 0.5 + 0.5;
}

function invCosn(v) {
  return 1 - cosn(v);
}


canvasSketch(() => {

  colorMode(RGB, 1);

  noStroke();

  return ({  width, height }) => {
    clear();

    t= fract(frameCount/frames);

    scale(width, height);

    fill(0);
  
    const count = 1000 * invCosn(t);
    for (let i = 1; i < count; i++) {
      const f = i / count;
      const angle = i * PHI;
      const dist = f * radius;
  
      const x = 0.5 + cos(angle * TWO_PI) * dist;
      const y = 0.5 + sin(angle * TWO_PI) * dist;
  
      const r = f * dotSize;
  
      circle(x, y, r);
    }
  }
}, settings);


