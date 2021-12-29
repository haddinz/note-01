import React, { useState, useEffect } from 'react'
import Navbars from "./Components/Navbar/Navbar";
import Header from './Components/Header/Header';
import Testimonial from './Components/Testimonial/Testimonial';
import Recent from "./Components/Recent/Recent"
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import GetinTouch from './Components/GetinTouch/GetinTouch';
import Sidenav from './Components/NavSide/Sidenav';


const Home = () => {

  const useMousePosition = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    useEffect(() => {

      const updateMousePosition = event => {
        setMousePosition({ x: event.clientX, y: event.clientY })
      }
      window.addEventListener(`mousemove`, updateMousePosition)

      return () => window.removeEventListener(`mousemove`, updateMousePosition)
    }, [])

    return mousePosition
  }

  const { x, y } = useMousePosition()

  const [open, setOpen] = useState(false)

  const handleclick = () => {
    setOpen(!open)
  }


  return (
    <>
      <Sidenav open={open} handleclick={handleclick}/>
      <Navbars handleclick={handleclick}/>
      <Header />
      <Testimonial/>
      <Recent x={x} y={y} />
      <About /> 
      <Contact />
      <GetinTouch />
    </>
  )
}

export default Home
