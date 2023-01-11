import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import About from './section-components/about';
import Cta from './section-components/cta-v9';
import AboutV6 from './section-components/about-v6';
import Footer from './global-components/footer';

const AboutPage = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="אודות" />
        <About />
        <Cta />
        <Footer />
    </div>
}

export default AboutPage

