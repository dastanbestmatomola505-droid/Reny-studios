/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

const Services = lazy(() => import('./components/Services'));
const Simulation = lazy(() => import('./components/Simulation'));
const Courses = lazy(() => import('./components/Courses'));
const Gallery = lazy(() => import('./components/Gallery'));
const WhyChooseUs = lazy(() => import('./components/WhyChooseUs'));
const Footer = lazy(() => import('./components/Footer'));

const SectionLoader = () => (
  <div className="py-24 bg-salon-dark flex items-center justify-center">
    <div className="w-10 h-10 border-4 border-salon-pink border-t-transparent rounded-full animate-spin"></div>
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<SectionLoader />}>
          <Services />
          <Simulation />
          <Courses />
          <Gallery />
          <WhyChooseUs />
          <Footer />
        </Suspense>
      </main>
    </div>
  );
}

