import { useState } from 'react';
import './App.css';
import FontCards  from "./components/FontCards";
import FontList  from "./components/FontList";

function App() {
  const [title, setTitle] = useState("");
  const [fonts, setFonts] = useState([]);

  const createFontCard = (font) => {
    setFonts([...fonts, font]);
  }

  return (
    <div className="App">
       <input style={{ textAlign: 'center' }} placeholder='title' name="title" type="text" value={title} onChange={(e) => {setTitle(e.target.value)}} /> 
       <br/>
       <FontList callback={createFontCard}/>
       <FontCards title={title}/>
    </div>
  );
}

export default App;
