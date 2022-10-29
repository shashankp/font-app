import { useState } from 'react';
import './App.css';
import FontCards  from "./components/FontCards";

function App() {
  const [title, setTitle] = useState("");
  return (
    <div className="App">
       <input style={{ textAlign: 'center' }} placeholder='Title' name="title" type="text" value={title} onChange={(e) => {setTitle(e.target.value)}} /> 
       <br/>
       <FontCards title={title}/>
    </div>
  );
}

export default App;
