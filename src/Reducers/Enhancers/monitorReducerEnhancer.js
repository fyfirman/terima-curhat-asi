const round = (number) => Math.round(number * 100) / 100;

const monitorReducerEnhancer = (createStore) => (
  reducer,
  initialState,
  enhancer
) => {
  const monitoredReducer = (state, action) => {
    // eslint-disable-next-line no-undef
    const start = performance.now();
    const newState = reducer(state, action);
    // eslint-disable-next-line no-undef
    const end = performance.now();
    const diff = round(end - start);

    console.log('reducer process time:', diff);

    return newState;
  };

  return createStore(monitoredReducer, initialState, enhancer);
};

export default monitorReducerEnhancer;
