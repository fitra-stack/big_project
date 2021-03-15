const initialState = {
    counter: 0,
    slide: 0
  }

const rootReducer = (state = initialState, action) => {
    if (action.type === 'ADD') 
    {
      return {
        ...state,
        counter: state.counter + 1
      }
    }

    if (action.type === 'SLIDE') 
    {
      if (state.slide === 2)
      {
        return {
          ...state,
          slide: state.slide - 2
        }
      }else{
        return {
          ...state,
          slide: state.slide + 1
        }
      }
    }
    if (action.type === 'SLIDE_MIN') 
    {
      if (state.slide === 0)
      {
        return {
          ...state,
          slide: state.slide + 2
        }
      }else{
        return {
          ...state,
          slide: state.slide - 1
        }
      }
    }
    return state;
}
  
export default rootReducer;