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

export const submitScore = (score) => {
  fetch("http://localhost:3000/hiscores", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      name: score.name,
      score: score.points,
      time: score.time
    })
  })
}