const experiences = [
    {
        id: 1,
        role: "Technical Team Member",
        company: "Illinois Business Consulting",
        date: "Fall 2025 - Present",
        description: "Designed and engineered a custom, turn-based staffing web application to streamline interior project distribution and team allocations. Developed real-time event sync pipelines using Node.js and Socket.io to coordinate dynamic assignment phases across active consulting groups."
    },
    {
        id: 2,
        role: "Avionics Software Engineer & Launch Operations",
        company: "Illinois Space Society",
        date: "August 2025 - Present",
        description: "Develop and test embedded avionics software using C++ to integrate Feather Duo microcontrollers, STM32-based wireless modules, and internal flight sensors. Write optimized firmware for real-time telemetry extraction while maintaining live ground station communications and hardware link integrity during active vehicle launch operations."
    },
    {
        id: 3,
        role: "Instructor",
        company: "Mathnasium",
        date: "April 2023 - July 2025",
        description: "Instructed and mentored over 120 students in focused, small-group settings, breaking down abstract problem-solving methodologies and numerical reasoning through AP Calculus. Adapted real-time teaching styles to diverse technical learning paces to build core numerical fluency."
    }
]

export const ExperienceSection = () => {
    return (
        <section id="experience" className="pb-24 relative w-full pt-12 px-4">
            
            <div className="container ml-0 max-w-5xl">
                <h1 className="text-3xl md:text-4xl ml-0 font-bold mb-12 text-left">experience</h1>
                {/* Vertical Timeline Trunk line */}
                <div className="relative pl-6 sm:pl-8 border-l border-border/70 ml-2 space-y-14">
                    
                    {experiences.map((exp) => (
                        <div key={exp.id} className="relative group">
                            
                            {/* Timeline Node Ring */}
                            <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 border-border bg-background transition-colors duration-300 group-hover:border-primary group-hover:bg-primary/20 z-10" />

                            {/* Header details block */}
                            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
                                <div className="text-left">
                                    <h3 className="text-lg font-bold text-foreground tracking-tight group-hover:text-primary transition-colors">
                                        {exp.role}
                                    </h3>
                                    <span className="text-sm font-medium text-muted-foreground">
                                        {exp.company}
                                    </span>
                                </div>
                                
                                <span className="text-xs font-medium text-muted-foreground/60 whitespace-nowrap sm:text-right text-left">
                                    {exp.date}
                                </span>
                            </div>

                            {/* Paragraph text */}
                            <p className="text-muted-foreground text-sm font-normal leading-relaxed text-left max-w-2xl">
                                {exp.description}
                            </p>

                        </div>
                    ))}

                </div>

            </div>
        </section>
    )
}
