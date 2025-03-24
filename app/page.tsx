import Image from "next/image";
import "@fontsource/inter"; // Default weight
import "@fontsource/roboto"; // Alternative

export default function Home() {
    return (
        <>
            <head>
                <link
                    href="https://fonts.googleapis.com/css2?amily=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap&family=Roboto:wght@400;700&display=swap"
                    rel="stylesheet"
                />
                <title>Mitul Gautam</title>
            </head>
            <div className={"sm:mx-24 sm:mt-12 md:mx-48 md:mt-24 flex flex-col"}>
                <div className={"flex flex-row"}>
                    <header className={"md:w-full h-max text-3xl font-bold bg-pink-200"}>
                    <span>
                        <h1 className={"font-inter"}>Hello, I'm Mitul</h1>
                    </span>
                    </header>
                    <nav className={"w-1/3 flex flex-col"}>
                        <a href={"#"} className={"px-16 font-bold text-gray-300 text-2xl hover:text-red-700"}>Me</a>
                        <a href={"#about"}
                           className={"px-16 font-bold text-gray-300 text-2xl hover:text-red-700"}>About</a>
                        <a href={"#projects"}
                           className={"px-16 font-bold text-gray-300 text-2xl hover:text-red-700"}>Project</a>
                        <a href={"#work"}
                           className={"px-16 font-bold text-gray-300 text-2xl hover:text-red-700"}>Work</a>
                        <a href={"#cricket"}
                           className={"px-16 font-bold text-gray-300 text-2xl hover:text-red-700"}>Cricket</a>
                    </nav>
                </div>
                <div className={"pt-12"}>
                    <span className={"font-medium text-lg"}>Experienced Senior Software Engineer with 5+ years in finance-based products and enterprise software solutions.<br/>Skilled in designing product architecture (LLD & HLD), developing REST APIs, optimizing SQL queries, and building mobile & web applications.</span>
                </div>
                <main className={"flex flex-row"}>
                    <section className={"px-8 mt-24 font-bold text-2xl"}>Projects Section</section>
                    <section className={"px-8 mt-24 font-bold text-2xl"}>Thoughts & Ideas Section</section>
                    <section className={"px-8 mt-24 font-bold text-2xl"}>Bio Section</section>
                </main>
                <footer className={"p-5 text-center"}>Refer for portfolio template <a className={"text-red-700"}
                                                                                      href={"https://rsms.me/"}>www.rsms.me</a>
                </footer>
            </div>
        </>
    );
}
