import * as Yup from "yup";

export const serviceTypeSchema = Yup.object({
  serviceType: Yup.string().required("Please select Store Type"),
});

export const storeFormSchema = Yup.object({
  storeName: Yup.string()
    .min(5, "Storename must be at least 5 characters")
    .trim()
    .required("Please enter Storename"),
  storeAddress: Yup.string().required("Please enter store address"),
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
  storeMode: Yup.string().required("Please select a Service type"),
});

export const storeShemaMain = Yup.object({
  storeName: Yup.string()
    .min(5, "Storename must be at least 5 characters")
    .trim()
    .required("Please enter Storename"),
  storeAddress: Yup.string().required("Please enter store address"),
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
  storeMode: Yup.string().required("Please select a Service type"),
  openingTime: Yup.string()
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
});
