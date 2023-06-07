import { ImLinkedin, ImGithub } from "react-icons/im"
import { FiMail } from "react-icons/fi"



function Contacts() {
    return (

        <div id="myContacts" className="">
            <h1 className="mx-80 pt-48 text-2xl font-bold text-primary">Contacts</h1>
            <div className="mx-80 pb-80">
                <p className="text-2xl font-bold mt-4">Get in Touch. Connect, Collaborate, Code.</p>
                <ul className="flex justify-start mt-20 gap-16 items-center">
                    <li className="bg-sky-100 p-4 rounded-full shadow-sm">
                        <a className="flex items-center gap-2" href="https://github.com/dimakuznetsow" target="_blank">
                            <ImGithub size={44} />
                        </a>
                    </li>
                    <li className="bg-sky-100 p-4 rounded-full shadow-sm">
                        <a className="flex items-center gap-2" href="https://www.linkedin.com/in/dimakuznetsow/" target="_blank">
                            <ImLinkedin size={44} />
                        </a>
                    </li>
                    <li className="bg-sky-100 p-4 rounded-full shadow-sm">
                        <a className="flex items-center gap-2" href="mailto:dimakuznetsow@gmail.com" >
                            <FiMail size={44} />
                        </a>
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default Contacts