import React from 'react';
import Navbar from './components/landing/Navbar';
import Hero from './components/landing/Hero';
import PreferenceSelector from './components/landing/PreferenceSelector';
import Differentiators from './components/landing/Differentiators';
import HowItWorks from './components/landing/HowItWorks';
import Metrics from './components/landing/Metrics';
import FAQ from './components/landing/FAQ';
import CTAFinal from './components/landing/CTAFinal';
import Footer from './components/landing/Footer';
import Features from './components/landing/Features';

const FrutiaLanding = () => {
    return (
        <div className="landing-page">
            <Navbar />
            <Hero />
            <PreferenceSelector />
            <Features />

            <Differentiators />
            <HowItWorks />
            <CTAFinal />
            <FAQ />
            <Footer />
        </div>
    );
};

export default FrutiaLanding;