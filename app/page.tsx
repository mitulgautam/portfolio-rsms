import {Inter} from "next/font/google"

const inter = Inter({subsets: ['latin'], weight: ['400', '500', '600', '700']})

export default function Home() {
    return (
        <>
            <div className={"my-24 mx-8 sm:mx-24 sm:mt-12 md:mx-48 md:mt-24 flex flex-col " + inter.className}>
                <div className={"flex flex-col sm:flex-row"}>
                    <header className={"md:w-full h-max text-4xl font-bold"}>
                    <span>
                        <span className={"bg-red-200 w-max px-1"}>{"Hello, I'm Mitul"}</span>
                    </span>
                    </header>
                    <nav className={"sm:w-1/3 flex flex-col mt-24 sm:mt-0"}>
                        <a href={"#"}
                           className={"sm:px-16 font-semibold text-gray-300 text-2xl hover:text-red-700"}>Me</a>
                        <a href={"#about"}
                           className={"sm:px-16 font-semibold text-gray-300 text-2xl hover:text-red-700"}>About</a>
                        <a href={"#projects"}
                           className={"sm:px-16 font-semibold text-gray-300 text-2xl hover:text-red-700"}>Project</a>
                        <a href={"#work"}
                           className={"sm:px-16 font-semibold text-gray-300 text-2xl hover:text-red-700"}>Work</a>
                        <a href={"#cricket"}
                           className={"sm:px-16 font-semibold text-gray-300 text-2xl hover:text-red-700"}>Cricket</a>
                    </nav>
                </div>
                <div className={"pt-4 mt-16 sm:mt-0 font-semibold text-2xl sm:pt-12 sm:hidden"}>
                    <span>Experienced Senior Software Engineer with 5+ years in finance-based products and enterprise software solutions.</span>
                </div>
                <main className={"sm:flex sm:flex-row w-max mt-24 font-bold text-2xl"}>
                    <section className={"px-8"}>Projects Section</section>
                    <section className={"px-8"}>Thoughts & Ideas Section</section>
                    <section className={"px-8"}>
                        <div className={"w-1/3 hidden sm:block"}>
                            <p>Experienced Senior Software Engineer with 5+ years in finance-based products and enterprise software solutions.</p>
                        </div>
                    </section>
                </main>
                <footer className={"p-4 text-center"}>Refer for portfolio template <a className={"text-red-700"}
                                                                                      href={"https://rsms.me/"}>www.rsms.me</a>
                </footer>
            </div>
        </>
    );
}
