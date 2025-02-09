import "./Hero.css";
import resume from "../resume/Resume.pdf"

function Hero() {
  return (
    <section id="hero">
      <div className="container d-flex justify-content-center align-items-center">
        <div className="profile-container">
          <div className="profile-photo">
            <img
              id="profile1"
              src="https://images.unsplash.com/photo-1587837073080-448bc6a2329b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2Zlc3Npb25hbCUyMHBob3RvJTIwbWVufGVufDB8fDB8fHww"
              alt="Loki's profile picture"
            />
          </div>

          <div className="intro">
            <p className="text-p1">Hello, I'm</p>
            <h1 className="title">Lokesh Mambaku</h1>
            <p className="text-p2">Graduate</p>
            <div className="btn-container">
              <a href={resume} download="Lokesh-Mambaku-resume">
                <button className="btn btn-color-2">See Resume</button>
              </a>
              <a href="#contact">
                <button className="btn btn-color-1">Contact Me</button>
              </a>
            </div>

            <div id="socials-container">
              <a href="https://www.linkedin.com/">
                <i className="bi bi-linkedin"></i>
              </a>

              <a href="https://github.com/">
                <i className="bi bi-github"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
