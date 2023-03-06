import React from 'react';
import "./scss/App.scss";

import { Provider } from "react-redux";
import store from "./redux/store";

import Task from "./ReactTask/task"

const App = () => {
	return (
    <>
      <Provider  store={store}>
        <Task/>
      </Provider>
    </>

);
}

export default App;

