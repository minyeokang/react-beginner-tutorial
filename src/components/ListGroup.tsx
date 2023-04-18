import { useState } from "react";

function ListGroup() {
    let items = [
        'thailand',
        'singapore',
        'bali',
        'vietnam',
        'laos'
    ]
    const [selectedIndex, setSelectedIndex ] = useState(-1)
  return (
    <>
    <h1>List</h1>
     <ul className="list-group">
      {items.length === 0 && <p>no item</p>}
      {items.map((item, index)=> <li key={item} className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'} onClick={()=> setSelectedIndex(index)}>{item}</li>)}
    </ul>
    </>
   
  );
}

export default ListGroup;

/** useState hook
 * 
 * let selectedIndex = -1; // -1 means none of the item. 
 * onClick={()=>selectedIndex = index}
 * ==> this is not going to work. you need useState to update the variable's states! 
 * 
 * const arr = useState(-1) 
 * ==> arr(0) //variable 
 * ==> arr(1) //updater function 
 * 
 * const [selectedIndex, setSelectedIndex ] = useState(-1)
 * onClick={()=> setSelectedIndex(index)
 * 
 * this will update the state of selectedIndex variable
 * and this state stays in each ListGroup components 
 * if you have another ListGroup componets, that state has its own state
 */

/** Typescript type annotation
 * 
 * onClick={(event)=>{console.log(event)}} 
 * ==> const handleClick = (event: MouseEvent) => {console.log(event}
 * have to import MouseEvent
 * 
 * once you define things like this, it's easy to use
 * no need to console.log what event they have, event. will show list of events right in here 
 */

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