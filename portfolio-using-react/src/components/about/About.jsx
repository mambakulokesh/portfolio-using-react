import "./About.css";

import { Link } from "react-router-dom";

function About() {
  return (
    <section id="about">
      <div className="container-fluid">
        <p className="fs-6 text-center">Explore More</p>
        <h1 className="text-center">About Me</h1>

        <div className="container my-5 about-container">
          <div className="row d-flex justify-content-center details-row">
            
            <div className="col-6 p-5 text-center about-img fade-in-left">
              <img
                className="rounded-circle"
                src="https://media.istockphoto.com/id/1369199360/photo/portrait-of-a-handsome-young-businessman-working-in-office.webp?a=1&b=1&s=612x612&w=0&k=20&c=bcGyGG1qPMyxl3rw4TCVwbJLZTPabFg4twsVFDy-ixs="
                alt=""
                width={"100%"}
                height={"400px"}
              />
            </div>

            <div className="col-6 details d-flex flex-column justify-content-center fade-in-right">
              {/* <div className="details"> */}
              <h4 className="text-info">Lokesh - Graduate</h4>
              <p>
                "Hello! I'm a passionate and dedicated web developer with a
                strong foundation in JavaScript, React.js, and backend
                technologies like Python and MySQL. <br /> <br /> I enjoy
                creating clean, responsive, and user-friendly websites. As a
                fresher, I am eager to apply my skills in real-world projects
                and continue learning to grow as a developer."
              </p>
              {/* </div> */}
              <div
                className="tech-links d-flex gap-5 mt-4"
                id="socials-container"
              >
                <a href="https://www.linkedin.com/in/lokesh-mambaku-23640924b/">
                  <i className="bi bi-linkedin"></i>
                </a>
                <a href="mailto:mambakulokesh4756@gmail.com">
                  {" "}
                  <i className="bi bi-envelope-fill"></i>
                </a>
                <a href="https://github.com/mambakulokesh">
                  <i className="bi bi-github"></i>
                </a>
              </div>
              <Link to="/contact">
                <button className="btn btn-outline-warning border mt-4 hover-bounce">
                  Contact Me
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
