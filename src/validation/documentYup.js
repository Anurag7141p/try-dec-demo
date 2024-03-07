import * as Yup from "yup";

export const documentSchema = Yup.object({
  name: Yup.string()
    .min(5, "name must be at least 5 characters")
    .trim()
    .required("Please enter name"),
  dob: Yup.string().required("Date of Birth is required"),
  address: Yup.string().required("Address is required"),
  district: Yup.string()
    .min(3, "District must be at least 3 characters")
    .required("Please enter District"),
  country: Yup.string()
    .min(3, "Country must be at least 3 characters")
    .required("Please enter Country"),
  state: Yup.string()
    .min(3, "State must be at least 3 characters")
    .required("Please enter State"),
  pincode: Yup.string()
    .matches(/^[1-9][0-9]{5}$/, {
      message: "Invalid pincode format",
      excludeEmptyString: true,
    })
    .matches(/^\d+$/, {
      message: "Pincode must contain only numbers",
      excludeEmptyString: true,
    })
    .required("Please enter Pincode"),
  phone: Yup.string()
    .required("Phone Number is required")
    .matches(/^\d+$/, "Phone Number should contain only digits")
    .min(10, "Phone Number must be at least 10 digits")
    .max(15, "Phone Number must not exceed 15 digits"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  verificationValue: Yup.string().required("Verification value is required"),
  verificationValueStatus: Yup.boolean().required(
    "Verification value status is required"
  ),
  verificationValueType: Yup.string().required(
    "Verification value type is required"
  ),
  storeLicence: Yup.string(),
  otp: Yup.string()
    // .matches(/^[0-9]+$/, 'OTP must contain only numbers')
    .min(6, 'OTP must be at least 4 digits')
    .max(6, 'OTP must be at most 4 digits'),
});
