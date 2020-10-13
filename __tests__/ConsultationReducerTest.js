import ConsultationReducer from '../src/Redux/Reducers/ConsultationReducer';

describe('consultation reducer', () => {
  it('should return the initial state', () => {
    expect(ConsultationReducer(undefined, {})).toEqual([]);
  });
});
