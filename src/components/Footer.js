import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <ul className="icons">
                        <li><a href="https://www.linkedin.com/in/dejanrajkovic/" className="icon fa-linkedin"><span className="label">LinkedIn</span></a></li>
                        <li><a href="https://github.com/Dejan992" className="icon fa-github"><span className="label">Github</span></a></li>
                        <li><a href="mailto:drajkovic992@gmail.com" className="icon fa-envelope-o"><span className="label">Email</span></a></li>
                    </ul>
                    <ul className="copyright">
                        <li>&copy; Gatsby</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer
