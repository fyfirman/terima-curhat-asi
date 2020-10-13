import { ConsultationConstant } from '../src/Redux/Constant';
import { ConsultationAction } from '../src/Redux/Actions';

describe('consultation actions', () => {
  it('should create an action to set consultion', () => {
    const consultation = { id: 1, description: 'Description' };
    const expectedAction = {
      type: ConsultationConstant.FETCHED,
      payload: {
        consultation
      }
    };

    expect(ConsultationAction.setConsultation(consultation)).toEqual(
      expectedAction
    );
  });

  it('should create an action to set consultation post', () => {
    const consultationId = '1';
    const consultationPost = [{ id: 1, message: 'Pesan satu' }];

    const expectedAction = {
      type: ConsultationConstant.POST_FETCHED,
      payload: { consultationId, consultationPost }
    };

    expect(
      ConsultationAction.setConsultationPost(consultationId, consultationPost)
    ).toEqual(expectedAction);
  });
});
