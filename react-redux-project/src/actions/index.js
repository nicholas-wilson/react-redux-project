export const incrementTime = ()=> {
  return {
    type: "INCREMENT_TIME"
  }
}

export const incrementScore = ()=> {
  return {
    type: "INCREMENT_SCORE"
  }
}

export const fetchHiscores = () => {
  return (dispatch) => {
    dispatch({type: "LOADING_HISCORES"})
    fetch("http://localhost:3000/hiscores")
    .then(response => response.json())
    .then(hiscoresJson => dispatch({type: "ADD_HISCORES", hiscores: hiscoresJson}))
  }
}