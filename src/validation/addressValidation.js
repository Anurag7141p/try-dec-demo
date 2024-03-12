import * as Yup from "yup";

export const addressSchema = Yup.object({
  landmark: Yup.string().required("Address is required"),
  area: Yup.string().required("area is required"),

  doorNo: Yup.string().required("door number is required"),
});
