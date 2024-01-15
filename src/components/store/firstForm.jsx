import { Field, ErrorMessage } from "formik";
import { inputStyle } from "../../utils/utils";

const StoreFirstForm = () => {
  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];
  return (
    <div className="flex lg:h-screen flex-col md:flex-row md:ms-8">
      <div>
        <div className="w-full md:w-1/2 ">
          <div
            className="flex flex-col justify-end w-full p-4 mt-10 "
            style={{ width: "414px" }}
          >
            <label className="w-60" htmlFor="storeName ">
              Choose a name for your store
            </label>

            <Field
              type="text"
              placeholder=""
              name="storeName"
              className={inputStyle}
            ></Field>
            <ErrorMessage
              name="storeName"
              component="div"
              className="text-red-600"
            />

            <div className="w-full md:w-96 mt-5">
              <label htmlFor="storeType" className="mb-2">
                Select your store Location
              </label>

              <div className="relative ">
                <select
                  id="storeType"
                  name="storeType"
                  className="block appearance-none w-full bg-white border-b border-gray-400 outline-none focus:border-blue-500  text-gray-700 py-2 mb-4 pr-8 rounded leading-tight focus:outline-none focus:border-blue-500 "
                >
                  <option value="">Select location</option>
                  {options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <label htmlFor="permanentAddress" className="mb-2">
              Permanent address
            </label>

            <Field
              type="text"
              placeholder="Permanent address"
              name="address"
              className={inputStyle}
            ></Field>
            <ErrorMessage
              name="address"
              component="div"
              className="text-red-600"
            />
          </div>
        </div>
        {/* second div section */}
        <div className="flex flex-col md:flex-row md:space-x-11 ml-4 ">
          <div>
            <label htmlFor="district">District</label>

            <Field
              className={inputStyle}
              type="text"
              placeholder="District"
              name="district"
            ></Field>
            <ErrorMessage
              name="district"
              component="div"
              className="text-red-600"
            />
          </div>
          <div>
            <label htmlFor="state">State</label>

            <Field
              className={inputStyle}
              type="text"
              placeholder="State"
              name="state"
            ></Field>
            <ErrorMessage
              name="state"
              component="div"
              className="text-red-600"
            />
          </div>
        </div>
        {/* third div secgtion */}
        <div className="flex flex-col md:flex-row md:space-x-11 md:mt-7 ms-4 ">
          <div>
            <label htmlFor="country">Country</label>
            <Field
              className={inputStyle}
              type="text"
              placeholder="Country"
              name="country"
            ></Field>
            <ErrorMessage
              name="country"
              component="div"
              className="text-red-600"
            />
          </div>
          <div>
            <label htmlFor="pincode">Pincode</label>

            <Field
              className={inputStyle}
              type="text"
              placeholder="Pincode"
              name="pincode"
            ></Field>
            <ErrorMessage
              name="pincode"
              component="div"
              className="text-red-600"
            />
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default StoreFirstForm;
