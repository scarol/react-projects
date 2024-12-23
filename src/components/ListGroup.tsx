//import { Fragment } from "react/jsx-runtime";
import { MouseEvent, useState } from "react";

// With React we can reuse the same Component to display multiple data
// This is done using Props
// TypeScript interface to define an interface for the Props to pass to ListGroup Component
// to do something on select of an item - Pass function as Props - onSelectItem
interface ListGroupProps {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

// using destruct array as parameter to this function to pass Props
function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  // let items = ["Delhi", "Mumbai", "Kolkata", "Chennai", "Hyderabad"];
  // items = [];

  // Event Handler - referenced in the onClick event of li
  // declare a function to handle click events
  // specify the exact type of event here as TypeScript needs to know the context in which this will be used
  // import the MouseEvent type and type annotate the event
  // with type specified we easily achieve type safety and get auto completion
  // const handleClick = (event: MouseEvent) => console.log(event);

  // selected item index being set inside onClick of li
  // this is local to this function and React is not aware of it
  // to let React know that this component has data and state that can change over time do useState
  // useState is a Hook that lets us use the built in features in React
  // let selIndex = -1;

  // Hook
  //const [arr] = useState(-1);
  // arr[0]; // variable like selIndex
  // arr[1]; // updater function using which the variable selIndex can be updated and then React will be notified
  // that the state of component has changed which causes the component to be rendered again and the DOM to be
  // modified under the hood. With React we nevr have to deal with the DOM directly, we think in terms of components
  // and when the state for a comp changes React takes care of updating the underlying DOM

  // defining Hook with a destruct array
  const [selIndex, setSelIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No items Found!!</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selIndex === index ? "list-group-item active" : "list-group-item"
            }
            key={item}
            //onClick={handleClick}
            //onClick={() => {selIndex = index;}
            onClick={() => {
              setSelIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
