import React from 'react';
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Project from './components/Project';
import { IoIosArrowUp } from 'react-icons/io'
import { animateScroll as scroll } from "react-scroll";

const App = () => {
  const [scrollToTop, setScrollToTop] = React.useState(false)

  React.useEffect(() => {
    window.addEventListener('scroll', () => {
      window.pageYOffset > 500 ? setScrollToTop(true) : setScrollToTop(false)
    })
  })
  return (
      <main className="overflow-y-scroll scrollbar-hide">
          <Header/>
          <Hero/>
          <About/>
          <Project/>
          <Footer/>
          {scrollToTop && (
            <button className="fixed bottom-3 right-3 p-2 rounded-lg dark:text-gray-100 bg-zinc-300 border border-zinc-300 hover:border-zinc-400 dark:bg-zinc-800 dark:border-zinc-800 dark:hover:border-zinc-700" onClick={() => scroll.scrollToTop()}> 
              <IoIosArrowUp/>
            </button>
          )}
      </main>
  )
};

export default App;
