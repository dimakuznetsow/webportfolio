import { ImLinkedin, ImGithub } from "react-icons/im"
import { FiMail } from "react-icons/fi"




function Contacts() {
    return (
        <>
            <div id="myContacts" className="hidden sm:block">
                <section className="mx-4 lg:mx-80 flex-col justify-center pb-80 pt-64">
                    <div className="flex justify-center -ml-24 2xl:-ml-40 ">
                        <div className="flex gap-8 2xl:gap-16">
                            <div className="flex-col -mt-6">
                                <h1 className="text-2xl font-bold text-primary mb-6">Contacts</h1>
                                <p className="text-2xl font-bold">Get in Touch. Connect, Collaborate, Code.</p>
                                <ul className="flex mt-20 gap-16 items-center">
                                    <li className="bg-base-200  p-4 rounded-full">
                                        <a className="flex items-center gap-2" href="https:github.com/dimakuznetsow" target="_blank">
                                            <ImGithub size={44} />
                                        </a>
                                    </li>
                                    <li className="bg-base-200 p-4 rounded-full">
                                        <a className="flex items-center gap-2" href="https:www.linkedin.com/in/dimakuznetsow/" target="_blank">
                                            <ImLinkedin size={44} />
                                        </a>
                                    </li>
                                    <li className="bg-base-200 p-4 rounded-full">
                                        <a className="flex items-center gap-2" href="mailto:dimakuznetsow@gmail.com" >
                                            <FiMail size={44} />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-8">
                                <ul className="flex mt-20 gap-16 items-center">
                                    <li className="">
                                    </li>
                                    <li className="">
                                    </li>
                                    <li className="">
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section >
            </div >
            <div id="myContacts-xs" className="block sm:hidden">
                <section className="flex-col justify-center pt-56 pb-96">
                    <div className="flex-col">
                        <div className="mx-4">
                            <div className="">
                                <h1 className="text-2xl font-bold text-primary">Contacts</h1>
                                <p className="text-xl font-bold mt-4">Get in Touch. Connect, Collaborate, Code.</p>
                                <ul className="flex mt-16 gap-6 items-center">
                                    <li className="bg-base-200  p-4 rounded-full">
                                        <a className="flex items-center gap-2" href="https:github.com/dimakuznetsow" target="_blank">
                                            <ImGithub size={44} />
                                        </a>
                                    </li>
                                    <li className="bg-base-200 p-4 rounded-full">
                                        <a className="flex items-center gap-2" href="https:www.linkedin.com/in/dimakuznetsow/" target="_blank">
                                            <ImLinkedin size={44} />
                                        </a>
                                    </li>
                                    <li className="bg-base-200 p-4 rounded-full">
                                        <a className="flex items-center gap-2" href="mailto:dimakuznetsow@gmail.com" >
                                            <FiMail size={44} />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-8">
                                <ul className="flex mt-20 gap-16 items-center">
                                    <li className="">
                                    </li>
                                    <li className="">
                                    </li>
                                    <li className="">
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

export default Contacts