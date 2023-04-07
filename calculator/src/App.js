import { useState } from 'react';
import './App.css';

function App() {
  const [calc , setCalc] = useState("");
  const [result , setResult] = useState("");

  const ops = ['/' , 'C' , '+' , '-' , '.' , 'C','*'];

  const updateCalc = (value) => {
    if((ops.includes(value) && calc === '') || (ops.includes(value) && ops.includes(calc.slice(-1)))){
      return ;
    }
    setCalc(calc + value);
    if(!ops.includes(value)){
      setResult(eval(calc + value).toString());
    }
  }
  const changeSign = () => {
    var newCalc = eval(calc);
    setCalc((-1*newCalc).toString());
    setResult((-1*newCalc).toString());
  } 
  const calculate = () => {
    setCalc(eval(calc).toString());
    setResult('');
  }
  const handleC = () => {
    if(calc === ''){
      return;
    }
    setCalc('');
    setResult('');
  }
  const percent = () => {
    var newCalc = eval(calc);
    setCalc((newCalc*0.01).toString());
    setResult((newCalc*0.01).toString());
  }
  return (
    <div className="App">
      <div className='container'>
        <div className='display'><span className='display-answer'>{result ? <span>({result})</span> : ''}&nbsp;</span>{calc || "0"}</div>
        <div className='buttons'>
          <button style = {{"backgroundColor": "#D4D4D2"}} onClick={handleC}>C</button>
          <button style = {{"backgroundColor": "#D4D4D2"}} onClick = {changeSign}>+/-</button>
          <button style = {{"backgroundColor": "#D4D4D2"}} onClick={percent}>%</button>
          <button style = {{"backgroundColor": "#FF9500" , "color": "white", "fontSize": "50px"}} onClick={()=>updateCalc('/')}>÷</button>
          <button style = {{"backgroundColor": "#1C1C1C" , "color": "white"}} onClick={()=>updateCalc('7')}>7</button>
          <button style = {{"backgroundColor": "#1C1C1C" , "color": "white"}} onClick={()=>updateCalc('8')}>8</button>
          <button style = {{"backgroundColor": "#1C1C1C" , "color": "white"}} onClick={()=>updateCalc('9')}>9</button>
          <button style = {{"backgroundColor": "#FF9500" , "color": "white"}} onClick={()=>updateCalc('*')}>X</button>
          <button style = {{"backgroundColor": "#1C1C1C" , "color": "white"}} onClick={()=>updateCalc('4')}>4</button>
          <button style = {{"backgroundColor": "#1C1C1C" , "color": "white"}} onClick={()=>updateCalc('5')}>5</button>
          <button style = {{"backgroundColor": "#1C1C1C" , "color": "white"}} onClick={()=>updateCalc('6')}>6</button>
          <button style = {{"backgroundColor": "#FF9500" , "color": "white"}} onClick={()=>updateCalc('-')}>-</button>
          <button style = {{"backgroundColor": "#1C1C1C" , "color": "white"}} onClick={()=>updateCalc('1')}>1</button>
          <button style = {{"backgroundColor": "#1C1C1C" , "color": "white"}} onClick={()=>updateCalc('2')}>2</button>
          <button style = {{"backgroundColor": "#1C1C1C" , "color": "white"}} onClick={()=>updateCalc('3')}>3</button>
          <button style = {{"backgroundColor": "#FF9500" , "color": "white"}} onClick={()=>updateCalc('+')}>+</button>
          <button style = {{"borderRadius":"50px","backgroundColor": "#1C1C1C" , "color": "white" , "width": "189px"}} onClick={()=>updateCalc('0')}>0</button>
          <button style = {{"backgroundColor": "#1C1C1C" , "color": "white"}} onClick={()=>updateCalc('.')}>.</button>
          <button style = {{"backgroundColor": "#FF9500" , "color": "white"}} onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;