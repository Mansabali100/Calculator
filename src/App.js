import './App.css';
import React,{useState} from 'react';
import * as math from 'mathjs';


function App() {

  const [result,setresult] = useState("");
  const [input, setInput] = useState('');

  const clickhandler = (e) => {
    setInput((prevInput) => prevInput + e.target.value);
  };

  const cleardisplay = ()=>{
    setresult("");
    setInput('');
  }
  const calculate = () => {
    try {
      const resultValue = math.evaluate(input);
      setresult(resultValue.toString());
    } catch (error) {
      setresult("Error");
    }
  }
  return (
    <div className='main'>
      <h1>Calculator</h1>
      
    <div className="calcu">
      <input type="text" placeholder='0' id='answer' value={input}/>
      <input type="button" value="9" className="button" onClick={clickhandler}/>
      <input type="button" value="8" className="button" onClick={clickhandler}/>
      <input type="button" value="7" className="button" onClick={clickhandler}/>
      <input type="button" value="6" className="button" onClick={clickhandler}/>
      <input type="button" value="5" className="button" onClick={clickhandler}/>
      <input type="button" value="4" className="button" onClick={clickhandler}/>
      <input type="button" value="3" className="button" onClick={clickhandler}/> 
      <input type="button" value="2" className="button" onClick={clickhandler}/>
      <input type="button" value="1" className="button" onClick={clickhandler}/>
      <input type="button" value="0" className="button" onClick={clickhandler}/>
      <input type="button" value="+" className="button" onClick={clickhandler}/>
      <input type="button" value="-" className="button" onClick={clickhandler}/>
      <input type="button" value="*" className="button" onClick={clickhandler}/>
      <input type="button" value="/" className="button" onClick={clickhandler}/>
      <input type="button" value="%" className="button" onClick={clickhandler}/>
      <input type="button" value="." className="button" onClick={clickhandler}/>
      <input type="button" value="Clear" className="button button1" onClick={cleardisplay}/>
      <input type="button" value="=" className="button button1" onClick={calculate}/>
      
    </div>
    <div className='result'>
        <h1>Result:  {result}</h1>
      </div>
    </div>    
    
  );
}

export default App;
