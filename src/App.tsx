import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import Button from "./components/Button";
import { useState } from "react";
let items = ["thailand", "singapore", "bali", "vietnam", "laos"];
const handleSelectedItem = (item: string) => {
  console.log(item);
};

function App() {
  
  const [alertVisible, setAlertVisible] = useState(false)

  return (
    <div>
      {/* <ListGroup items={items} heading={"Cities"} onSelectedItem={handleSelectedItem} /> */}
      {alertVisible && <Alert onClose={()=>setAlertVisible(false)}> hello</Alert>}
      
      <Button color="primary" onClick={()=>setAlertVisible(true)}>my bottom</Button>
    </div>
  );
}

export default App;
