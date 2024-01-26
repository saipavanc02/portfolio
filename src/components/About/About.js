import React from 'react';
import './About.css';

const About = ({ onAddProject }) => {
  
  
  return (
    <div className='container'>
      <div className='top' id='about'>
        <div className='heading'>
            <h4>Portfolio</h4><br/>
            <h2>UI/UX Developer</h2>
            <h1 className='name'>Hello, my name <br/>is Sai Pavan</h1>
            <p>Welcome to my portfolio website! I'm passionate about web development and creating beautiful, user-friendly experiences. Here, you'll find more information about me and my skills</p>
            <a href='#projects'><button className='projects-button'>Projects</button></a>
            <button className='linkedin-button'>LinkedIn</button>
        </div>
        <div className='img-container'>
            <ul className='list-container'>
            <li><a href='#about' className='nav-margin'>About</a></li>
            <li><a href='#projects' className='nav-margin'>Projects</a></li>
            <li><a href='#contact' className='nav-margin contact'>Contact</a></li>
            </ul>
        </div>
        
      </div>  
      
      
    </div>
  );
};

export default About;
