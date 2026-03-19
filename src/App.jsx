import React, { useState } from 'react'
import "./App.css"

import closeButton from "./assets/close.png"

import { FaCss } from "react-icons/fa6";
import { FaJsSquare } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaGitlab } from "react-icons/fa";
import { DiResponsive } from "react-icons/di";
import { TfiAlignRight } from "react-icons/tfi";
import { IoLogoHtml5 } from "react-icons/io";

// let side = document.getElementById("side_menu");


const App = () => {
const [show, setShow]= useState(false)

  return (
    <>
    {
      show ? (
        <div>
          <div class="menu_1">
          <div class="close_1" id="close_button">
            <img src={closeButton} alt="" onClick={()=> setShow(false)} />
          </div>
          <ol>
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skill">Skills</a></li>
            <li><a href="#Featured Project">Project</a></li>
            <li><a href="#get">Contact</a></li>
          </ol>
        </div>
        </div>
      ) : 
     (null)
    }
      <header>
        <h1>Portifilo.</h1>
        <div class="humberger" id="hum" >
          <TfiAlignRight className='open' onClick={()=> setShow(true)} />
          
        </div>
        <div class="menu" id="side_menu">
          <div class="close" id="close_button" >
            <img src={closeButton}   />
          </div>
          <ol>
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skill">Skills</a></li>
            <li><a href="#Featured Project">Project</a></li>
            <li><a href="#get">Contact</a></li>
          </ol>
        </div>
      </header>
      <section className='main'>
        <h1>HI, I'M ELYAS</h1>
        <p>A Creative Web Developer</p>
        <div className='buttons'>
          <button className='bu'><a href="#Featured Project">View Work</a></button>
          <button type='submit' className='buu'><a href="#get">Contact Me</a></button>
        </div>
      </section>
      <section id='about' className='about'>
      <h1>About Me</h1>
      <hr />
      <p>I am passionate web Developer with a knack for creating modern, responsive, adn user- <br />friendly websites. I love turning ideas
      into really through code and design. I'm constalntly <br />learnning new technologies to improve my Skills <br />
      When I'm not coding, You can find me exploring new tech trends, reading or gaming.
      </p>
      </section>
      <section className='skill' id='skill'>
        <h1>My Skills</h1>
        <hr />
        <div className='im-g'>
          <div className='A'>
            <IoLogoHtml5  className='image'/>
            <h4>Html</h4>
          </div>
          <div className='A'>
            <FaCss className='image' />
            <h4>Css</h4>
          </div>
          <div className='A'>
            <FaJsSquare  className='image'/>
            <h4>JavaScript</h4>
          </div>
          <div className='A'>
            <FaReact className='image'/>
            <h4>React</h4>
          </div>
          <div className='A'>
            <FaGitlab className='image'/>
            <h4>Git</h4>
          </div>
          <div className='A'>
            <DiResponsive className='image'/>
            <h4>Responsive</h4>
          </div>
        </div>
      </section>
      <section className='project' id='Featured Project'>
        <h1>Featured Project</h1>
        <hr />
        <div className='main_project'>
          <div className='one'>
            <div className='one_1'>
              <h3>Project One</h3>
              <p>A brief description of the projects goes<br />here. Explain the tech stack used and the<br />problem it solves.</p>
              <div className='last_sec'>
                <h3>Code</h3>
                <h3>Live Demo</h3>
              </div>
            </div>
          </div>
          <div className='one'>
            <div className='one_1'>
              <h3>Project Two</h3>
              <p>A brief description of the projects goes<br />here. Explain the tech stack used and the<br />problem it solves.</p>
              <div className='last_sec'>
                <h3>Code</h3>
                <h3>Live Demo</h3>
              </div>
            </div>
          </div>
          <div className='one'>
            <div className='one_1'>
              <h3>Project Three</h3>
              <p>A brief description of the projects goes<br />here. Explain the tech stack used and the<br />problem it solves.</p>
              <div className='last_sec'>
                <h3>Code</h3>
                <h3>Live Demo</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='touch' id='get'>
        <div className='in_touch'>
          <input type="text" placeholder="Enter Your Name" />
          <input type="email" placeholder="Enter Your Email" />
          <input type="text" placeholder="Enter Your Message" />
          <button type='submit'>Send Message</button>
        </div>
      </section>
      <footer>
        <p>© Elyas. All right reserved.</p>
      </footer>
    </>
  )
}

export default App