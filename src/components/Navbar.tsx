import { Link, animateScroll as scroll } from "react-scroll";

function Navbar() {
    return (

        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">

                <div className="w-full navbar bg-base-100 fixed top-0 shadow z-10">
                    <div className="flex-none sm:hidden">
                        <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div className="flex-1">
                        <a
                            onClick={() => {
                                if (window.innerWidth <= 640) {
                                    document.getElementById("my-drawer-3").checked = false;
                                }
                                scroll.scrollToTop()
                            }}
                            className="btn no-animation bg-transparent hover:bg-transparent border-none normal-case text-xl text-base-content">Dmitry Kuznetsov</a>
                    </div>
                    <div className="flex-none hidden sm:block">
                        <ul className="menu menu-horizontal">
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
            </div>
            <div className="drawer-side z-100">
                <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                <ul className="menu text-xl w-80 pt-16 h-full bg-base-200 z-100">
                    <li>
                        <Link
                            onClick={() => { document.getElementById('my-drawer-3')!.click() }}
                            to="myProjects-xs" spy={true} smooth={true} offset={-90}>
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link
                            onClick={() => { document.getElementById('my-drawer-3')!.click() }}
                            to="myContacts-xs" spy={true} smooth={true} offset={120}>
                            Contacts
                        </Link>
                    </li>

                </ul>

            </div>
        </div>
    )
}

export default Navbar