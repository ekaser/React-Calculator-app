import './App.css';
import Card from './card';

function App() {

  function addCB(num1, num2) {
    var cNum = parseFloat(num1) + parseFloat(num2);
    return cNum;
  }

  function subtractCB(num1, num2) {
    var cNum = parseFloat(num1) - parseFloat(num2);
    return cNum;
  }

  function multiplyCB(num1, num2) {
    var cNum = parseFloat(num1) * parseFloat(num2);
    return cNum;
  }

  function divideCB(num1, num2) {
    var cNum = parseFloat(num1) / parseFloat(num2);
    return cNum;
  }

  return (
    <div>
      <h1 className='App-header'>Calculators</h1>
      <div className='App'>
        <Card className='card' text='Add' calcCB={addCB}></Card>
        <Card className='card' text='Subtract' calcCB={subtractCB}></Card>
        <Card className='card' text='Multiply' calcCB={multiplyCB}></Card>
        <Card className='card' text='Divide' calcCB={divideCB}></Card>
      </div>
    </div>
  );
}

export default App;
