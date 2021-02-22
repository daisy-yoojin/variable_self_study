import { useState } from "react";
import "./App.css";
import Average from "./Average";
import Counter from "./Counter";
import Info from "./Info";

const App = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <div>
        <Counter />
      </div>
      <hr/>
      <hr/>
      <div>
        <button onClick={() => {
          setVisible(!visible)
        }}>
          {visible? '숨기기':'보이기'}
        </button>
        { visible && <Info />}        
      </div>
      <hr/>
      <hr/>
      <div>
        <Average />
      </div>
    </div>
  );
};
export default App;
