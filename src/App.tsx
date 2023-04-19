import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
let items = ["thailand", "singapore", "bali", "vietnam", "laos"];
const handleSelectedItem = (item: string) => {
  console.log(item);
};
function App() {
  return (
    <div>
      {/* <ListGroup items={items} heading={"Cities"} onSelectedItem={handleSelectedItem} /> */}
      <Alert >
        hello<span>world</span>
      </Alert>
    </div>
  );
}

export default App;
