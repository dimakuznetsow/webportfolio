import { Link, animateScroll as scroll } from "react-scroll";

function Navbar() {
    return (
        <div className="navbar bg-base-100 fixed top-0 shadow z-10">
            <div className="flex-1">
                <a onClick={scroll.scrollToTop} className="btn no-animation bg-transparent hover:bg-transparent border-none normal-case text-xl text-base-content">Dmitry Kuznetsov</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1 text-base-content">
                    <li>
                        <Link to="myProjects" spy={true} smooth={true} offset={-90}>
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link to="myContacts" spy={true} smooth={true} offset={120}>
                            Contacts
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar