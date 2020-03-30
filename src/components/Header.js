import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/Dejan-Rajkovic.jpg'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="#" className="image avatar"><img src={avatar} alt="" /></a>
                    <h1><strong>Dejan Rajkovic</strong></h1>
                    <h1>
                    DevOps Engineer
                  </h1>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
