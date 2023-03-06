import React,{createContext} from 'react'

import './style.scss'

export const MyContext = createContext();

export const MyProvider = (props) => {

    return (
        <>
            <MyContext.Provider value = {<button className='btn btn-outline-secondary mt-5' id='click-me' onClick={()=>{alert("Hi Santhosh");}}>CLICK ME</button>}>
                {props.children}
            </MyContext.Provider>
        </>
    );
}
// import React, {useState, createContext} from 'react'

// export const MyContext = createContext();

// export const MyProvider = (props) => {
//     const [color,setColor] = useState(false);
// const changeColor = () => {
//     setColor(true);
// }

//     return (
//         <>
//             <MyContext.Provider value = {<button className='btn btn-outline-secondary mt-5' onClick={changeColor} style={{ backgroundColor: color ? "blue" : ""}}>Dark</button>}>
//                 {props.children}
//             </MyContext.Provider>
//         </>
//     );
// }
