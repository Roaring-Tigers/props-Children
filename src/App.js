import Hello from "./Components/Hello";
import Bhargav from "./Components/Bhargav";

function App() {
  return (
    <div>
      <Hello> 
         <h1>I am Abhishek</h1>
         <p>I am a softwre Dev</p>
      </Hello>


      <Hello> 
          <div>
              <h3>I am Harshita</h3>
              <p>I am a softwre Dev - close enough</p>
          </div>
      </Hello>


      <Hello> 
          <Bhargav />
      </Hello>
    </div>
  );
}

export default App;
