export const localToken = 'groove-avenue-token';
export const localUser = 'groove-avenue-user';

export const emailPattern = '^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
export const phonePattern = '[0-9-+ ]*';
export const passwordPattern = '^(?=.*\\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$';
export const dateMomentFormat = 'DD/MM/YYYY';
export const dateDoctorFormat = 'YYYY.MM.DD';
export const CUSTOM_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: dateMomentFormat,
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

export const phoneCodes = [
  {
    country: 'Russia',
    value: '+7'
  },
  {
    country: 'Russia',
    value: '8'
  }
];
