import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  return (
    <div>
      <Alert>
        Hello <h1>World</h1>
      </Alert>
      <Button onClick={() => console.log("Clicked!")}>Click Me!</Button>
    </div>
  );
}

export default App;
