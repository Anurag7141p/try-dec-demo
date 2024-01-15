import { useEffect, useState } from "react";
import { ErrorMessage } from "formik";
const DocumnetFirstForm = ({ setFieldValue }) => {
  const options = [
    { value: "GST", label: "GST" },
    { value: "Pan Card", label: "Pan Card" },
    { value: "Aadhar", label: "Aadhar" },
  ];
  const [isGSTRegistered, setIsGSTRegistered] = useState(false);
  const [value, setValue] = useState("");
  const [selectedValue, setSelectedValue] = useState("Pan Card");
  const handleDocumentValue = (e) => {
    setValue(e.target.value);
    setFieldValue(selectedValue, e.target.value);
  };

  const handleCheckboxChange = (e) => {
    setIsGSTRegistered(e.target.checked);
  };

  useEffect(()=>{
    if(isGSTRegistered==true){
        setSelectedValue("GST")
    }
  },[isGSTRegistered])
  return (
    <div className="flex lg:h-screen lg:flex-row lg:ms-10">
      <div>
        <div className="md:ms-4 md:mt-40 ms-2 ">
          <p>Documents</p>
          <p className="text-gray-500 mt-2 ">
            Please take a moment to verify your <br /> account. You will unlock
            benefits <br /> after verification.
          </p>
        </div>
        <div className="md:ms-4 ms-2 mt-10 flex">
          <p className="text-gray-500 ">Are you GST Registered?</p>
          <input checked={isGSTRegistered} onChange={handleCheckboxChange} className="ml-3" type="checkbox" />
        </div>
        <div className="flex flex-col justify-end w-full md:w-2/3 lg:w-1/2 p-4 mt-2">
        {isGSTRegistered ? "":(<div className="w-full sm:w-80 ">
            <label htmlFor="storeType" className="mb-2">
              Select your ID proof
            </label>
            <div className="relative">
              <select
                id="storeType"
                name="storeType"
                value={selectedValue}
                onChange={(e) => setSelectedValue(e.target.value)}
                className="block appearance-none w-full bg-white border-b border-gray-400 outline-none focus:border-blue-500 text-gray-700 py-2 pr-8 rounded leading-tight focus:outline-none focus:border-blue-500"
              >
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
          </div>)}
          <div className="w-full md:w-80 sm:w-full mt-8">
            <label htmlFor="storeType" className="mb-2">
              Enter your {selectedValue} number
            </label>
            <div>
              <input
                className="border-b border-gray-400  w-full  mb-5 outline-none focus:border-blue-500"
                type="text"
                placeholder="XVSDF02345D"
                value={value}
                name="pancard"
                onChange={handleDocumentValue}
              /><ErrorMessage
              name="pancard"
              component="div"
              className="text-red-600"
          />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumnetFirstForm;
