import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
// import Lightbox from 'react-images'
import fav from '../assets/images/fav.png'

class HomeIndex extends React.Component {

    constructor() {
        super();

        this.state = {
            lightboxIsOpen: false,
            currentImage: 0,
        };

        this.closeLightbox = this.closeLightbox.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
        this.handleClickImage = this.handleClickImage.bind(this);
    }

    openLightbox (index, event) {
        event.preventDefault();
        this.setState({
            currentImage: index,
            lightboxIsOpen: true,
        });
    }
    closeLightbox () {
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false,
        });
    }
    gotoPrevious () {
        this.setState({
            currentImage: this.state.currentImage - 1,
        });
    }
    gotoNext () {
        this.setState({
            currentImage: this.state.currentImage + 1,
        });
    }
    handleClickImage () {
        if (this.state.currentImage === this.props.images.length - 1) return;

        this.gotoNext();
    }

    render() {
        const siteTitle = "Dejan Rajkovic"
        const siteDescription = "Personal portfolio page built with gatsbyJs starter"

        return (
            <Layout>
                <Helmet>
                        <title>{siteTitle}</title>
                        <meta name="description" content={siteDescription} />
                        <link rel="shortcut icon" type="image/png" href={fav} />           
                </Helmet>

                <div id="main">

                    <section id="one">
                        <header className="major">
                            <h2>I am a developer, traveler and dog lover<br />
                            </h2>
                        </header>
                        <p>Do what makes you happy! Always push yourself to the next level, if you can believe it you can achieve it.</p>
                        <p>Software development is something I am passionate about, it gives me ability to create in a different way. I love to learn, and in software development you can never stop learning! This is just the beginning.</p>
                        <p>If you love dogs, consider donating <strong><a href='http://www.aliverescue.org/'>http://www.aliverescue.org/</a></strong> Let's save the world one tail at the time</p>
                        <ul className="actions">
                            {/* <li><a href="#" className="button">Learn More</a></li> */}
                        </ul>
                    </section>
                    <section id="three">
                        <h2>Get In Touch</h2>
                        <p>If you have any questions, please feel free to drop me a line.
                        <br />I'll get back to you as soon as I can. That's a promise!</p>
                        <div className="row">
                            <div className="8u 12u$(small)">
                                <form method="post" action="https://formspree.io/drajkovic992@gmail.com" >
                                    <div className="row uniform 50%">
                                        <div className="6u 12u$(xsmall)"><input type="text" name="name" id="name" placeholder="Name" /></div>
                                        <div className="6u 12u$(xsmall)"><input type="email" name="email" id="email" placeholder="Email" /></div>
                                        <div className="12u"><textarea name="message" id="message" placeholder="Message" rows="4"></textarea></div>
                                        <input type="hidden" name="_next" value="https://www.dejan-rajkovic.com/" />
                                    </div>
                                    <ul className="actions">
                                    <li><input type="submit" value="Send Message" /></li>
                                    </ul>
                                </form>
                                
                            </div>
                            <div className="4u 12u$(small)">
                                <ul className="labeled-icons">
                                    <li>
                                        <h3 className="icon fa-home"><span className="label">Address</span></h3>
                                        2025 W Roscoe St. 3r<br />
                                        Chicago, IL 60618<br />
                                        United States
                                    </li>
                                    <li>
                                        <h3 className="icon fa-mobile"><span className="label">Phone</span></h3>
                                        253-324-1082
                                    </li>
                                    <li>
                                        <h3 className="icon fa-envelope-o"><span className="label">Email</span></h3>
                                        <a href="mailto: drajkovic992@gmail.com">drajkovic992@gmail.com</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                </div>

            </Layout>
        )
    }
}

export default HomeIndex