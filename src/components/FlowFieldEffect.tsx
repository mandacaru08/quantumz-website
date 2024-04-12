import React, { useEffect, useRef } from 'react';

class FlowField {
    private ctx: CanvasRenderingContext2D;
    private width: number;
    private height: number;
    private gradient!: CanvasGradient;
    private radius: number;
    private vr: number;
    private timer: number;
    private cellSize: number;
    private interval: number;
    private lastTime: number;
    constructor(ctx: CanvasRenderingContext2D, width: number, height: number) {
        this.ctx = ctx;
        this.ctx.lineWidth = 0.3;
        this.width = width;
        this.height = height;
        this.createGradient();
        this.ctx.strokeStyle = this.gradient;
        this.radius = 1.9;
        this.vr = 0.03;
        this.mapField(0);
        this.cellSize = 10;
        this.interval = 1000/60;
        this.timer = 0;
        this.lastTime = 0;
    }
    createGradient(){
        this.gradient = this.ctx.createLinearGradient(0, 0,this.width, this.height);
        this.gradient.addColorStop(0.1,"#ff5c33");
        this.gradient.addColorStop(0.2, "#ff66b3");
        this.gradient.addColorStop(0.4, "#ccccff");
        this.gradient.addColorStop(0.6, "#b3ffff");
        this.gradient.addColorStop(0.8, "#80ff80");
        this.gradient.addColorStop(0.9, "#ffff33");
    }
    mapField(timeStamp: number){
        let deltaTime = timeStamp - this.lastTime;
        this.lastTime = timeStamp;

        if (this.timer > this.interval){
            this.ctx.clearRect(0,0,this.width, this.height);
            this.radius += this.vr;
            if (this.radius > 5  || this.radius < -5) this.vr *= -1
            for (let y = 0; y < this.height; y+= this.cellSize){
                for (let x = 0; x < this.width; x += this.cellSize){
                    const angle = this.getValue(x, y);
                    this.draw(angle,x,y);
                }
            }
            this.timer = 0;
        } else {
            this.timer += deltaTime;
        }

        requestAnimationFrame(this.mapField.bind(this));

    }
    getValue(x: number, y: number){
        return (Math.cos(y/3 * x * 0.00005) + Math.sin(x/3 * y * 0.00005)) * this.radius;
    }
    draw(angle: number, x: number, y: number){
        let positionX = x;
        let positionY = y;
        let dx = x - positionX;
        let dy = y - positionY;
        let distance = (dx * dx + dy * dy);
        let length = distance > 150000 ? distance : 150000;
        if (length > 900000) length = 900000;
        this.ctx.beginPath();
        this.ctx.moveTo(positionX,positionY);
        this.ctx.lineTo(positionX+Math.cos(angle) * length/10000, positionY+Math.sin(angle) * length/10000);
        
        this.ctx.stroke();
    }
}

const FlowFieldEffect = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouse = { x: 0, y: 0 };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();  // Call it initially to set the canvas size

    const flowField = new FlowField(ctx, canvas.width, canvas.height);
    console.log('loaded');

    const mouseMoveHandler = (e: MouseEvent) => {
      mouse.x = e.x;
      mouse.y = e.y;
    };

    window.addEventListener('mousemove', mouseMoveHandler);

    return () => {
      window.removeEventListener('mousemove', mouseMoveHandler);
      window.removeEventListener('resize', resizeCanvas);
    }
}, []);

  return <canvas ref={canvasRef} id="canvas1" className={"absolute top-0 left-0"}/>;
};

export default FlowFieldEffect;