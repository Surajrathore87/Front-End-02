const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const NAME_REGEX = /^[a-zA-Z ]+$/;

export const maxLengthCheck = (object) => {
  if (object.target.value.length > object.target.maxLength) {
    object.target.value = object.target.value.slice(0, object.target.maxLength);
  }
};

export const validGST = new RegExp(
  '^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$'
);

export const validMobile = new RegExp(
  '/^\d*[.]?\d*$/'
);

export function validName(name) {
  return NAME_REGEX.test(name);
}

export function validEmail(emailid) {
  return EMAIL_REGEX.test(String(emailid).trim());
}