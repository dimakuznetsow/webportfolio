import visited from "../images/Visited.png"
import converto from "../images/converto.png"
import aleph from "../images/aleph.png"
import { ImGithub } from "react-icons/im"
import { TbWorldWww } from "react-icons/tb"
import { SiPostgresql, SiMongodb, SiReact, SiExpress, SiJavascript, SiNextdotjs } from "react-icons/si"


function Projects() {
    return (
        <>
            <div id="myProjects" className="hidden sm:block">
                <section className="mx-4 lg:mx-80 flex-col justify-center">
                    <div className="flex justify-center mt-56">
                        <div className="flex gap-8 2xl:gap-16">
                            <div className="flex-col -mt-6">
                                <h1 className="text-2xl font-bold text-primary mb-8">Projects</h1>
                                <div className="w-full">
                                    <img loading="lazy" src={visited} alt="visited" className="h-48 w-full" />
                                </div>
                            </div>
                            <div className="mt-8">
                                <div>
                                    <h1 className="font-bold text-xl">Visited</h1>
                                    <p className="text-sm mt-2 w-100">Visited is a useful project that allows users to easily check visa requirements for countries they plan to visit. Additionally, users can keep track of the countries they have already visited by adding them to a personalized list within the platform.</p>
                                    <ul className="flex justify-start gap-6 mt-6 font-semibold">
                                        <li className="flex items-center gap-1">Express <SiExpress size={20} /></li>
                                        <li className="flex items-center gap-1">React <SiReact size={20} /></li>
                                        <li className="flex items-center gap-1">MongoDB <SiMongodb size={20} /></li>
                                    </ul>
                                </div>
                                <ul className="flex justify-start gap-8 mt-8 text-lg font-bold">
                                    <li>
                                        <a className="btn flex items-center gap-2" href="https://visited.onrender.com/" target="_blank">
                                            Demo <TbWorldWww size={20} />
                                        </a>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <a className="btn flex items-center gap-2" href="https://github.com/dimakuznetsow/Visited" target="_blank">
                                            Code <ImGithub size={20} />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center mt-28">
                        <div className="flex gap-8 2xl:gap-16">
                            <div>
                                <div>
                                    <h1 className="font-bold text-xl">Converto</h1>
                                    <p className="text-sm mt-2 w-100">Chrome extension that allows users to easily convert currency and units of measurement by simply highlighting the desired text, it displays the converted amount in a bubble above the highlighted text.</p>
                                    <ul className="flex justify-start gap-6 mt-6 font-semibold">
                                        <li className="flex items-center gap-1">React <SiReact size={20} /></li>
                                        <li className="flex items-center gap-1">JS <SiJavascript size={20} /></li>
                                    </ul>
                                </div>
                                <ul className="flex justify-start gap-8 mt-8 text-lg font-bold">
                                    <li>
                                        <a className="btn flex items-center gap-2" href="https://chrome.google.com/webstore/detail/converto/ojlkpjnnpcmdpdifocpdbgoaaeofbghd?hl" target="_blank">
                                            Demo <TbWorldWww size={20} />
                                        </a>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <a className="btn flex items-center gap-2" href="https://github.com/dimakuznetsow/Converto" target="_blank">
                                            Code <ImGithub size={20} />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <img loading="lazy" src={converto} alt="converto" className="h-48" />
                        </div>
                    </div>
                    <div className="flex justify-center mt-28">
                        <div className="flex gap-8 2xl:gap-16">
                            <img loading="lazy" src={aleph} alt="aleph" className="h-48" />
                            <div className="">
                                <div>
                                    <h1 className="font-bold text-xl">a-leph</h1>
                                    <p className="text-sm mt-2 w-100">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero nam quam rerum exercitationem quasi beatae ab repudiandae vel ex neque fugiat odit recusandae pariatur cupiditate a, est ipsum laborum dolores.</p>
                                    <ul className="flex justify-start gap-6 mt-6 font-semibold">
                                        <li className="flex items-center gap-1">Next <SiNextdotjs size={20} /></li>
                                        <li className="flex items-center gap-1">PostgreSQL <SiPostgresql size={20} /></li>
                                    </ul>
                                </div>
                                <ul className="flex justify-start gap-8 mt-8 text-lg font-bold">
                                    <li>
                                        <a className="btn flex items-center gap-2" href="https://a-leph.vercel.app/" target="_blank">
                                            Demo <TbWorldWww size={20} />
                                        </a>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <a className="btn flex items-center gap-2" href="https://github.com/dimakuznetsow/Ecommerce" target="_blank">
                                            Code <ImGithub size={20} />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section >
            </div >
            <div id="myProjects-xs" className="block sm:hidden">
                <section className="flex-col justify-center mt-20">
                    <h1 className="text-2xl font-bold text-primary mx-4">Projects</h1>
                    <div className="mx-4 mt-8">
                        <div className="flex-col">
                            <img loading="lazy" src={visited} alt="visited" className="h-48 w-full" />
                            <div className="mt-6">
                                <div>
                                    <h1 className="font-bold text-xl">Visited</h1>
                                    <p className="text-sm mt-2">Visited is a useful project that allows users to easily check visa requirements for countries they plan to visit. Additionally, users can keep track of the countries they have already visited by adding them to a personalized list within the platform.</p>
                                    <ul className="flex justify-start gap-6 mt-4 font-semibold">
                                        <li className="flex items-center gap-1">Express <SiExpress size={20} /></li>
                                        <li className="flex items-center gap-1">React <SiReact size={20} /></li>
                                        <li className="flex items-center gap-1">MongoDB <SiMongodb size={20} /></li>
                                    </ul>
                                </div>
                                <ul className="flex justify-start gap-4 mt-4 text-lg font-bold">
                                    <li>
                                        <a className="btn flex items-center gap-2" href="https://visited.onrender.com/" target="_blank">
                                            Demo <TbWorldWww size={20} />
                                        </a>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <a className="btn flex items-center gap-2" href="https://github.com/dimakuznetsow/Visited" target="_blank">
                                            Code <ImGithub size={20} />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="mx-4 mt-10">
                        <div className="flex-col">
                            <img loading="lazy" src={converto} alt="visited" className="h-48 w-full" />
                            <div className="mt-6">
                                <div>
                                    <h1 className="font-bold text-xl">Converto</h1>
                                    <p className="text-sm mt-2">Chrome extension that allows users to easily convert currency and units of measurement by simply highlighting the desired text, it displays the converted amount in a bubble above the highlighted text.</p>
                                    <ul className="flex justify-start gap-6 mt-4 font-semibold">
                                        <li className="flex items-center gap-1">React <SiReact size={20} /></li>
                                        <li className="flex items-center gap-1">JS <SiJavascript size={20} /></li>
                                    </ul>
                                </div>
                                <ul className="flex justify-start gap-4 mt-4 text-lg font-bold">
                                    <li>
                                        <a className="btn flex items-center gap-2" href="https://chrome.google.com/webstore/detail/converto/ojlkpjnnpcmdpdifocpdbgoaaeofbghd?hl" target="_blank">
                                            Demo <TbWorldWww size={20} />
                                        </a>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <a className="btn flex items-center gap-2" href="https://github.com/dimakuznetsow/Converto" target="_blank">
                                            Code <ImGithub size={20} />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="mx-4 mt-10">
                        <div className="flex-col">
                            <img loading="lazy" src={aleph} alt="visited" className="h-48 w-full" />
                            <div className="mt-6">
                                <div>
                                    <h1 className="font-bold text-xl">a-leph</h1>
                                    <p className="text-sm mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum repellendus deserunt veritatis odit, porro tempora quam tempore beatae nostrum molestiae odio vero inventore omnis, voluptatum ipsum id. Repellat, voluptates pariatur.</p>
                                    <ul className="flex justify-start gap-6 mt-4 font-semibold">
                                        <li className="flex items-center gap-1">Next <SiNextdotjs size={20} /></li>
                                        <li className="flex items-center gap-1">PostgreSQL <SiPostgresql size={20} /></li>
                                    </ul>
                                </div>
                                <ul className="flex justify-start gap-4 mt-4 text-lg font-bold">
                                    <li>
                                        <a className="btn flex items-center gap-2" href="https://a-leph.vercel.app/" target="_blank">
                                            Demo <TbWorldWww size={20} />
                                        </a>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <a className="btn flex items-center gap-2" href="https://github.com/dimakuznetsow/Ecommerce" target="_blank">
                                            Code <ImGithub size={20} />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section >
            </div >
        </>
    )
}

export default Projects