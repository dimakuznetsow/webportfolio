import DK from "../images/DK.jpg"
import git from "../images/git.png"
import html5 from "../images/html5.png"
import css3 from "../images/css3.png"
import tailwind from "../images/tailwind.png"
import js from "../images/js.png"
import typescript from "../images/typescript.png"
import reactjs from "../images/reactjs.png"
import nextjs from "../images/nextjs.png"
import nodejs from "../images/nodejs.png"
import mongodb from "../images/mongodb.png"
import postgresql from "../images/postgresql.png"
import firebase from "../images/firebase.png"


function Card() {
    return (
        <main className="">
            <section className="flex justify-center gap-8 2xl:gap-16 mt-40">
                <img loading="lazy" className="mask mask-squircle h-44" src={DK} />
                <div className="flex flex-col gap-2 mt-6">
                    <h1 className="text-5xl text-accent font-bold">Fullstack Developer</h1>
                    <p className="w-104 text-base text-base-content">Hello, I'm Dmitry. Detail-oriented problem solver with UX/UI skills, passionate about learning new technologies.</p>
                </div>
            </section>
            <section className="">

                <div className="flex gap-0 2xl:gap-4 justify-center mt-8">
                    <img loading="lazy" className="h-20" src={git} />
                    <img loading="lazy" className="h-20" src={html5} />
                    <img loading="lazy" className="h-20" src={css3} />
                    <img loading="lazy" className="h-20" src={tailwind} />
                    <img loading="lazy" className="h-20" src={js} />
                    <img loading="lazy" className="h-20" src={typescript} />
                </div>
                <div className="flex gap-0 2xl:gap-4 justify-center">
                    <img loading="lazy" className="h-20" src={reactjs} />
                    <img loading="lazy" className="h-20" src={nextjs} />
                    <img loading="lazy" className="h-20" src={nodejs} />
                    <img loading="lazy" className="h-20" src={mongodb} />
                    <img loading="lazy" className="h-20" src={postgresql} />
                    <img loading="lazy" className="h-20" src={firebase} />
                </div>
            </section>
        </main >
    )
}

export default Card