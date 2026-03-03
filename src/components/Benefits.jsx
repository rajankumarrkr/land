import React from 'react';

const benefits = [
    {
        title: "Beginner Friendly",
        description: "No prior experience required. Our progressive path guides you from basics to advanced techniques.",
        icon: (
            <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        )
    },
    {
        title: "Flexible Work",
        description: "Work on your own terms. Your effort determines your results.",
        icon: (
            <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        )
    }
];

const Benefits = () => {
    return (
        <section className="py-12 md:py-16 px-4 bg-gray-50/50">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12 animate-reveal">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 font-['Poppins',sans-serif] text-gray-900">Why Join Us?</h2>
                    <p className="text-gray-500 max-w-xl mx-auto text-lg">To Earn Money From Your Mobile.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className={`premium-card p-8 rounded-2xl animate-reveal reveal-delay-${index + 1} flex items-start gap-5`}
                        >
                            <div className="flex-shrink-0 p-3 bg-emerald-100 rounded-xl border border-emerald-200">
                                {benefit.icon}
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2 text-gray-900">
                                    {benefit.title}
                                </h3>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    {benefit.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Benefits;
