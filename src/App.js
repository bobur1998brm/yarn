import './App.css';
import bgImg from './assets/bg.jpg'

function App() {
  return (
    <div style={{background:`url('${bgImg}') no-repeat center/cover`}} className="App">
      <h1>hollo world</h1>
    </div>
  );
}

export default App;
