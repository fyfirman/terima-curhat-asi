import ConsultationReducer from '../src/Redux/Reducers/ConsultationReducer';
import ConsultationConstant from '../src/Redux/Constant/ConsultationConstant';

describe('consultation reducer', () => {
  it('should return the initial state', () => {
    expect(ConsultationReducer(undefined, {})).toEqual([]);
  });

  it(`should handle ${ConsultationConstant.FETCHED}`, () => {
    const payload = [{ id: '1' }];
    const action = {
      type: ConsultationConstant.FETCHED,
      payload
    };

    expect(ConsultationReducer(undefined, action)).toEqual(payload);
  });

  it(`should handle ${ConsultationConstant.UPDATED}`, () => {
    const initialState = [
      { id: '1', name: 'satu' },
      { id: '2', name: 'dua' }
    ];
    const payload = [
      { id: '2', name: 'dua(payload)' },
      { id: '3', name: 'tiga' }
    ];
    const action = {
      type: ConsultationConstant.UPDATED,
      payload
    };

    expect(ConsultationReducer(undefined, action)).toEqual(payload);

    expect(ConsultationReducer(initialState, action)).toEqual([
      { id: '1', name: 'satu' },
      { id: '2', name: 'dua(payload)' },
      { id: '3', name: 'tiga' }
    ]);
  });

  it(`should handle ${ConsultationConstant.POST_FETCHED}`, () => {
    const initialState = [
      { id: '1', name: 'satu' },
      { id: '2', name: 'dua' }
    ];

    const payload = {
      consultationId: '2',
      consultationPost: [
        { id: 1, message: 'Pesan satu' },
        { id: 2, message: 'Pesan dua' }
      ]
    };

    const action = {
      type: ConsultationConstant.POST_FETCHED,
      payload
    };

    expect(ConsultationReducer(initialState, action)).toEqual([
      { id: '1', name: 'satu' },
      {
        id: '2',
        name: 'dua',
        consultationPost: [
          { id: 1, message: 'Pesan satu' },
          { id: 2, message: 'Pesan dua' }
        ]
      }
    ]);
  });
});
