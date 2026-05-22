export const ContactSection = () => {
    return <section id="contact" className="pt-24 px-4 relative">
        <div className="container ml-0 max-w-5xl">
            <h2 className="text-3xl md:text-4xl ml-0 font-bold mb-12 text-left">
                more of <span className="text-primary">me</span>
            </h2>
            <div className="flex flex-row md:flex-row gap-12 overflow-x-auto whitespace-nowrap scrollbar-none">
                <a href="https://www.linkedin.com/in/jenniferwluo" className="text-2xl text-foreground hover:text-primary transition-colors duration-300">
                    linkedin
                </a>
                <a href="https://github.com/wanbings" className="text-2xl text-foreground hover:text-primary transition-colors duration-300">
                    github
                </a>
                <a href="https://www.instagram.com/wanbings" className="text-2xl text-foreground hover:text-primary transition-colors duration-300">
                    instagram
                </a>
                <a href="mailto:jenniferluo2006@gmail.com" className="text-2xl text-foreground hover:text-primary transition-colors duration-300">
                    email
                </a>
            </div>
        </div>
    </section>
}