import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  const items = [
    `apple`,
    `pizza`,
    `pineapple`,
    `coconut`,
    `banana`,
    `Spongebob`,
    `Patrick`,
  ];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <>
      <div>
        {alertVisible && (
          <Alert onClose={() => setAlertVisibility(false)}>Hello World</Alert>
        )}
        <Button onClick={() => setAlertVisibility(true)}>Click Me!</Button>
      </div>
      <div>
        <ListGroup
          items={items}
          heading="Foods"
          onSelectItem={() => handleSelectItem}
        />
      </div>
    </>
  );
}

export default App;
