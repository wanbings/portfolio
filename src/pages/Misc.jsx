import { NavBar } from "../components/NavBar"

export const Misc = () => {
    const favs = [
        {
            id: 1,
            title: "only - leehi",
            subtitle: "music",
            description: "i rediscovered this song recently after my friend showed me the music video. the aesthetics and cinematography are stunning.",
            link: "https://www.youtube.com/watch?v=KmOVNVZEP9o"
        },
        {
            id: 2,
            title: "bubbl'r",
            subtitle: "beverages",
            description: "these got me through freshman year of college. the watermelon flavor is my favorite, but they're all pretty good. it also doesn't have a ton of caffiene in it.",
        },
        {
            id: 3,
            title: "when life gives you tangerines",
            subtitle: "media",
            description: "my friend was begging me to watch this show and i finally started it. it's a super emotional and bittersweet show.",
            link: "https://www.netflix.com/title/81681535"
        },
        {
            id: 4,
            title: "malatang",
            subtitle: "eats",
            description: "i usually get the mild or tomato broth because i have a bad spice tolerance... but it's super warm and comforting, especially in the winter.",
        },
        {
            id: 5,
            title: "seasons of lovesome",
            subtitle: "webtoon",
            description: "the original \"seasons of blossom\" webtoon is my all-time favorite, so i have been enjoying this sequel series as well.",
            link: "https://www.webtoons.com/en/romance/seasons-of-lovesome/list?title_no=6881"
        },
        {
            id: 6,
            title: "happiness falls - angie kim",
            subtitle: "reads",
            description: "i got this book for free at my local library a year or two ago, so i decided to give it a read. not too far in yet, but it seems interesting.",
            link: "https://www.goodreads.com/en/book/show/75495002-happiness-falls"
        }
    ];

    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
            <NavBar />
            <main className="container max-w-5xl mx-auto px-4 z-10 pt-32">
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-12 text-left opacity-0 animate-fade-in">
                    in my <span className="text-primary">free time</span>
                </h1>
                <div className="flex flex-row gap-12 opacity-0 animate-fade-in-delay-1 mb-12 overflow-x-auto whitespace-nowrap scrollbar-none pb-2">
                    <h3 className="text-2xl text-foreground hover:text-primary transition-colors duration-300 cursor-pointer">archery</h3>
                    <h3 className="text-2xl text-foreground hover:text-primary transition-colors duration-300 cursor-pointer">soccer</h3>
                    <h3 className="text-2xl text-foreground hover:text-primary transition-colors duration-300 cursor-pointer">pickleball</h3>
                    <h3 className="text-2xl text-foreground hover:text-primary transition-colors duration-300 cursor-pointer">lifting</h3>
                    <h3 className="text-2xl text-foreground hover:text-primary transition-colors duration-300 cursor-pointer">coloring</h3>
                    <h3 className="text-2xl text-foreground hover:text-primary transition-colors duration-300 cursor-pointer">roblox</h3>
                </div>

                <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-12 text-left opacity-0 animate-fade-in">
                    my current <span className="text-primary">rotation</span>
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 opacity-0 animate-fade-in-delay-1 pb-24">
                    {favs.map((item) => {
                        const cardClasses = "flex flex-col group border border-border rounded-lg overflow-hidden bg-muted/10 hover:bg-muted/20 transition-colors duration-300 text-left"
                       
                        const cardContent = (
                            <div className="p-5 flex flex-col flex-grow">
                                <div className="flex items-baseline justify-between mb-2 gap-2">
                                    <h4 className="text-lg font-semibold tracking-tight text-foreground group-hover:text-primary transition-colors duration-300 whitespace-normal break-words">
                                        {item.title}
                                    </h4>
                                    <span className="text-xs font-medium text-muted-foreground/80 shrink-0">
                                        {item.subtitle}
                                    </span>
                                </div>
                                <p className="text-muted-foreground leading-relaxed font-normal text-xs">
                                    {item.description}
                                </p>
                            </div>
                        );

                        // If a link is provided, render it inside a secure external anchor component tag
                        if (item.link) {
                            return (
                                <a 
                                    key={item.id}
                                    href={item.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className={`${cardClasses} cursor-pointer hover:border-primary/30`}
                                >
                                    {cardContent}
                                </a>
                            );
                        }

                        // Otherwise, return it as a standard structural block element wrapper layout component
                        return (
                            <div key={item.id} className={cardClasses}>
                                {cardContent}
                            </div>
                        );
                    })}
                </div>
            </main>
        </div>
    )
}