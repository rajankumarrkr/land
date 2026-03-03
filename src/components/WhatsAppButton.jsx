import React from 'react';

const WhatsAppButton = () => {
    return (
        <div className="fixed bottom-6 right-6 z-50">
            <a
                href="https://wa.me/919234121545?text=Hi%20I%20want%20details"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center bg-emerald-500 text-white w-14 h-14 md:px-5 md:py-3.5 md:w-auto rounded-full md:rounded-2xl shadow-[0_8px_30px_rgb(16,185,129,0.3)] transition-all duration-300 hover:bg-emerald-600 hover:scale-110 active:scale-95 animate-float border border-white/20"
            >
                <div className="flex items-center gap-2.5">
                    <svg className="w-7 h-7 md:w-5 md:h-5 fill-white" viewBox="0 0 24 24">
                        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.038 3.069l-.442 1.616 1.667-.437c.746.505 1.581.773 2.458.774h.002c3.18 0 5.766-2.587 5.767-5.767 0-3.181-2.587-5.766-5.767-5.766-.001 0-.001 0-.001 0zm3.377 8.272c-.14.393-.811.719-1.118.762-.307.043-.68.069-1.109-.069-.26-.084-.601-.191-1.02-.363-1.78-.735-2.935-2.541-3.024-2.659-.088-.118-.72-1.042-.72-1.928s.46-.1.62-.224l.099-.044.225-.045c.083-.014.166-.021.248-.021.08 0 .158.059.21.146l.542 1.304c.054.129.081.252.081.369 0 .117-.027.24-.081.369L11.5 12.5c-.053.129-.08.252-.08.369 0 .117.026.24.08.369l.542 1.304c.054.129.081.252.081.369s-.027.24-.081.369L12.5 13.5l.5-.5.5.5.5.5.5.5.5.5.5.5.5.5.5.5z" />
                        <path d="M12.04 2.01c-5.51 0-9.99 4.48-9.99 9.99 0 2.05.62 3.95 1.7 5.53L2 22l4.63-1.22c1.61 1.06 3.52 1.67 5.58 1.67 5.51 0 9.99-4.48 9.99-9.99s-4.48-9.99-9.99-9.99zm0 18.2c-1.84 0-3.55-.54-5-1.48l-.36-.23-2.73.72.73-2.66-.24-.39c-.99-1.57-1.51-3.38-1.51-5.24 0-4.52 3.68-8.2 8.2-8.2s8.2 3.68 8.2 8.2-3.68 8.2-8.2 8.2z" />
                    </svg>
                    <span className="hidden md:block font-bold">Details on WhatsApp</span>
                </div>
            </a>
            {/* Soft Glow */}
            <div className="absolute inset-0 bg-emerald-500 rounded-full blur-2xl scale-125 opacity-10 -z-10 animate-pulse"></div>
        </div>
    );
};

export default WhatsAppButton;
