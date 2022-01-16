import React from 'react';

import './App.css';

import TotalDisplay from './TotalDisplay';
import CalcButton from './CalcButton';

import { useReducer } from 'react';
import reducer, { initialState } from '../reducers';
import { addOne, applyNumber, changeOperation, clearDisplay, addMemory, applyMemory, clearMemory } from '../actions';



function App() {
  const [state, dispatch] = useReducer (reducer, initialState);

  function handleclick(e) {
    dispatch(applyNumber(parseInt(e.target.value)))
  };

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"> Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation} </span>
              <span id="memory"><b>Memory:</b>{state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton onClick={()=>{dispatch(addMemory(state.total))}} value={"M+"}/>
              <CalcButton onClick={()=>{dispatch(applyMemory(state.total))}} value={"MR"}/>
              <CalcButton onClick={()=>{dispatch(clearMemory(0))}} value={"MC"}/>
            </div>

            <div className="row">
              <CalcButton onClick={handleclick} value={1}/>
              <CalcButton onClick={handleclick} value={2}/>
              <CalcButton onClick={handleclick} value={3}/>
            </div>

            <div className="row">
              <CalcButton onClick={handleclick} value={4}/>
              <CalcButton onClick={handleclick} value={5}/>
              <CalcButton onClick={handleclick} value={6}/>
            </div>

            <div className="row">
              <CalcButton onClick={handleclick} value={7}/>
              <CalcButton onClick={handleclick} value={8}/>
              <CalcButton onClick={handleclick} value={9}/>
            </div>

            <div className="row">
              <CalcButton onClick={(e)=>{dispatch(changeOperation(e.target.value))}} value={"+"}/>
              <CalcButton onClick={(e)=>{dispatch(changeOperation(e.target.value))}} value={"*"}/>
              <CalcButton onClick={(e)=>{dispatch(changeOperation(e.target.value))}} value={"-"}/>
            </div>

            <div className="row ce_button">
              <CalcButton onClick={()=>{dispatch(clearDisplay(0))}} value={"CE"}/>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App

/** 1. CE button is clicked
 * 2. The click handler is then run
 * 3. in the click handler dispatch is then run (dispath in general takes an action type and action payload as arugments)
 * 4. clearDisplay with an arguent of 0 is executed as dispatch's arguments.
 * 5. clearDisplay is defined in actions with a TYPE of CLEAR_DISPLAY, and PAYLOAD is TOTAL
 * 6. The reducer then runs the condition CEALR_DISPLAY which returns the payload (which has value of zero) to "total"
 */