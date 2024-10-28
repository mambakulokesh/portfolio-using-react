import "./Projects.css";

import { getImageUrl } from "../../utils";
import projects from "../../data/projects.json";

function Projects() {
  // const [{ title, imageSrc, description, skills, demo, source }] = projects;
  return (
    <section id="projects">
      <div className="container">
        <p className="fs-6 text-center">Explore More</p>
        <h1 className="text-center">My Projects</h1>

        <div className="container mt-4">
          {projects.map((pro, id) => {
            return (
              <div
                key={id}
                className="row d-flex mb-5 p-2"
                id="project-card"
                style={{ "--card-order": id }}
              >
                <div className="col-md-6 p-4">
                  <h3 className="project-title">{pro.title}</h3>
                  <p className="project-description">{pro.description}</p>
                  <ul className="skillset">
                    {pro.skills.map((skillItem, id) => {
                      return (
                        <li className="skill-item" key={id}>
                          {skillItem}
                        </li>
                      );
                    })}
                  </ul>
                  <div className="sources">
                    <a className="source-link" href={pro.demo}>
                      Demo
                    </a>
                    <a className="source-link" href={pro.source}>
                      Source
                    </a>
                  </div>
                </div>

                <div className="col-md-6 p-4 d-flex justify-content-center">
                  <img
                    src={getImageUrl(pro.imageSrc)}
                    alt={`Image of ${pro.title}`}
                    className="project-img"
                    width={"100%"}
                    // height={"330px"}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;
