import "./index.css";
const skills = [
  {
    skill: "HTML + CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#61DBFB",
  },
  {
    skill: "Node.js",
    level: "intermediate",
    color: "#83CD29",
  },
  {
    skill: "SQL",
    level: "beginner",
    color: "#F57C00",
  },
];
const people = [
  {
    name: "Name1",
    intro: "Introduction11111111111111",
    avatar: "1.jpg",
    skills: skills,
  },
  {
    name: "Name2",
    intro: "Introduction22222222222222",
    avatar: "2.jpg",
    skills: skills,
  },
  {
    name: "Name3",
    intro: "Introduction33333333333333",
    avatar: "3.jpg",
    skills: skills,
  },
];

function App() {
  return (
    <>
      {people.map((p) => (
        <div className="card">
          <Avatar src={p.avatar} name={p.name} className="avatar" />
          <Intro className="data" intro={p.intro} />
          <SkillList className="skill-list" skillClassName={p.skills} />
        </div>
      ))}
    </>
  );
}

export default App;
function Avatar(props) {
  return <img className="avatar" src={props.src} alt={props.name} />;
}
function Intro(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.intro}</p>
    </div>
  );
}
function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skill={skill.skill} color={skill.color} level={skill.level} />
      ))}
    </div>
  );
}
function Skill({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "beginner" && "👶"}
        {level === "intermediate" && "👍"}
        {level === "advanced" && "💪"}
      </span>
    </div>
  );
}
