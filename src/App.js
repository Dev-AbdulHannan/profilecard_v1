import "./App.css";

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
  return (
    <div className="skill-list">
      <Skill name="HTML" emoji="😊" color="lightblue" />
      <Skill name="CSS" emoji="😃" color="grey" />
      <Skill name="javascript" emoji="🤑" color="pink" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className=".skill" style={{ backgroundColor: props.color }}>
      <span>{props.name}</span>
      <span>{props.emoji}</span>
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
