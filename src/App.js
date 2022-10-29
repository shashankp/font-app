import { useState } from 'react';
import './App.css';
import FontCard  from "./components/FontCard";

function App() {
  const [content, setContent] = useState("content");

  const onChangeHandler = event => {
    setContent(event.target.value);
 };

  return (
    <div className="App">
       <input name="content" type="text" value={content} onChange={onChangeHandler} />
       <FontCard font="Arial" content={content} />
       <FontCard font="Lobster" content={content} />
       <FontCard font="monospace" content={content} />
    </div>
  );
}

export default App;
