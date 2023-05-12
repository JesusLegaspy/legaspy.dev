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
                            {info.description}
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
                        Not being afraid with trying new things, and sometimes breaking them, I have a knack with problem solving and
                        troubleshooting. Whether being my hobbies with cars or electronics to digital art, when I like something I go all
                        in. I left my last job to further my interest with software development. I'm currently learning technologies in the
                        ever-changing, and exciting, field of software development.
                    </p>
                </div>
                <div className="col-md-5 text-center">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-2">
                            <svg height="200" width="40">
                                <polygon points="0,0,20,200,40,0" />
                            </svg>
                        </div>
                        <div className="col-2">
                            <p>JavaScript</p>
                            <p>React</p>
                            <p>HTML5</p>
                            <p>CSS</p>
                        </div>
                        <div className="col-2"></div>
                        <div className="col-2">
                            <svg height=" 200" width="40">
                                <polygon points="0,0,20,200,40,0" />
                            </svg>
                        </div>
                        <div className="col-2">
                            <p>Python</p>
                            <p>Lua</p>
                            <p>Bash Script</p>
                            <p>C++</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


function Contact({ refProps }) {
    const [firstNumber, setFirstNumber] = useState(null);
    const [secondNumber, setSecondNumber] = useState(null);
    const [linkedin, setLinkedin] = useState('');
    const [email, setEmail] = useState('');
    const [timezone, setTimezone] = useState('');
    const [github, setGithub] = useState('');

    const userInput = useRef(null)

    const contact = {
        linkedin: "xor`fdkrtrdi.mh.lnb-mhcdjmhk-vvv..9rossg",
        email: "lnb-sknakh`l?xor`fdk",
        timezone: "dlhS\u001fcq`cm`sR\u001fk`qsmdB",
        github: "xqcmtnExor`fdKrtrdI.lnb-atgshf..9rossg"
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
            setLinkedin(descrambler(contact.linkedin));
            setEmail(descrambler(contact.email));
            setTimezone(descrambler(contact.timezone));
            setGithub(descrambler(contact.github));
        }
    }

    function renderLinkedin() {
        if (linkedin) return <a href={linkedin} target="_blank" rel="noreferrer">{linkedin}</a>;
        return <span id="linkedin" className="blur">https://www.linkedin.com/in/gooseIaperpj</span>;
    }
    function renderEmail() {
        if (email) return <a href={"mailto:" + email} target="_blank" rel="noreferrer">{email}</a>;
        return <span id="email" className="blur">Iojcrqj@gmail.com</span>;
    }
    function renderTimezone() {
        if (timezone) return <span id="timezone">Central Time Zone</span>;
        return <span id="timezone" className="blur">Wooooooo</span>;
    }
    function renderGithub() {
        if (github) return <a href={github} target="_blank" rel="noreferrer">{github}</a>;
        return <span id="github" className="blur">https://github.com/FueraIwpesqgUzxcfig</span>;
    }

    return (
        <section className="container pb-4" ref={refProps}>
            <Title title="Contact" />
            <div className="row justify-content-center">
                <div className="col text-center">
                    <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-toggle="modal"
                        data-bs-target="#requestModal"
                        id="request-contact"
                        onClick={() => populate()}
                    >
                        I'm not a robot
                    </button>

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
            </div>
            <div className="row justify-content-center">
                <div className="col-8 col-md-7 col-lg-6 col-xl-5">
                    <ul className="list-unstyled ps-1 ps-md-2 ps-lg-4 ps-xl-5 ms-xl-5">
                        <li>
                            <i className="bi bi-linkedin"></i>
                            {renderLinkedin()}
                        </li>
                        <li><i className="bi bi-envelope"></i> {renderEmail()}</li>
                        <li><i className="bi bi-clock"></i>{renderTimezone()}</li>
                        <li>
                            <i className="bi bi-github"></i>
                            {renderGithub()}
                        </li>
                    </ul>
                </div>
            </div>
        </section>
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
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;