import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import Portfolio from './section-components/portfolio-masonary';
import Footer from './global-components/footer';

const PortfolioMasonary = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="העבודות שלנו"  />
        <Portfolio />
        <Footer />
    </div>
}

export default PortfolioMasonary

