import React, { useState, Fragment } from "react";
import useDocumentTitle from "./useDocumentTitle";

function Counter(props) {
  /*   const array = useState(0);
  const count = array[0]; //Equvalent to this.state.count in a class component
  const setState = array[1]; // This.setState()
  */
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useDocumentTitle(`${name} has clicked ${count} times!`);

  // componentDidMount
  // componentDidUpdate
  // componentDidUnmount

  return (
    <Fragment>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <div>
        {name} has clicked {count} times!
      </div>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </Fragment>
  );
}

export default Counter;
