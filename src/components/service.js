import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import Service from './section-components/service-v5';
import Cta from './section-components/cta-v10';
import Footer from './global-components/footer';

const ServiceV1 = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="השירותים שלנו"  />
        <Service />
        <Cta />
        <Footer />
    </div>
}

export default ServiceV1

