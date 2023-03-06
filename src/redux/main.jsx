import React from 'react'
import {shallowEqual, useSelector, useDispatch} from 'react-redux'

import './style.scss'

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADDITIONS = 'ADDITIONS';
export const INITIALVALUE = "INITIALVALUE"

export function incrementAction(){
    return {
        type: INCREMENT,
    }
}
export function decrementAction(){
    return {
        type: DECREMENT,
    }
}
export function additionAction(){
    return {
        type: ADDITIONS,
    }
}
export function initial(){
    return {
        type: INITIALVALUE,
    }
}

const Main = ()=>{

    const selector = (state)=> state.counter.value;
    const value = useSelector (selector,shallowEqual);

const dispatch = useDispatch() 

    return(
        <div className='counter'>
            <h1 className="text-bg-secondary text-center">{value}</h1><br/>
            <div className='d-flex justify-content-center'>
                <button className="btn btn-outline-secondary me-3" onClick={() => dispatch(incrementAction())} >INCREMENT BY 2</button>
                <button className="btn btn-outline-secondary me-3" onClick={() => dispatch(decrementAction())}>DECREMENT BY 2</button><br/>
                <button className="btn btn-outline-secondary me-3" onClick={() => dispatch(additionAction())}>ADD BY 5</button>
                <button className="btn btn-outline-secondary" onClick={() => dispatch(initial())}>Intial</button>
            </div>
        </div>
    );
  }

export default Main;