const projects = [
    {
        id: 1,
        title: "Quad Keys",
        date: "April 2026",
        description: "An end-to-end full-stack platform that pairs an automated Python Selenium scraping engine (featuring anti-bot bypass frameworks) with a responsive React frontend for real-time aggregation and client-side filtering of regional real estate data.",
        image: "/projects/quadkeys-img.png",
        demoUrl: "https://docs.google.com/presentation/d/1AHCBvGJG2TVIUQRb3v_37drSwV5lcnD5Tu8CaBxb450/edit?usp=sharing",
        githubUrl: "https://github.com/wanbings/dev_ada"
    },
    {
        id: 2,
        title: "ReframeAPI",
        date: "February 2026",
        description: "AI-powered news analysis Chrome extension that strips political bias from articles to deliver objective, real-time summaries. Powered by a FastAPI backend and Google Gemini 2.5 Flash, the system architecture features an asynchronous web scraper built with BeautifulSoup4 and a lightweight Manifest V3 frontend.",
        image: "/projects/reframe-img.png",
        demoUrl: "https://devpost.com/software/reframe-723yho",
        githubUrl: "https://github.com/hethp/Reframe-API"
    },
    {
        id: 3,
        title: "ClassGPT",
        date: "October 2025",
        description: "Interactive Python and HTML chatbot designed to streamline academic course discovery. The platform processes raw course datasets and utilizes a custom conversational interface (chatbot.py) to map student queries to specific schedules and requirements, simplifying academic planning.",
        image: "/projects/classgpt-img.png",
        demoUrl: "https://docs.google.com/presentation/d/19Z9enH4bbN6OrfiQsVIvZ8G4wZMq1evEnHVyIGTLC5g/edit?usp=sharing",
        githubUrl: "https://github.com/yogurtham/course-finder"
    },
    {
        id: 4,
        title: "X-Spot",
        date: "April 2024",
        description: "Web application simplifies the process of purchasing a bow through a step-by-step guided setup. The website walks users through complex product options with inline documentation, tracks cumulative component pricing in real time to prevent budget overruns, and generates a cohesive, itemized inventory list with precise total cost aggregations at the end of the user flow.",
        image: "/projects/xspot-img.png",
        demoUrl: "https://www.youtube.com/watch?v=kl-ikznkEPs",
    }
]

export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative bg-background">
            <div className="container mx-auto max-w-5xl">
                <div className="flex flex-col gap-24">
                    {projects.map((project, index) => {
                        // Determines if the row order should invert (image on the right)
                        const isEven = index % 2 === 0;

                        return (
                            <div 
                                key={project.id} 
                                className={`flex flex-col md:flex-row gap-8 items-center group ${
                                    isEven ? "" : "md:flex-row-reverse"
                                }`}
                            >
                                <div className="w-full md:w-1/2 overflow-hidden rounded-lg border border-border bg-muted/30 aspect-[16/10]">
                                    <img 
                                        src={project.image} 
                                        alt={project.title} 
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]" 
                                    />
                                </div>

                                <div className="w-full md:w-1/2 flex flex-col justify-center px-2">
                                    <div className="flex items-baseline justify-between mb-2">
                                        <h3 className="text-2xl font-semibold tracking-tight text-foreground">
                                            {project.title}
                                        </h3>
                                        <span className="text-sm font-medium text-muted-foreground/80">
                                            {project.date}
                                        </span>
                                    </div>
                                    
                                    <p className="text-muted-foreground leading-relaxed font-normal mb-6 text-sm text-left">
                                        {project.description}
                                    </p>

                                    {/* Action Links */}
                                    <div className="flex items-center gap-4 text-sm font-medium">
                                        {project.githubUrl && (
                                            <a 
                                                href={project.githubUrl} 
                                                target="_blank" 
                                                rel="noreferrer"
                                                className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors"
                                            >
                                                <span>Source</span>
                                            </a>
                                        )}
                                        {project.demoUrl && (
                                            <a 
                                                href={project.demoUrl} 
                                                target="_blank" 
                                                rel="noreferrer"
                                                className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors"
                                            >
                                                <span>Demo</span>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}