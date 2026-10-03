'use client';
import { cn } from '@/lib/utils';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface InfoItem {
    label: string;
    value: string[];
}

const PERSONAL_INFO: InfoItem[] = [
    { label: 'Edad', value: ['23 años'] },
    { label: 'Vivo en', value: ['Ciudad de Guatemala'] },
    { label: 'Idiomas', value: ['Español nativo', 'Inglés intermedio'] },
];

const HOBBIES: InfoItem[] = [
    { label: 'Fútbol', value: ['Mediocentro, Visca Barça'] },
    { label: 'Música', value: ['Rock e indie pop'] },
    { label: 'Anime', value: ['Vinland Saga, Monster, Hajime no Ippo'] },
];

const InfoList = ({
    items,
    className,
}: {
    items: InfoItem[];
    className?: string;
}) => (
    <dl className={cn('space-y-4', className)}>
        {items.map((item) => (
            <div key={item.label} className="slide-up-and-fade">
                <dt className="text-sm uppercase tracking-widest text-muted-foreground">
                    {item.label}
                </dt>
                {item.value.map((line) => (
                    <dd key={line} className="text-lg mt-1">
                        {line}
                    </dd>
                ))}
            </div>
        ))}
    </dl>
);

const AboutMe = () => {
    const container = React.useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    id: 'about-me-in',
                    trigger: container.current,
                    start: 'top 70%',
                    end: 'bottom bottom',
                    scrub: 0.5,
                },
            });

            tl.from('.slide-up-and-fade', {
                y: 150,
                opacity: 0,
                stagger: 0.05,
            });
        },
        { scope: container },
    );

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    id: 'about-me-out',
                    trigger: container.current,
                    start: 'bottom 50%',
                    end: 'bottom 10%',
                    scrub: 0.5,
                },
            });

            tl.to('.slide-up-and-fade', {
                y: -150,
                opacity: 0,
                stagger: 0.02,
            });
        },
        { scope: container },
    );

    return (
        <section className="pb-section" id="about-me">
            <div className="container" ref={container}>
                <h2 className="text-4xl md:text-6xl font-thin slide-up-and-fade">
                    Si no te esfuerzas hasta el máximo, ¿cómo sabrás dónde
                    está tu límite?
                </h2>
                <p className="mt-6 mb-20 text-lg text-muted-foreground slide-up-and-fade">
                    — Hajime no Ippo
                </p>

                <p className="pb-3 border-b text-muted-foreground slide-up-and-fade">
                    Este soy yo.
                </p>

                <div className="grid md:grid-cols-12 mt-9">
                    <div className="md:col-span-5">
                        <p className="text-5xl slide-up-and-fade">
                            Hola, soy Victor.
                        </p>

                        <div className="max-md:mb-10">
                            <InfoList items={PERSONAL_INFO} className="mt-8" />

                            <p className="mt-6 font-mono text-primary slide-up-and-fade">
                                {'// fuera del código'}
                            </p>
                            <dl className="mt-1 space-y-1 text-lg">
                                {HOBBIES.map((item) => (
                                    <div
                                        key={item.label}
                                        className="slide-up-and-fade"
                                    >
                                        <dt className="inline text-muted-foreground">
                                            {item.label}:
                                        </dt>{' '}
                                        <dd className="inline">
                                            {item.value.join(', ')}
                                        </dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                    <div className="md:col-span-7">
                        <div className="text-lg text-muted-foreground max-w-[500px]">
                            <p className="slide-up-and-fade">
                                Me especializo en el desarrollo de software
                                backend. En{' '}
                                <span className="font-medium text-foreground">
                                    GBM
                                </span>{' '}
                                construyo y mantengo soluciones empresariales:{' '}
                                <span className="font-medium text-foreground">
                                    aplicaciones REST con Spring Boot, sistemas
                                    legacy en Java EE y aplicaciones de
                                    escritorio y cliente-servidor con C# y .NET
                                </span>
                                . Participo en todo el ciclo, desde las pruebas
                                y la validación hasta el soporte a usuarios
                                finales, una experiencia que me ha enseñado a
                                construir software pensando no solo en que
                                funcione, sino también en las necesidades de
                                quienes lo utilizan.
                            </p>
                            <p className="mt-3 slide-up-and-fade">
                                Me apasiona el mundo de los datos. Trabajo con
                                bases de datos como{' '}
                                <span className="font-medium text-foreground">
                                    SQL Server, PostgreSQL y DB2
                                </span>
                                , y tengo experiencia diseñando{' '}
                                <span className="font-medium text-foreground">
                                    procesos ETL, data warehouses y reportes con
                                    JasperReports
                                </span>
                                .
                            </p>
                            <p className="mt-3 slide-up-and-fade">
                                Hoy sigo creciendo como profesional: exploro
                                nuevas tecnologías, asumo retos que me hacen
                                salir de mi zona de confort y comparto lo que
                                aprendo con otros desarrolladores.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
