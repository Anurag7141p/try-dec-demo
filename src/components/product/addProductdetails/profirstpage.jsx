import { Field, ErrorMessage } from "formik";
import { inputStyle } from '../../../utils/utils';

const Profirstpage = () => {
  return (
    <div className="flex lg:h-screen lg:flex-row lg:ms-10">
      <div className="md:ms-4 md:mt-40 ms-2 ">
      <h1 className="mt-0 mb-6">Product Details</h1>
      <div className="mb-4">
        <label htmlFor="productBrand">Product Brand</label>
        <Field
          type="text"
          placeholder=""
          name="productBrand"
          className={inputStyle}
        />
        <ErrorMessage
          name="productBrand"
          component="div"
          className="text-red-600"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="productModel">Product Model</label>
        <Field
          type="text"
          name="productModel"
          className={inputStyle}
        />
        <ErrorMessage
          name="productModel"
          component="div"
          className="text-red-600"
        />
      </div>
    </div></div>
  );
};

export default Profirstpage;
