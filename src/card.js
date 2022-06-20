import React, { useState } from 'react';
import './Card.css'

function Card(props) {
   const [val1, setVal1] = useState();
   const [val2, setVal2] = useState();
   const [calcVal, setCalcVal] = useState();

    function clearCB(event) {
        setVal1('');
        setVal2('');
        setCalcVal('');
    }
    function calcThis() {

        setCalcVal(props.calcCB(val1, val2));
    }

    function handleChange1(event) {
        setVal1(event.target.value);
    }

    function handleChange2(event) {
        setVal2(event.target.value);
    }

        return (
            <div className="card">
                <h1>{props.text}</h1>
                <div>
                    <button className='calc-button' onClick={clearCB}>
                        Clear
                    </button>
                    <button className='calc-button' onClick={calcThis}>
                        Calc
                    </button>
                </div>
                    <input className='number-input' type='number' value={val1} placeholder='Please enter a number' onChange={handleChange1}/>
                    <input className='number-input' type='number' value={val2} placeholder='Please enter a number'  onChange={handleChange2}/>
                    {(calcVal || calcVal == 0) ? (<h1>{calcVal}</h1>) : null}
            </div>
        );
    
}

export default Card;