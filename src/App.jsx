import ClockHeading from './Components/ClockHeading'
import ClockSlogan from './Components/ClockSlogan'
import CurrentTime from './Components/CurrentTime'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  

  return (
    <div>
      <center>
        <ClockHeading />
        <ClockSlogan />
        <CurrentTime />
      </center>
    </div>
  );
}

export default App
