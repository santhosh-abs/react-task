import React,{useContext} from 'react'
import { MyContext} from './provider';

const Context = () => {

const x = useContext(MyContext);


    return (
        <>
            <div className='click-me d-flex justify-content-center'>
                <MyContext.Consumer>
                    {value => <h1>{x}</h1>}
                </MyContext.Consumer> 
            </div>
        </>
    );
}

 export default Context;