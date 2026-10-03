import { GENERAL_INFO } from '@/lib/data';

const Footer = () => {
    return (
        <footer className="text-center pb-5" id="contact">
            <div className="container">
                <p className="text-lg">¿Una idea, una duda o solo saludar?</p>
                <a
                    href={`mailto:${GENERAL_INFO.email}`}
                    className="text-3xl sm:text-4xl font-anton inline-block mt-5 mb-10 hover:underline break-all"
                >
                    {GENERAL_INFO.email}
                </a>

                <div className="">
                    <a
                        href={GENERAL_INFO.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="leading-none text-muted-foreground hover:underline hover:text-white"
                    >
                        {GENERAL_INFO.name}
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
