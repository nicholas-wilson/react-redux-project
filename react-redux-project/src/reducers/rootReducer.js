import {combineReducers} from "redux";

const rootReducer = combineReducers({
  time: timeReducer,
})

export default rootReducer;

function timeReducer(state = 0, action) {

  switch(action.type){
    case "INCREMENT":
      state++;
      return state;
    default:
      return state;
  }
}