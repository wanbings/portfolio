import { useState, useEffect } from "react"; 
import { Menu, X } from "lucide-react";       
import { ThemeToggle } from "./ThemeToggle";
import { Link } from 'react-router-dom';

const navItems = [
    { name: "home", href: "/"},
    { name: "projects", href: "/projects", isRoute: true},
    { name: "misc", href: "/misc", isRoute: true},
];

export const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Prevent background scrolling when mobile menu is open to stop jitter
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => { document.body.style.overflow = ""; };
    }, [isMenuOpen]);

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
            isScrolled ? "py-4 bg-background/80 backdrop-blur-md border-b border-border/40 shadow-xs" : "py-6"
        }`}>

            <div className="w-full px-6 md:px-12 flex items-center justify-between relative">
                <Link className="text-xl font-bold text-primary flex items-center z-50" to="/" onClick={() => setIsMenuOpen(false)}>
                    <span>jennifer luo</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {navItems.map((item, key) => (
                        <Link key={key} to={item.href} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-300">
                           {item.name} 
                        </Link>
                    ))}
                    <ThemeToggle />
                </div>

                {/* Mobile Menu Trigger Button */}
                <button 
                    onClick={() => setIsMenuOpen((prev) => !prev)} 
                    className="md:hidden p-2 text-foreground z-50 focus:outline-hidden"
                    aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                >
                    {isMenuOpen ? <X size={22}/> : <Menu size={22} />}
                </button>

                {/* Mobile Screen Overlay */}
                <div className={`fixed inset-0 h-screen w-screen bg-background/98 backdrop-blur-lg flex flex-col items-center justify-center transition-all duration-300 md:hidden ${
                    isMenuOpen 
                        ? "opacity-100 translate-y-0 pointer-events-auto" 
                        : "opacity-0 -translate-y-4 pointer-events-none"
                }`}>
                    <div className="flex flex-col items-center space-y-8 text-2xl font-semibold tracking-tight">
                        {navItems.map((item, key) => (
                            <Link 
                                key={key} 
                                to={item.href} 
                                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name} 
                            </Link>
                        ))}
                        <div className="pt-4">
                            <ThemeToggle />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};