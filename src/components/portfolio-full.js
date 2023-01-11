import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import Portfolio from './section-components/portfolio-full';
import Cta from './section-components/cta-v11';
import Footer from './global-components/footer';

const PortfolioFull = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="העבודות שלנו"  />
        <Portfolio />
        <Cta />
        <Footer />
    </div>
}

export default PortfolioFull

