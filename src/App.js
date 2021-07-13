import './App.css';
import img from "./image.png";
import Button from "./Button";

const App = () =>  {
  return (
    <div className="App">
    <h1>Hello World!</h1>
    <img className="image" src={img} alt="image" />
        <p>
         I am learning React.
        </p>
        <Button text="Like the course 👍"/>
        <Button text="Share it 🔗"/>
        <Button text="Subscribe the channel 🔔"/>
    </div>
  );
}

export default App;
