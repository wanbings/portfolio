import { ArrowDown } from 'lucide-react';

export const HeroSection = () => {
    return (
    <section 
        id="hero" 
        className="relative min-h-[calc(100vh-8rem)] flex flex-col items-start text-left justify-center px-4 mb-12"
    >
        <div className="w-full text-left z-10">
            <div className="space-y-6">
                <p className="text-lg md:text-xl text-foreground/80 max-w-2xl opacity-0 animate-fade-in">
                    hi, i'm
                </p>
                <h1 className="text-7xl md:text-9xl font-bold tracking-tight">
                    <span className="text-primary opacity-0 animate-fade-in-delay-1">jennifer luo</span>
                </h1>

                <p className="text-lg md:text-xl text-foreground/80 max-w-2xl py-4 opacity-0 animate-fade-in-delay-3">
                    i'm a <span className="font-bold text-primary">computer science & physics</span> student with an interest in full-stack development, machine learning, embedded software, and 
                    the intersection of software and physical systems.
                </p>
            </div>
        </div>

        <div className="absolute bottom-8 left-4 flex flex-col items-left animate-bounce">
            <ArrowDown className="h-5 w-5 text-primary" />
        </div>
            
    </section>
    );
}