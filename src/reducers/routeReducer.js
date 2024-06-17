const initialState = {
    stations: [
    {
        latitude :32.08668518932131,
        longitude: 34.82187569559277
    },
    {
        latitude :32.07904930671353,
        longitude: 34.83938515569568
    }
 ]
  };
  
  const routeReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_STATIONS':
        return {
          ...state,
          stations : action.payload
        };
      default:
        return state;
    }
  };
  
  export default routeReducer;
  