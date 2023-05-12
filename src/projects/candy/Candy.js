import './candy.scss';
import gumball from './imgs/gumball.webp';
import hand2 from './imgs/hand2.webp';
import lolliIcon from './imgs/lolli_icon.png';
import milk from './imgs/milk.webp';
import sprinkles from './imgs/sprinkles.webp';
import { useEffect, useState } from 'react';

function Navbar() {
    const [scrolled, setScrolled] = useState('');

    useEffect(() => {
        window.onscroll = () => {
            if (window.pageYOffset === 0) setScrolled('');
            else setScrolled('scrolled');
        };
        return () => (window.onscroll = null);
    });

    return (
        <nav id="mainNavbar" className={scrolled + " navbar navbar-dark navbar-expand-md py-0 fixed-top"}>
            <div className="container-fluid">
                <a href="/candy" className="navbar-brand">CANDY</a>
                <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navLinks"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navLinks">
                    <div className="navbar-nav">
                        <a className="nav-link" href="/candy">HOME</a>
                        <a className="nav-link" href="/candy">ABOUT</a>
                        <a className="nav-link" href="/candy">TICKETS</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default function Candy() {
    return (
        <div className="candy">
            {Navbar()}
            <section className="container-fluid px-0">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div id="headingGroup" className="text-center text-white d-none d-lg-block mt-5">
                            <h1>MUSEUM<span>/</span>OF<span>/</span>CANDY</h1>
                            <h1>MUSEUM<span>/</span>OF<span>/</span>CANDY</h1>
                            <h1>MUSEUM<span>/</span>OF<span>/</span>CANDY</h1>
                            <h1>MUSEUM<span>/</span>OF<span>/</span>CANDY</h1>
                            <h1>MUSEUM<span>/</span>OF<span>/</span>CANDY</h1>
                            <h1>MUSEUM<span>/</span>OF<span>/</span>CANDY</h1>
                            <h1>MUSEUM<span>/</span>OF<span>/</span>CANDY</h1>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <img src={hand2} alt="" className="img-fluid" />
                    </div>
                </div>
            </section>
            <section className="container-fluid px-0">
                <div className="row align-items-center content">
                    <div className="col-md-6 order-2 order-md-1">
                        <img src={milk} alt="" className="img-fluid" />
                    </div>
                    <div className="col-md-6 text-center order-1 order-md-2">
                        <div className="row justify-content-center mb-5 mb-md-0">
                            <div className="col-10 col-lg-8 blurb">
                                <h2>MUSEUM OF CANDY</h2>
                                <img src={lolliIcon} alt="" className="d-none d-lg-inline" />
                                <p className="lead">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, repellat. Culpa
                                    doloribus voluptatem magnam tenetur rerum quidem voluptas voluptatum minima, possimus a
                                    velit
                                    consectetur quibusdam ipsa ullam vel cumque qui.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center content">
                    <div className="col-md-6 text-center">
                        <div className="row justify-content-center">
                            <div className="col-10 col-lg-8 blurb mb-5 mb-md-0">
                                <h2>MUSEUM OF CANDY</h2>
                                <img src={lolliIcon} alt="" className="d-none d-lg-inline" />
                                <p className="lead">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, repellat. Culpa
                                    doloribus voluptatem magnam tenetur rerum quidem voluptas voluptatum minima, possimus a
                                    velit
                                    consectetur quibusdam ipsa ullam vel cumque qui.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img src={gumball} alt="" className="img-fluid" />
                    </div>
                </div>
                <div className="row align-items-center content">
                    <div className="col-md-6 order-2 order-md-1">
                        <img src={sprinkles} alt="" className="img-fluid" />
                    </div>
                    <div className="col-md-6 text-center order-1 order-md-2">
                        <div className="row justify-content-center">
                            <div className="col-10 col-lg-8 blurb mb-5 mb-md-0">
                                <h2>MUSEUM OF CANDY</h2>
                                <img src={lolliIcon} alt="" className="d-none d-lg-inline" />
                                <p className="lead">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, repellat. Culpa
                                    doloribus voluptatem magnam tenetur rerum quidem voluptas voluptatum minima, possimus a
                                    velit
                                    consectetur quibusdam ipsa ullam vel cumque qui.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
