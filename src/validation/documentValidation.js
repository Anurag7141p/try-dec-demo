export const validateGSTFormat = (value) => {
  const gstRegex =
    /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}[Z]{1}[0-9A-Z]{1}$/;
  return gstRegex.test(value);
};

export const validateAadharFormat = (value) => {
  const aadharRegex = /^[0-9]{12}$/;
  return aadharRegex.test(value);
};

export const validatePANFormat = (value) => {
  const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
  return panRegex.test(value);
};

export const validateLicenseFormat = (value) => {
    const licenseRegex = /^[A-Z]{2}[0-9]{2}[0-9]{11}$/;
    return licenseRegex.test(value);
  }

