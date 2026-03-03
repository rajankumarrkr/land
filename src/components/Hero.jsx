import React from 'react';

const Hero = () => {
    return (
        <section className="relative overflow-hidden pt-16 pb-8 md:pt-24 md:pb-12 px-4">
            {/* Light Mode Glow Background */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[300px] bg-emerald-500/5 blur-[100px] rounded-full -z-10 pointer-events-none"></div>

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-[10px] font-bold uppercase tracking-wider mb-6 animate-reveal">
                    <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                    </span>
                    Early Access Available
                </div>

                <h1 className="text-4xl md:text-6xl font-bold font-['Poppins',sans-serif] tracking-tight mb-8 animate-reveal reveal-delay-1 leading-tight text-gray-900">
                    Start Your <br />
                    <span className="premium-gradient-text">Online Income</span> Journey
                </h1>

                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 animate-reveal reveal-delay-3">
                    <a
                        href="https://wa.me/919234121545?text=Hi%20I%20want%20details"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white bg-emerald-600 rounded-xl transition-all duration-500 transform hover:scale-105 hover:bg-emerald-700 shadow-[0_10px_30px_-10px_rgba(5,150,105,0.4)] active:scale-95 overflow-hidden"
                    >
                        <span className="relative z-10 flex items-center">
                            Message on WhatsApp
                            <svg
                                className="ml-2 w-5 h-5 transition-transform duration-500 group-hover:translate-x-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </span>
                    </a>

                    <div className="flex items-center gap-2">
                        <div className="flex -space-x-2">
                            {[1, 2, 3].map((i) => (
                                <img key={i} src={`https://i.pravatar.cc/100?u=${i + 20}`} className="w-8 h-8 rounded-full border-2 border-white" alt="user" />
                            ))}
                        </div>
                        <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">2k+ Joined</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
