import ListGroup from "./components/listGroup";
import Alert from "./components/alert";
import Button from "./components/button"; 
import { useState } from "react";

//Helper function for ListGroup
const handleSelectItem = (item:string) => {
  console.log(item)
}

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  const [alertVisible, setAlertVisible] = useState(false)
  return (
    <div>
      {alertVisible && <Alert onClose={() => setAlertVisible(false)}>Wow you clicked the button!</Alert>}
      <Button name="Fancy Name" color='info' onBtnClick={() => setAlertVisible(true)} />
      <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/>
    </div>
  );
}

export default App;
