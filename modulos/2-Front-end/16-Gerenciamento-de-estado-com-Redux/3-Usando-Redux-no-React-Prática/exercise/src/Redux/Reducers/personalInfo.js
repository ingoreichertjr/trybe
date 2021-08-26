import { PERSONAL_UPDATE } from '../Actions';

const initialState = {
  name: '',
  email: '',
  cpf: '',
  address: '',
  city: '',
  state: '',
};

const personalInfo = (state = initialState, { type, payload }) => {
  switch (type) {
  case PERSONAL_UPDATE:
    return { ...state, ...payload };
  default:
    return state;
  }
};

export default personalInfo;
