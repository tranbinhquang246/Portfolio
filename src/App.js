import React from 'react'
import Header from './component/Header';
import Education from './component/Education'
import Skills from './component/Skills';
import Contact from './component/Contact';
import Projects from './component/Projects';
import Footer from './component/Footer';


function App() {
  return (
    <div className="overflow-hidden">
        <Header></Header>
        <Education></Education>
        <Skills></Skills>
        <Projects></Projects>
        <Contact></Contact>
        <Footer></Footer>
    </div>
  );
}

export default App;
