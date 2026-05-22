import {ArrowDown} from 'lucide-react';

export const HeroSection = () => {
    return (
    <section 
        id="hero" 
        className="relative min-h-screen flex flex-col items-start text-left justify-center px-4"
    >
        <div className="container max-w-4xl ml-0 text-left z-10">
            <div className="space-y-6">
                <p className="text-lg md:text-xl text-foreground/80 max-w-2xl ml-0 opacity-0 animate-fade-in">
                    hi, i'm
                </p>
                <h1 className="text-7xl md:text-9xl font-bold tracking-tight">
                    <span className="text-primary opacity-0 animate-fade-in-delay-1">jennifer luo</span>
                </h1>

                <p className="text-lg md:text-xl text-foreground/80 max-w-2xl ml-0 py-4 opacity-0 animate-fade-in-delay-3">
                    i'm a <span className="font-bold text-primary">computer science & physics</span> student with experience in full-stack development and an interest in machine learning, embedded software, and 
                    the intersection of software and physical systems.
                </p>

                {/*
                <div className="flex flex-row gap-4 pt-4 opacity-0 animate-fade-in-delay-4 ml-0">
                    <a href="#contact" className="cosmic-button">get in touch!</a>
                    <a href="" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">resume</a>
                </div>
                */}
            </div>
        </div>

        
        <div className="absolute bottom-8 transform ml-8 -translate-x-1/2 flex flex-col items-left animate-bounce">
            <ArrowDown className="h-5 w-5 text-primary" />
        </div>
            
    </section>
    );
}