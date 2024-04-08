import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const skillData = [
  {
    skill: "JS",
    level: "advanced",
    color: "#d1aa76",
  },
  {
    skill: "c++",
    level: "advanced",
    color: "green",
  },
  {
    skill: "React",
    level: "intermediate",
    color: "blue",
  },

  {
    skill: "Anguar",
    level: "beginner",
    color: "red",
  },
  {
    skill: "Python",
    level: "beginner",
    color: "#6846c4",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <img
      className="avatar"
      src="Photo\Profile netanel.jpeg"
      alt="Netanel Maman"
    />
  );
}

function Intro() {
  return (
    <div>
      <h3>
        <strong>Netanel Maman</strong>
      </h3>
      <p>
        Full-stack web developer at Ofek 324 Unit. I like to cook (and eat), or
        to just enjoy the Israeli sun at the beach.
      </p>
    </div>
  );
}

function SkillList() {
  const skills = skillData;

  return (
    <ul className="skill-list">
      {skills.map((skill) => (
        <Skill skillObj={skill} />
      ))}
    </ul>
  );
}

function Skill({ skillObj }) {
  return (
    <li className="skill" style={{ backgroundColor: skillObj.color }}>
      <span>{skillObj.skill}</span>
      {/* <span>{skillObj.level === "advanced" ? "👍" : "👌"}</span> */}
      <span>
        {skillObj.level === "beginner" && "👶"}
        {skillObj.level === "intermediate" && "👍"}
        {skillObj.level === "advanced" && "💪"}
      </span>
    </li>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
