"use client";

import { useRef, useEffect, useState } from "react";

interface Particle {
    x: number;
    y: number;
    baseX: number;
    baseY: number;
    vx: number;
    vy: number;
    size: number;
    alpha: number;
    wanderSeed: number;
}

export default function BlueprintCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const textCanvasRef = useRef<HTMLCanvasElement>(null);
    const [isInView, setIsInView] = useState(false);
    const particlesRef = useRef<Particle[]>([]);
    const mouseRef = useRef({ x: 0, y: 0, active: false });

    const initTextParticles = (width: number, height: number) => {
        if (width <= 0 || height <= 0) return;

        const text = "DIGITAL ARCHITECTURE";
        const particles: Particle[] = [];
        const tCanvas = textCanvasRef.current;
        if (!tCanvas) return;
        const tCtx = tCanvas.getContext("2d", { willReadFrequently: true });
        if (!tCtx) return;

        const fontSize = Math.min(width * 0.08, 45); 
        const density = 2; 

        tCanvas.width = width;
        tCanvas.height = height;

        tCtx.font = `900 ${fontSize}px Inter, sans-serif`;
        tCtx.fillStyle = "white";
        tCtx.textAlign = "left";
        tCtx.textBaseline = "top";
        tCtx.fillText(text, 0, 0);

        const imageData = tCtx.getImageData(0, 0, width, height);
        const data = imageData.data;

        for (let y = 0; y < height; y += density) {
            for (let x = 0; x < width; x += density) {
                const index = (y * width + x) * 4;
                if (data[index + 3] > 128) {
                    particles.push({
                        x: x + (Math.random() * 6 - 3), 
                        y: y + (Math.random() * 6 - 3),
                        baseX: x,
                        baseY: y,
                        vx: 0,
                        vy: 0,
                        size: 1.1, 
                        alpha: Math.random() * 0.5 + 0.4,
                        wanderSeed: Math.random() * 100,
                    });
                }
            }
        }
        particlesRef.current = particles;
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsInView(entry.isIntersecting),
            { threshold: 0.01 }
        );
        if (canvasRef.current) observer.observe(canvasRef.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const canvas = canvasRef.current;
            if (!canvas) return;
            const rect = canvas.getBoundingClientRect();
            mouseRef.current = {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
                active: true,
            };
        };
        const handleMouseLeave = () => { mouseRef.current.active = false; };
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseleave", handleMouseLeave);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;

        const resize = () => {
            const parent = canvas.parentElement;
            if (!parent) return;
            const width = parent.offsetWidth;
            const height = parent.offsetHeight;
            if (width === 0 || height === 0) return;
            const dpr = window.devicePixelRatio || 1;
            canvas.width = width * dpr;
            canvas.height = height * dpr;
            ctx.scale(dpr, dpr);
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;
            initTextParticles(width, height);
        };

        const draw = () => {
            if (!isInView) {
                animationFrameId = requestAnimationFrame(draw);
                return;
            }
            const { width, height } = canvas.getBoundingClientRect();
            
            // ARCHITECTURAL FIX: Transparenter Hintergrund
            ctx.clearRect(0, 0, width, height); 

            const mouse = mouseRef.current;
            const friction = 0.88; 
            const elasticity = 0.06; 
            const repulsionRadius = 70;
            const repulsionStrength = 5.0;
            const time = Date.now() * 0.001;

            particlesRef.current.forEach((p) => {
                const targetX = p.baseX + Math.sin(time + p.wanderSeed) * 1.5;
                const targetY = p.baseY + Math.cos(time + p.wanderSeed) * 1.5;
                
                p.vx += (targetX - p.x) * elasticity;
                p.vy += (targetY - p.y) * elasticity;

                if (mouse.active) {
                    const dx = p.x - mouse.x;
                    const dy = p.y - mouse.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < repulsionRadius) {
                        const force = (repulsionRadius - dist) / repulsionRadius;
                        p.vx += (dx / dist) * force * repulsionStrength;
                        p.vy += (dy / dist) * force * repulsionStrength;
                    }
                }

                p.vx *= friction;
                p.vy *= friction;
                p.x += p.vx;
                p.y += p.vy;

                // DESIGN DOGMA: Navy Blue Particles
                ctx.fillStyle = `rgba(0, 31, 63, ${p.alpha})`;
                ctx.fillRect(p.x, p.y, p.size, p.size);
            });
            animationFrameId = requestAnimationFrame(draw);
        };

        window.addEventListener("resize", resize);
        resize();
        draw();
        return () => {
            window.removeEventListener("resize", resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, [isInView]);

    return (
        <>
            <canvas ref={textCanvasRef} className="hidden" aria-hidden="true" />
            <canvas
                ref={canvasRef}
                className="absolute inset-0 z-0 opacity-100"
                aria-hidden="true"
            />
        </>
    );
}