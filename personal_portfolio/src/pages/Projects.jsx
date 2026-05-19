import { NavBar } from "../components/NavBar"
import { ProjectsSection } from "../components/ProjectsSection"

export const Projects = () => {
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
        <NavBar />
        <main className="container max-w-4xl ml-auto px-4 z-10 pt-32">
            <h1 className="text-3xl md:text-4xl font-bold mb-12 text-left animate-fade-in">stuff i <span className="text-primary">made</span></h1>
            <div className="animate-fade-in-delay-1 opacity-0">
                <ProjectsSection />
            </div>
        </main>
    </div>
}