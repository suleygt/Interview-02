import "./styles.css";

import { useState } from "react";

function App() {
  return (
    <div className="App">
      <RobotList />
    </div>
  )
}

const RobotList = () => {
  // KODUNUZ BURAYA GELECEK
  const [robots, setRobots] = useState([]);
  const [inputText, setInputText] = useState("");

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (robots.some((robot) => robot.name === inputText)) {
      alert("Bu isimde bir robot zaten var");
    } else {
      setRobots([...robots, { id: robots.length, name: inputText}]);
    }
    setInputText("");
  } ;

  const handleRemove = (id) => {
    setRobots(robots.filter((robot) => robot.id !== id));
  } ;

  return (
    <div className="robot-list">
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputText} onChange={handleChange} placeholder="Robot ismi giriniz..."/>
        <button type="submit">Ekle</button>
        <header>
        <h1>Robot Listesi</h1>
        </header>
      </form>
      <div className="robots">
        {robots.map((robot) => (
          <div key={robot.name} className="robot">
            <img
              src={`https://robohash.org/${robot.name}`}
              alt={robot.name}
              onClick={() => handleRemove(robot.name)}
            />
    </div>
  ))}
  </div>
</div>
);
};
export default App;
