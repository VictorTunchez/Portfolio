'use client';
import { useEffect, useRef } from 'react';

// number of points in the tail and how fast each one chases the previous one
// (fraction of the distance covered per 60fps frame)
const TRAIL_LENGTH = 24;
const FOLLOW = 0.35;

const HEAD_RADIUS = 4;
const TAIL_WIDTH = 6;

const CustomCursor = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas || window.innerWidth < 768) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const reduceMotion = window.matchMedia(
            '(prefers-reduced-motion: reduce)',
        ).matches;

        const mouse = { x: 0, y: 0 };
        const points = Array.from({ length: TRAIL_LENGTH }, () => ({
            x: 0,
            y: 0,
        }));
        let visible = false;
        let frame = 0;
        let lastTime = performance.now();

        const resize = () => {
            const dpr = window.devicePixelRatio || 1;
            canvas.width = window.innerWidth * dpr;
            canvas.height = window.innerHeight * dpr;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;

            // start the tail collapsed on the cursor so it doesn't fly in from 0,0
            if (!visible) {
                points.forEach((point) => {
                    point.x = mouse.x;
                    point.y = mouse.y;
                });
                visible = true;
            }
        };

        const handleMouseLeave = () => {
            visible = false;
        };

        const draw = (time: number) => {
            // keep the tail speed the same on 60hz and 144hz screens
            const delta = Math.min((time - lastTime) / (1000 / 60), 3);
            lastTime = time;
            const follow = reduceMotion ? 1 : 1 - Math.pow(1 - FOLLOW, delta);

            ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

            if (visible) {
                points[0].x = mouse.x;
                points[0].y = mouse.y;

                for (let i = 1; i < points.length; i++) {
                    points[i].x += (points[i - 1].x - points[i].x) * follow;
                    points[i].y += (points[i - 1].y - points[i].y) * follow;
                }

                ctx.lineCap = 'round';
                for (let i = 1; i < points.length; i++) {
                    const progress = 1 - i / points.length;

                    ctx.beginPath();
                    ctx.moveTo(points[i - 1].x, points[i - 1].y);
                    ctx.lineTo(points[i].x, points[i].y);
                    ctx.strokeStyle = `rgba(255, 255, 255, ${progress * 0.8})`;
                    ctx.lineWidth = TAIL_WIDTH * progress;
                    ctx.stroke();
                }

                ctx.beginPath();
                ctx.arc(mouse.x, mouse.y, HEAD_RADIUS, 0, Math.PI * 2);
                ctx.fillStyle = '#fff';
                ctx.fill();
            }

            frame = requestAnimationFrame(draw);
        };

        resize();
        window.addEventListener('resize', resize);
        window.addEventListener('mousemove', handleMouseMove);
        document.documentElement.addEventListener(
            'mouseleave',
            handleMouseLeave,
        );
        frame = requestAnimationFrame(draw);

        return () => {
            cancelAnimationFrame(frame);
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', handleMouseMove);
            document.documentElement.removeEventListener(
                'mouseleave',
                handleMouseLeave,
            );
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="hidden md:block fixed inset-0 w-full h-full z-[50] pointer-events-none"
            aria-hidden="true"
        />
    );
};

export default CustomCursor;
