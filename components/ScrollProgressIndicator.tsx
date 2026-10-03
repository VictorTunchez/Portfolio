'use client';
import { useLenis } from 'lenis/react';
import React, { useEffect, useRef, useState } from 'react';

const ScrollProgressIndicator = () => {
    const trackRef = useRef<HTMLDivElement>(null);
    const scrollBarRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [progress, setProgress] = useState(0);
    const lenis = useLenis();

    useEffect(() => {
        const handleScroll = () => {
            const { scrollHeight, clientHeight } = document.documentElement;
            const scrollableHeight = scrollHeight - clientHeight;
            const scrollProgress =
                scrollableHeight > 0 ? (window.scrollY / scrollableHeight) * 100 : 0;

            if (scrollBarRef.current) {
                scrollBarRef.current.style.transform = `translateY(-${
                    100 - scrollProgress
                }%)`;
            }
            setProgress(Math.round(scrollProgress));
        };

        handleScroll();

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, []);

    // map a pointer position on the track to a page scroll position
    const scrollToPointer = (clientY: number, immediate: boolean) => {
        if (!trackRef.current) return;

        const rect = trackRef.current.getBoundingClientRect();
        const ratio = Math.min(Math.max((clientY - rect.top) / rect.height, 0), 1);
        const { scrollHeight, clientHeight } = document.documentElement;
        const target = ratio * (scrollHeight - clientHeight);

        if (lenis) {
            lenis.scrollTo(target, { immediate });
        } else {
            window.scrollTo({ top: target, behavior: immediate ? 'auto' : 'smooth' });
        }
    };

    const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.currentTarget.setPointerCapture(e.pointerId);
        setIsDragging(true);
        scrollToPointer(e.clientY, false);
    };

    const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
        if (!isDragging) return;
        scrollToPointer(e.clientY, true);
    };

    const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
        e.currentTarget.releasePointerCapture(e.pointerId);
        setIsDragging(false);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        const step = window.innerHeight * 0.8;
        const keys: Record<string, number> = {
            ArrowDown: step,
            PageDown: step,
            ArrowUp: -step,
            PageUp: -step,
        };

        if (e.key in keys) {
            e.preventDefault();
            const target = window.scrollY + keys[e.key];
            if (lenis) lenis.scrollTo(target);
            else window.scrollTo({ top: target, behavior: 'smooth' });
        }
    };

    return (
        // wide invisible hit area around the thin bar so it's easy to grab
        <div
            className="group fixed top-[50svh] right-[calc(2%-10px)] -translate-y-1/2 z-[1] px-2.5 py-2 touch-none select-none"
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
            onKeyDown={handleKeyDown}
            role="scrollbar"
            aria-label="Barra de desplazamiento"
            aria-controls="main-content"
            aria-orientation="vertical"
            aria-valuenow={progress}
            aria-valuemin={0}
            aria-valuemax={100}
            tabIndex={0}
        >
            <div
                ref={trackRef}
                className={`w-1.5 h-[140px] rounded-full bg-background-light overflow-hidden transition-[width] duration-200 group-hover:w-2.5 ${
                    isDragging ? 'w-2.5' : ''
                }`}
            >
                <div
                    className="w-full bg-primary rounded-full h-full"
                    ref={scrollBarRef}
                ></div>
            </div>
        </div>
    );
};

export default ScrollProgressIndicator;
