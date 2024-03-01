import React from 'react'

const Header = () => {
  return (
    <div>
      <NavContent />
    </div>
  )
}
const NavContent = () => {
  return (
    <>
      <h2>Alok </h2>
      <div>
        <a href="#home">Home</a>
        <a href="#Work">Work</a>
        <a href="#timeLine">Experience</a>
        <a href="#services">Services</a>
        <a href="#testimonial">Testimonial</a>
        <a href="#contact">Contact</a>
      </div>
      <a href="mailto:alok953280@gmail.com">
        <button>Email</button>
      </a>
    </>
  )
}

export default Header
