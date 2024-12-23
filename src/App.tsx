//import Message from './Message';
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Delhi", "Mumbai", "Kolkata", "Chennai", "Hyderabad"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  // return <div><Message/></div>
  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
