import Navbar from '../components/Navbar';
import Home from '../components/Home';
import Skills from '../components/Skills';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer'

const Index = () => {
    return (
        <>
            <Navbar />
            <Home />
            <About />
            <Skills />
            <Contact />
            <Footer />
        </>
    );
};

export default Index;
