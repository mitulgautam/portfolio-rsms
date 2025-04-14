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
                    <span>Experienced Senior Software Engineer with 5+ years in finance-based products and enterprise software solutions. Skilled in designing product architecture (LLD & HLD), developing REST APIs, optimizing SQL queries, and building mobile & web applications. Proven expertise as a full-stack engineer in both team and solo projects, with experience in leading teams. Passionate about optimizing system performance and enhancing user experience through efficient software solutions.</span>
                </div>
                <main className={"sm:flex sm:flex-row mt-24"}>
                    <section className={"w-1/2"}>
                        <div>
                            <p className={"text-lg font-semibold text-red-900"}>Pay Service</p>
                            <p className={"text-sm font-normal"}>Designed and implemented scalable database schemas,
                                developed REST-ful APIs using Java 17 with the Spring Boot framework, and built modern,
                                responsive front-end interfaces using Next.js 15. Utilized Tailwind CSS and ShadCN UI
                                for clean, accessible UI design. Experienced in writing optimized SQL queries with
                                PostgreSQL for efficient data access and management.</p>
                        </div>
                        <div className={"pt-4"}>
                            <p className={"text-lg font-semibold text-red-900"}>Pay Service(Legacy)</p>
                            <p className={"text-sm font-normal"}>Maintained and supported a legacy system built with
                                JAX-WS for backend services, OracleDB as the database, and JSP for the frontend. Focused
                                on optimizing database procedures and improving API performance by refining complex
                                database views and optimizing SQL joins.</p>
                        </div>
                        <div className={"pt-4"}>
                            <div className={"flex items-center"}><p
                                className={"text-lg font-semibold text-red-900"}>First Performance</p>
                                <p className={"text-xs font-medium pl-1 text-red-900"}>(acquired by
                                    MasterCard)</p></div>
                            <p className={"text-sm font-normal"}>Contributed to the development of a transaction
                                cleansing system for credit/debit card data, enhancing the readability of transaction
                                records. Collaborated in a team of four to design and develop serverless APIs using AWS
                                Lambda (Python) for efficient data processing. Utilized Pandas to create and update
                                scripts for large-scale data cleansing, handling datasets with over 5 million records
                                extracted from user transaction files.</p>
                        </div>
                    </section>
                    <section className={"px-8 w-1/2 font-semibold text-red-900"}>Thoughts & Ideas</section>
                    <section className={"px-8 w-1/2"}>
                        <div className={"hidden sm:block"}>
                            <p className={"text-lg font-semibold text-red-900"}>Summary</p>
                            <p className={"text-sm font-normal"}>Experienced Senior Software Engineer with 5+ years in
                                finance-based products and enterprise software solutions. Skilled in designing product
                                architecture (LLD & HLD), developing REST APIs, optimizing SQL queries, and building
                                mobile & web applications. Proven expertise as a full-stack engineer in both team and
                                solo projects, with experience in leading teams. Passionate about optimizing system
                                performance and enhancing user experience through efficient software solutions.</p>
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
