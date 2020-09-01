import {combineReducers} from "redux";

const rootReducer = combineReducers({
  time: timeReducer,
  score: scoreReducer,
})

export default rootReducer;

function timeReducer(state = 0, action) {

  switch(action.type){
    case "INCREMENT_TIME":
      state++;
      return state;
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