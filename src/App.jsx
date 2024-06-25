import "./App.css";
import { useState } from 'react';


function App() {
  const [message, setMessage] = useState("Greeting Message");
  const [messageInput, setMessageInput] = useState("");
  
 
  return (
    <div className="App">
      
      <div className="greeting-container">{message}</div>
      <div className="input-container">
        <label htmlFor="greeting-message">New Greeting Message</label>
        <input id="greeting-message" type="text" value={messageInput} 
               onChange={(even)=> setMessageInput(even.target.value)} />
      </div>
      <div className="buttons">
        <button type="submit" onClick={()=> setMessage(messageInput)}>Update text</button>
      </div>
      
    </div>
    
  );
}

export default App;
