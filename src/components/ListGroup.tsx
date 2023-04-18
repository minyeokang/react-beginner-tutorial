function ListGroup() {
    let items = [
        'thailand',
        'singapore',
        'bali',
        'vietnam',
        'laos'
    ]
    items = []
  return (
    <>
    <h1>List</h1>
     <ul className="list-group">
      {items.length === 0 && <p>no item</p>}
      {items.map(item => <li key={item} className="list-group-item">{item}</li>)}
    </ul>
    </>
   
  );
}

export default ListGroup;

/** conditional rendering explanation : 
 * 
 * if(items.length === 0) return <p>no item</p> 
 * ==> items.length === 0 ? <p>no item</p> : null 
 * ==> items.length === 0 && <p>no item</p>
 * ex) true && 1 === 1 
 * ex) false && 1 === false 
 * if statement is 'true', it will return the next one 
 * 
 * you can also put things in function and use { } 
 * ex) <ul> {message()} <li></li> </ul>
 */