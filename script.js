
const canvas = document.getElementById('hero-bg');
const ctx = canvas.getContext('2d');

let width = canvas.width = canvas.offsetWidth;
let height = canvas.height = canvas.offsetHeight;

window.addEventListener('resize', () => {
    width = canvas.width = canvas.offsetWidth;
    height = canvas.height = canvas.offsetHeight;
});

const dots = [];
for (let i=0;i<40;i++){
    dots.push({
        x: Math.random()*width,
        y: Math.random()*height,
        r: Math.random()*3+1,
        dx:(Math.random()-0.5)*0.5,
        dy:(Math.random()-0.5)*0.5
    });
}

function animate(){
    ctx.clearRect(0,0,width,height);
    dots.forEach(dot=>{
        ctx.beginPath();
        ctx.arc(dot.x,dot.y,dot.r,0,Math.PI*2);
        ctx.fillStyle='#0f766e';
        ctx.fill();
        dot.x+=dot.dx;
        dot.y+=dot.dy;
        if(dot.x<0||dot.x>width) dot.dx*=-1;
        if(dot.y<0||dot.y>height) dot.dy*=-1;
    });
    requestAnimationFrame(animate);
}
animate();

const canvas = document.getElementById('hero-bg');
const ctx = canvas.getContext('2d');

let width = canvas.width = canvas.offsetWidth;
let height = canvas.height = canvas.offsetHeight;

window.addEventListener('resize', () => {
    width = canvas.width = canvas.offsetWidth;
    height = canvas.height = canvas.offsetHeight;
});

const dots = [];
for (let i=0;i<40;i++){
    dots.push({
        x: Math.random()*width,
        y: Math.random()*height,
        r: Math.random()*3+1,
        dx:(Math.random()-0.5)*0.5,
        dy:(Math.random()-0.5)*0.5
    });
}

function animate(){
    ctx.clearRect(0,0,width,height);
    dots.forEach(dot=>{
        ctx.beginPath();
        ctx.arc(dot.x,dot.y,dot.r,0,Math.PI*2);
        ctx.fillStyle='#0f766e';
        ctx.fill();
        dot.x+=dot.dx;
        dot.y+=dot.dy;
        if(dot.x<0||dot.x>width) dot.dx*=-1;
        if(dot.y<0||dot.y>height) dot.dy*=-1;
    });
    requestAnimationFrame(animate);
}
animate();