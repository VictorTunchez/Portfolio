'use client';
import SectionTitle from '@/components/SectionTitle';
import { MY_CERTIFICATIONS, MY_EDUCATION } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { MoveUpRight } from 'lucide-react';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Education = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    // animate each item on its own trigger: this section sits at the bottom of
    // the page, so a scrubbed timeline over the whole container never finishes
    useGSAP(
        () => {
            gsap.utils
                .toArray<HTMLElement>('.education-item')
                .forEach((item) => {
                    gsap.from(item, {
                        y: 50,
                        opacity: 0,
                        duration: 0.6,
                        scrollTrigger: {
                            trigger: item,
                            start: 'top 90%',
                            once: true,
                        },
                    });
                });
        },
        { scope: containerRef },
    );

    return (
        <section className="pb-section" id="education">
            <div className="container" ref={containerRef}>
                <SectionTitle title="Formación" />

                <div className="grid gap-14">
                    {MY_EDUCATION.map((item) => (
                        <div key={item.title} className="education-item">
                            <p className="text-xl text-muted-foreground">
                                {item.institution}
                            </p>
                            <p className="text-5xl font-anton leading-none mt-3.5 mb-2.5">
                                {item.title}
                            </p>
                            <p className="text-lg text-muted-foreground">
                                {item.duration}
                            </p>
                        </div>
                    ))}
                </div>

                <SectionTitle title="Certificaciones" className="mt-section" />

                <div className="group/certs flex flex-col">
                    {MY_CERTIFICATIONS.map((cert, index) => (
                        <a
                            key={cert.title}
                            href={cert.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="education-item group flex gap-2 md:gap-5 py-5 border-b last:border-none md:group-hover/certs:opacity-30 md:hover:!opacity-100 transition-all"
                        >
                            <div className="font-anton text-muted-foreground">
                                _{(index + 1).toString().padStart(2, '0')}.
                            </div>
                            <div>
                                <h4 className="text-3xl xs:text-4xl flex items-center gap-4 font-anton leading-none transition-all duration-700 bg-gradient-to-r from-primary to-foreground from-[50%] to-[50%] bg-[length:200%] bg-right bg-clip-text text-transparent group-hover:bg-left">
                                    {cert.title}
                                    <MoveUpRight className="text-foreground opacity-0 group-hover:opacity-100 transition-all shrink-0" />
                                </h4>
                                <p className="mt-2 text-muted-foreground text-sm">
                                    {cert.issuer}
                                </p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
