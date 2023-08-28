import "./App.css";
const skillsData = [
  {
    skill: "HTML+CSS",
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
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <Skilllist />
      </div>
    </div>
  );
}

function Skilllist() {
  //Parent Component
  return (
    <div className="skill-list">
      {skillsData.map((create) => (
        <Skill skillobj={create} />
      ))}
    </div>
  );
}

function Skill({ skillobj }) {
  //Child Component
  return (
    <div className=".skill" style={{ backgroundColor: skillobj.color }}>
      <span>{skillobj.skill}</span>
      <span>
        {skillobj.level === "advanced" && "💪"}
        {skillobj.level === "beginner" && "👶"}
        {skillobj.level === "intermediate" && "😃"}
      </span>
    </div>
  );
}

function Avatar() {
  return (
    <img
      className="avatar"
      src="https://cdn.pixabay.com/photo/2016/11/23/14/45/coding-1853305_640.jpg"
      alt="developer"
    ></img>
  );
}

function Intro() {
  return (
    <main>
      <h1>Abdul Hannan</h1>
      <p>
        I am a software Engineering Graduate. I have interest in web and Cloud
        Technologies. I want to get a job in big Tech Companies
      </p>
    </main>
  );
}

export default App;
