import React from 'react'; // Import React library
import {useState} from 'react';
// Define a functional component named 'Welcome'

// Another functional component named 'App'
export default function App() {
  const [items, setItems] = useState([1,2]);

    const add = () => {
      setItems([...items, items.length+1]);
    };

    const remove = () => {
      if(items.length>0){
        setItems(items, slice(0,-1));
      }
    };

  return (
    <div>
      <ul>
        {items.map((num)=>(
          <li key={num}>{num}</li>
        ))};
      </ul>

      <button onClick={add}>More</button>
      <button onClick={remove}>Less</button>
    </div>
  );
}
 // Export the App component for use in other files