import React from 'react';
import './App.css'
import Header from './components/Header'
import Main from './components/Main/Main';

import {FaHandPointUp} from "react-icons/fa";

function App() {

  const [showScrollBtn, setShowScrollBtn] = React.useState(false)

  window.onscroll = function() {scrollFunc()}

  const scrollFunc = () => {
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      setShowScrollBtn(true)
    } else {
      setShowScrollBtn(false)
    }
  }

  const scrollTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <div className='relative'>
    <Header />
    <Main />
    <div onClick={scrollTop} className={`fixed bg-blue-800 text-white border border-transparent p-2 hover:text-blue-800 hover:bg-white hover:border-blue-800 rounded-md bottom-4 ${showScrollBtn ? "block" : "hidden"} right-4 text-2xl md:text-3xl duration-500 cursor-pointer`}>
    <FaHandPointUp  />
    </div>
    </div>
  )
}

export default App
