import * as Yup from "yup";

export const loginSchema = Yup.object({
  phoneOrEmail: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters")
    .max(20, "Password must not exceed 20 characters"),
});

export const registerSchema = Yup.object({
  firstName: Yup.string()
    .required("First Name is required")
    .min(2, "First Name should be at least 2 characters")
    .max(30, "First Name should not exceed 30 characters"),
  lastName: Yup.string()
    .required("Last Name is required")
    .min(2, "Last Name should be at least 2 characters")
    .max(30, "Last Name should not exceed 30 characters"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters")
    .max(20, "Password must not exceed 20 characters"),
  cpassword: Yup.string()
    .oneOf([Yup.ref("password")], "password not matched")
    .required("please enter password"),
  countryCode: Yup.string().required("Country Code is required"),
  phone: Yup.string()
    .required("Phone Number is required")
    .matches(/^[0-9]+$/, "Phone Number should contain only digits")
    .min(10, "Phone Number must be at least 10 digits")
    .max(10, "Phone Number must not exceed 10 digits"),
});

export const otpValidationSchema = Yup.object().shape({
  otp: Yup.string()
    .matches(/^[0-9]{4}$/, "Invalid OTP")
    .required("Required"),
});

export const storeShema = Yup.object({
  storeName: Yup.string()
    .min(5, "Storename must be at least 5 characters")
    .trim()
    .required("Please enter Storename"),
  address: Yup.string().required("Please enter address"),
  district: Yup.string()
    .min(3, "District must be at least 3 characters")
    .required("Please enter District"),
  country: Yup.string()
    .min(3, "country must be at least 3 characters")
    .required("Please enter Country"),
  state: Yup.string()
    .min(3, "state must be at least 3 characters")
    .required("Please enter state"),
  pincode: Yup.string()
    .min(6, "Pincode must be at least 6 characters")
    .required("Please enter pincode"),
  serviceType: Yup.string().required("Please select a Service type"),
  storeMode: Yup.string().required("Please select a Service type"),
  startTime: Yup.string()
    .matches(
      /^(0?[1-9]|1[0-2]):[0-5][0-9] (AM|PM)$/i,
      "Please enter a valid start time in 12-hour format (e.g., 9:00 AM)"
    )
    .required("Please select a start time"),
  closingTime: Yup.string()
    .matches(
      /^(0?[1-9]|1[0-2]):[0-5][0-9] (AM|PM)$/i,
      "Please enter a valid closing time in 12-hour format (e.g., 5:00 PM)"
    )
    .required("Please select a closing time"),
  storeRules: Yup.array()
    .of(Yup.string().required("Please enter store rule"))
    .min(1, "Please add at least one store rule"),
  image: Yup.mixed().required("Please upload an image file"),
  userId: Yup.string().required(""),

  pancard: Yup.string()
    .trim()
    .min(7, "Pancard must be at least 7 characters")
    .required("Please enter Pancard Number")
    .test("uppercase", "Pancard must be in uppercase", (value) => {
      if (value !== undefined && value !== null) {
        return value === value.toUpperCase();
      }
      return true;
    }),
});

export const ProductValidation = Yup.object({
  productBrand: Yup.string()
    .min(2, "Brand Name must be at least 3 characters")
    .required("Please enter product Brand"),
  productModel: Yup.string()
    .min(3, "Product Model must be at least 3 characters")
    .required("Please enter product Model"),
  ProductN: Yup.string()
    .min(3, "Product name must be at least 3 numbers")
    .required("Please enter Product Name"),
});
