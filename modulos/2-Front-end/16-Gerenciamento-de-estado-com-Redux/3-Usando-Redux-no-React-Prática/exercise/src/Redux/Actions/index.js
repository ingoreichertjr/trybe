export const PERSONAL_UPDATE = 'PERSONAL_UPDATE';
export const PROFESSIONAL_UPDATE = 'PROFESSIONAL_UPDATE';

export const personalUpdate = (payload) => ({
  type: PERSONAL_UPDATE,
  payload,
});

export const professionalUpdate = (payload) => ({
  type: PROFESSIONAL_UPDATE,
  payload,
});
