import React, { useState, Fragment } from "react";

function Counter(props) {
  /*   const array = useState(0);
  const count = array[0]; //Equvalent to this.state.count in a class component
  const setState = array[1]; // This.setState()
  */
  const [count, setState] = useState(0);

  if (count == 0) {
    const [name, setName] = useState("");
  }

  return (
    <Fragment>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <div>
        {name} has clicked {count} times
      </div>
      <button onClick={() => setState(count + 1)}>Increase</button>
    </Fragment>
  );
}

export default Counter;
