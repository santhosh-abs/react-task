const initialState = {
    value: 0,
  };
  
  function addReducer(state = initialState, action) {
    switch(action.type) {
      case 'INCREMENT':
        return { ...state, value: state.value + 2 };
      case 'DECREMENT':
        return { ...state, value: state.value - 2 };
      case 'ADDITIONS':
        return { ...state, value: state.value + 5 };
      case 'INITIALVALUE':
        return {...state,value: state.value - state.value};
      default:
        return state;
    }
  }
  
  export default addReducer;