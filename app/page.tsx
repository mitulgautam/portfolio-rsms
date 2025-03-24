import {Inter} from "next/font/google"

const inter = Inter({subsets: ['latin'], weight: ['400', '500', '700']})

export default function Home() {
    return (
        <>
            <div className={"sm:mx-24 sm:mt-12 md:mx-48 md:mt-24 flex flex-col " + inter.className}>
                <div className={"flex flex-row"}>
                    <header className={"md:w-full h-max text-3xl font-bold"}>
                    <span>
                        <h1 className={"bg-red-200 w-max px-1"}>{"Hello, I'm Mitul"}</h1>
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
                    <section className={"px-8 mt-24 font-medium text-2xl"}>Projects Section</section>
                    <section className={"px-8 mt-24 font-medium text-2xl"}>Thoughts & Ideas Section</section>
                    <section className={"px-8 mt-24 font-medium text-2xl"}>Bio Section</section>
                </main>
                <footer className={"p-5 text-center"}>Refer for portfolio template <a className={"text-red-700"}
                                                                                      href={"https://rsms.me/"}>www.rsms.me</a>
                </footer>
            </div>
        </>
    );
}
