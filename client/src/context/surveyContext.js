import React, { useReducer, useEffect, createContext } from 'react';

//---context
export const Context = createContext();

//----REDUCER
const stateReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'GET_SURVEY':
      return { ...state, surveys: payload };
    default:
      return state;
  }
}

//---PROVIDER AND ACTION
const SurveyProvider = props => {
  const [state, dispatch] = useReducer(stateReducer, { surveys: ' ' });
  useEffect(() => {
    async function fetchData() {
      dispatch({
        type: 'GET_SURVEY',
        payload: 'sda'
      });
    }
    return fetchData();
  }, [])
  return (
    <Context.Provider value={{ state }}>
      {props.children}
    </Context.Provider>
  )
}

export default SurveyProvider;