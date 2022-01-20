import React, { Fragment } from 'react';
import FutureGoals from './FutureGoals';
import Navbar from '../Navbar';
import Header from './Header';
import About from './About';
import Skills from './Skills';
import Footer from '../Footer';


function HomePage() {
    return (
        <Fragment>
            <Navbar />
            <Header />
            <About />
            <Skills />
            <FutureGoals />
            <Footer />
        </Fragment>
    )
}

export default HomePage
