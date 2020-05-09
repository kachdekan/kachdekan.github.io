import React from 'react'
import { Link } from 'gatsby'

const IndexPage = () => {
    return (
        <div>
            <h1>The Rambo Engineer Blog</h1>
            <p>My name is Kachi and am I am Learning Gatsby as I develop my Blog</p>

            <p>Need an Engineer? <Link to="/contact">Contact Me</Link></p>
        </div>
    )
}

export default IndexPage