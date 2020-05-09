import React from 'react'
import {Link} from 'gatsby'

const AboutPage = () => {
    return (
        <div>
            <h1>About Me</h1>
            <p>My Bio and what I love doing will show up here soon</p>
            <p><a href='https://linkedin.com/in/kachisa'>My LinkedIn Profile</a></p>
            <p>Need an Engineer? <Link to="/contact">Contact Me</Link></p>
        </div>
    )
}

export default AboutPage