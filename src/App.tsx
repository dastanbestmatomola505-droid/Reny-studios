/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Simulation from './components/Simulation';
import Courses from './components/Courses';
import Gallery from './components/Gallery';
import WhyChooseUs from './components/WhyChooseUs';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Simulation />
        <Courses />
        <Gallery />
        <WhyChooseUs />
      </main>
      <Footer />
    </div>
  );
}

