/**
 * Created by synerzip on 21/07/17.
 */
export function createConstants(...constants) {
  return constants.reduce((acc, constant) => {
    acc[constant] = constant;
    return acc;
  }, {});
}


export function createReducer(initialState, reducerMap) {
  return (state = initialState, action = {}) => {
    const reducer = reducerMap[action.type];

    return reducer
        ? reducer(state, action.payload)
        : state;
  };
}