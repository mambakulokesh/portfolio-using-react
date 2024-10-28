import "./Skills.css";

import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

function Skills() {
  return (
    <section id="skills">
      <div className="container-fluid">
        <p className="fs-6 text-center">Explore More</p>
        <h1 className="text-center">My Skills</h1>

        <div className="container" id="content">
          <div className="skills">
            {skills.map((skill, id) => {
              return (
                <div key={id} className="skill" style={{"--skill-order" : id}}>
                  <div className="skillImageContainer">
                    <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                  </div>
                  <p>{skill.title}</p>
                </div>
              );
            })}
          </div>

          <ul className="history">
            {history.map((historyItem, id) => {
              return (
                <li
                  key={id}
                  className="historyItem"
                  style={{ "--history-order": id }}
                >
                  <img
                    src={getImageUrl(historyItem.imageSrc)}
                    alt={`${historyItem.organisation} Logo`}
                  />
                  <div className="historyItemDetails">
                    <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                    <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                    <ul>
                      {historyItem.experiences.map((experience, id) => {
                        return <li key={id}>{experience}</li>;
                      })}
                    </ul>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
