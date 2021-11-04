import './App.css';
import React from 'react';
import Child from './Child';
import ChildC from './ChildC';
// import ChildF from './ChildF';

function App() {

  // const refF = React.createRef();
  const refC = React.createRef();

  const refDiv = React.createRef();
  const refInput = React.createRef();

  const [st, setSt] = React.useState(50);

  let a = 50;

  function changeHandler(event) {
    a = event.target.value;
    console.log(a);

    setSt(a);
  }

  function changeHandlerRef() {
    let elem = refInput.current;
    console.log(elem.value);

    let div = refDiv.current;
    console.log(div.innerHTML);
    div.innerHTML = 1000;

    refC.current.next();
  }

  return (
    <>
      <div>
        <input type="range" onChange={changeHandler} />
      </div>
      <Child value={st} />
      <div ref={refDiv}>Text</div>
      <input type="range" ref={refInput}/>
      <button onClick={changeHandlerRef}>Push</button>
      {/* <ChildF ref={refF}/> */}
      <ChildC ref={refC}/>
    </>
  ); 
}

export default App;
