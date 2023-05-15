import './home.scss';
import { experience, projects } from './experience';
import { useRef, useState } from 'react';

function NavigationBar({ projRef, expRef, aboutRef, contactRef }) {
    const scrollCallback = (ref) => {
        setTimeout(() => ref.current.scrollIntoView({ behavior: 'smooth' }), 0);
    };

    return (
        <div className="navigation col-12 col-sm-3 col-xl-2 d-flex sticky-top flex-column g-0">
            <div className="text-center align-items-center p-2">
                <h1>Jesús Legaspy</h1>
            </div>
            <div className="d-flex flex-sm-column flex-row justify-content-center py-sm-4">
                <nav className="nav flex-row flex-sm-column text-end">
                    <a className="nav-link" href="#projects" onClick={() => scrollCallback(projRef)}>PROJECTS</a>
                    <a className="nav-link" href="#experience" onClick={() => scrollCallback(expRef)}>EXPERIENCE</a>
                    <a className="nav-link" href="#about" onClick={() => scrollCallback(aboutRef)}>ABOUT</a>
                    <a className="nav-link" href="#contact" onClick={() => scrollCallback(contactRef)}>CONTACT</a>
                </nav>
            </div>
            <div className='flex-fill'></div>
            <span className='navbar-text d-flex align-self-end p-3 text-secondary d-none d-sm-block'>
                <a href='https://github.com/JesusLegaspy/legaspy.dev'><i className="bi bi-github"></i>&nbsp;View this on Github</a>
            </span>
        </div >
    );
}

function Title({ title }) {
    return (
        <div className="row">
            <div className="col text-center">
                <h2 id="contact" className="pt-5 pb-4">{title}</h2>
            </div>
        </div>
    );
}

function Item({ info }) {

    const pills = info.topics.map((topic, idx) => <span className="badge rounded-pill" key={idx}>{topic}</span>);

    return (
        <div className="row align-items-center">
            <div className="col-md-7 text-center">
                <h3><a href={info.image.href} target="_blank" rel="noreferrer">{info.title}</a></h3>
                <div className="row">
                    <div className="col">
                        {pills}
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <p className="px-5">
                            {info.description} {info.github ? <a href={info.github} target="_blank" rel="noreferrer">Github <i class="bi bi-box-arrow-up-right"></i></a> : ''}
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-md-5">
                <a href={info.image.href} target="_blank" rel="noreferrer">
                    <img src={info.image.src} alt={info.image.alt} className="img-fluid" />
                </a>
            </div>
        </div>
    );
}

function Section({ title, data, refProps }) {
    const items = data.map((item, idx) => <Item info={item} key={idx} />);

    return (
        <section className="container pb-4" ref={refProps}>
            <Title title={title} />
            {items}
        </section >
    );
}

function About({ refProps }) {
    return (
        <section className="container pb-4" ref={refProps}>
            <Title title="About" />
            <div className="row align-items-center">
                <div className="col-md-7">
                    <p className="p-5">
                        A bachelors graduate of the University of Texas at Austin with a Software Engineering degree, I worked in the movie industry creating Python, Lua, and C++ scripts to assist industry-leading studios in their creative 3D lighting renders. On the side, I found an interest in connecting people with web technologies like React, NodeJS, and JavaScript, and made a jump to focus my career in full stack web development.
                    </p>
                </div>
                <div className="col-md-5 text-center">
                    <div className="row justify-content-center align-items-center text-md-start">
                        <ul>
                            <a href='https://www.linkedin.com/in/jesuslegaspy'><li><i className="bi bi-linkedin"></i> https://www.linkedin.com/in/jesuslegaspy</li></a>
                            <a href='https://github.com/JesusLegaspy'><li><i className="bi bi-github"></i> https://github.com/JesusLegaspy</li></a>
                            <a href='https://github.com/JesusLegaspyFoundry'><li><i className="bi bi-github"></i> https://github.com/JesusLegaspyFoundry</li></a>
                            <a href='https://time.is/CT'><li><i className="bi bi-clock"></i> Central Time Zone</li></a>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}


function Contact({ refProps }) {
    const [firstNumber, setFirstNumber] = useState(null);
    const [secondNumber, setSecondNumber] = useState(null);
    const [email, setEmail] = useState('');
    const [isLocked, setIsLocked] = useState(true);

    const userInput = useRef(null)

    const contact = {
        email: "lnb-smdr?xor`fdk-rtrdi",
    }

    const descrambler = (text) => {
        let temporaryText = [];
        for (let index = 0; index < text.length; index++) {
            temporaryText.push(String.fromCharCode(text.charCodeAt(index) + 1));
        }
        return (temporaryText.reverse().join(''));
    }

    // const scrambler = (text) => {
    //   let temporaryText = [];
    //   for (let index = 0; index < text.length; index++) {
    //     temporaryText.push(String.fromCharCode(text.charCodeAt(index) - 1));
    //   }
    //   return (temporaryText.reverse().join(''));
    // }

    const getRandomInteger = () => {
        return Math.floor(Math.random() * 10);
    }

    function populate() {
        setFirstNumber(getRandomInteger());
        setSecondNumber(getRandomInteger());
    }

    function evaluate() {
        const userResult = Number(userInput.current.value);
        const actualResult = firstNumber + secondNumber;
        if (userResult === actualResult) {
            setEmail(descrambler(contact.email));
            document.querySelector('#closeModal').click();
            setIsLocked(false);
        }
    }

    function renderEmail() {
        if (email) return <a href={"mailto:" + email} target="_blank" rel="noreferrer"> {email}</a>;
        return <span id="email" className="blur"> Iojcrqjewdydf32@gmail.com</span>;
    }

    return (
        <section className="container pb-4" ref={refProps}>
            <Title title="Contact" />
            <div className="row justify-content-center">
                <div className="col text-center">
                    <div data-bs-toggle={isLocked ? "modal" : ""}
                        data-bs-target="#requestModal"
                        id="request-contact"
                        onClick={() => populate()}>
                        <p>Start a conversation{isLocked ? '. Click to reveal.' : ''}</p>
                        <p><i className="bi bi-envelope"></i> {renderEmail()}</p>
                    </div>

                    <div className="modal fade" id="requestModal" tabIndex="-1" aria-labelledby="requestModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="requestModalLabel">Complete the Challenge</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <p>What is the result?</p>
                                    <p>
                                        <span>{firstNumber}</span> + <span>{secondNumber}</span> = ?
                                    </p>
                                    <input id="challengeResult" ref={userInput} />
                                </div>

                                <div className="modal-footer">
                                    <button type="button" className="btn btn-light" data-bs-dismiss="modal" id="closeModal">Close</button>
                                    <button type="button" className="btn btn-secondary" onClick={() => evaluate()}>Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </section >
    );
}

function Home() {
    const projRef = useRef();
    const expRef = useRef();
    const contactRef = useRef();
    const aboutRef = useRef();

    return (
        <>
            <div className="home">
                <div className="container-fluid overflow-hidden">
                    <div className="row vh-100 overflow-auto">
                        <NavigationBar projRef={projRef} expRef={expRef} contactRef={contactRef} aboutRef={aboutRef} />
                        <div className="col d-flex flex-column h-sm-100 g-0">
                            <main className="row overflow-auto">
                                <Section title="Projects" data={projects} refProps={projRef} />
                                <Section title="Experience" data={experience} refProps={expRef} />
                                <About refProps={contactRef} />
                                <Contact refProps={aboutRef} />
                            </main>
                        </div>
                        <footer className="footer bg-dark py-3 mt-auto d-block d-sm-none">
                            <div className="container text-center align-items-center">
                                <span className="text-secondary"><a href='https://github.com/JesusLegaspy/legaspy.dev'><i className="bi bi-github"></i>&nbsp;View this on Github</a></span>
                            </div>
                        </footer>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;