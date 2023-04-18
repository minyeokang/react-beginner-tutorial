import ListGroup from'./components/ListGroup'
let items = [
  'thailand',
  'singapore',
  'bali',
  'vietnam',
  'laos'
]
function App(){
  return <div> <ListGroup items={items} heading={"Cities"}/> </div>
}

export default App;