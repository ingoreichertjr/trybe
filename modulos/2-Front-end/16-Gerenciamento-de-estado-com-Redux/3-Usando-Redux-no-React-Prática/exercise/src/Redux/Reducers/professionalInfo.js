import { PROFESSIONAL_UPDATE } from '../Actions';

const initialState = {
  resume: '',
  job: '',
  jobDescription: '',
};

const professionalInfo = (state = initialState, { type, payload }) => {
  switch (type) {
  case PROFESSIONAL_UPDATE:
    return { ...state, ...payload };
  default:
    return state;
  }
};

export default professionalInfo;
