'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Image from 'next/image';
import { MouseEvent, useRef } from 'react';

gsap.registerPlugin(useGSAP);

// radius of the colour "flashlight" that follows the cursor
const SPOTLIGHT_RADIUS = 110;

// the colour copy of the photo is only visible inside a circle centred on
// --spot-x / --spot-y, so the rest of the portrait stays black and white
const SPOTLIGHT_MASK =
    'radial-gradient(circle var(--spot-r) at var(--spot-x) var(--spot-y), #000 55%, transparent 100%)';

const HeroPortrait = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const colorRef = useRef<HTMLDivElement>(null);

    const { contextSafe } = useGSAP(
        () => {
            // rise from the bottom once the preloader is gone
            gsap.from('.portrait-inner', {
                yPercent: 25,
                autoAlpha: 0,
                duration: 1.2,
                delay: 2.4,
                ease: 'power3.out',
            });
        },
        { scope: containerRef },
    );

    const handleMouseMove = contextSafe((e: MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();

        gsap.to(colorRef.current, {
            '--spot-x': `${e.clientX - rect.left}px`,
            '--spot-y': `${e.clientY - rect.top}px`,
            duration: 0.3,
            ease: 'power2.out',
        });
    });

    const handleMouseEnter = contextSafe((e: MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();

        // start the circle where the cursor enters instead of sliding in
        gsap.set(colorRef.current, {
            '--spot-x': `${e.clientX - rect.left}px`,
            '--spot-y': `${e.clientY - rect.top}px`,
        });
        gsap.to(colorRef.current, {
            '--spot-r': `${SPOTLIGHT_RADIUS}px`,
            duration: 0.4,
            ease: 'power2.out',
        });
    });

    const handleMouseLeave = contextSafe(() => {
        gsap.to(colorRef.current, {
            '--spot-r': '0px',
            duration: 0.4,
            ease: 'power2.in',
        });
    });

    return (
        <div
            ref={containerRef}
            className="max-xl:hidden absolute bottom-0 left-[66%] -translate-x-1/2"
        >
            {/* the banner's scroll animation moves this wrapper, so it must not
                share an element with the tailwind translate above */}
            <div className="slide-up-and-fade">
                <div
                    // tall enough for the head to line up with the banner title,
                    // which sits about 200px above the vertical centre; capped
                    // at 42vw tall (~30vw wide) so on tall, narrow screens it
                    // doesn't spill over the text or the stats
                    className="portrait-inner relative h-[min(calc(50svh+200px),42vw)] aspect-[436/618]"
                    // fade the bottom edge into the background so the cut at
                    // the shoulders doesn't look like a hard line
                    style={{
                        maskImage:
                            'linear-gradient(to top, transparent 0%, #000 18%)',
                        WebkitMaskImage:
                            'linear-gradient(to top, transparent 0%, #000 18%)',
                    }}
                    onMouseEnter={handleMouseEnter}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                >
                    <Image
                        src="/images/hero-portrait.png"
                        alt="Victor Tunchez"
                        fill
                        priority
                        sizes="600px"
                        className="object-contain object-bottom grayscale brightness-90"
                    />
                    <div
                        ref={colorRef}
                        className="absolute inset-0"
                        style={
                            {
                                '--spot-x': '50%',
                                '--spot-y': '50%',
                                '--spot-r': '0px',
                                maskImage: SPOTLIGHT_MASK,
                                WebkitMaskImage: SPOTLIGHT_MASK,
                            } as React.CSSProperties
                        }
                    >
                        <Image
                            src="/images/hero-portrait.png"
                            alt=""
                            aria-hidden="true"
                            fill
                            sizes="600px"
                            className="object-contain object-bottom"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroPortrait;
