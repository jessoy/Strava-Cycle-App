import { initialState } from "./initialState";

export function reducer(state = initialState, action) {
  switch (action.type) {
    
    case "SETAPIDATA":
      return { ...state, apiData: action.apiData };
    
    default:
      return state;
  }
}
