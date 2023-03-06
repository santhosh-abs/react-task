import React from 'react';
import "./task.scss";

import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import { lazy, Suspense } from 'react';


import Product from '../HTMLtoReact/Pages/ProductComponent/Product';
import Signin from '../HTMLtoReact/Pages/SignInComponent/SignIn'
import {MyProvider} from '../ProviderContext/provider';
const TodoApp = lazy(() => import(/* webpackChunkName: 'listtodo' */ '../TodoComponent/TodoList'));
const FirstComponent = lazy(() => import(/* webpackChunkName: 'paginate' */ '../Pagination/FirstComponents'));
const Context = lazy(() => import(/* webpackChunkName: 'provide' */ '../ProviderContext/context'));
const Redux = lazy(() => import(/* webpackChunkName: 'redux' */ '../redux/main'));
const Reacts = lazy(() => import(/* webpackChunkName: 'react' */ '../HTMLtoReact/ReactMain'));


const openNav = () => {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}
const closeNav = () => {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}

const Task = () => {
	return (
	<Router>
		<div className= "menu">
      <div id="mySidebar" className="sidebar" >
        <button href="./" className="closebtn" onClick={closeNav}>x</button>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/todolist">TodoList</Link>
          </li>
          <li>
            <Link to="/paginate">TablePaginate</Link>
          </li>
          <li>
            <Link to="/context">Context</Link>
          </li>
          <li>
            <Link to="/redux">Redux</Link>
          </li>
          <li>
            <Link to="/react">React</Link>
          </li>
        </ul>
      </div>
      <div id="main">
        <div className="d-flex" id="task-nav">
            <div className=" flex-fill">
                <img src="/Images/ablogo.png" alt='abservetech'/>
            </div>
            <div className="ms-auto align-self-center">
                <button id="openbtn" onClick={openNav}>☰</button>
            </div>
        </div>
      <MyProvider>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route  path='/todolist' element={<TodoApp/>} />
                <Route  path='/paginate' element={<FirstComponent />} />
                <Route  path='/context' element={<Context/>} />
                <Route  path='/redux' element={<Redux/>} />
                <Route  path='/react' element={<Reacts/>}>
                  <Route path='/react/home' element={<Signin/>}/>
                  <Route path='/react/shop' element={<Product/>}/>
                </Route>
            </Routes>
          </Suspense>
      </MyProvider>
       </div>
		</div>
  </Router>
);
}

export default Task;
