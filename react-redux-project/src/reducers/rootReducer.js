import {combineReducers} from "redux";

const rootReducer = combineReducers({
  time: timeReducer,
  score: scoreReducer,
})

export default rootReducer;

function timeReducer(state = {seconds: 0, timer: null}, action) {

  switch(action.type){
    case "INCREMENT_TIME":
      return {...state, seconds: state.seconds + 1};
    case "SET_TIMER":
      return {...state, timer: action.timer};
    default:
      return state;
  }
}

function scoreReducer(state = 0, action) {
  switch(action.type) {
    case "INCREMENT_SCORE":
      state++;
      return state;
    default:
        return state;
  }
}