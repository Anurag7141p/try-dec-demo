import { ErrorMessage } from "formik";
import { useState } from "react";

const DocumentSecondForm = ({ setFieldValue }) => {
  const [rules, setRules] = useState([
    "Must carry original ID proof of your self",
  ]);

  const [rulesCount, setRulesCount] = useState(2);
  const updateRule = (index, value) => {
    const updatedRules = [...rules];
    updatedRules[index] = value;
    setRules(updatedRules);
    setFieldValue("storeRules", updatedRules);
  };

  const handleRulesCount = () => {
    if (rulesCount < 4) {
      setRulesCount(rulesCount + 1);
    }
  };
  return (
    <div className="mt-40 m-3 lg:w-1/2">
      <div className="mt-10">
        <h1 className="mb-2">Store Rules</h1>
        {Array.from({ length: rulesCount }).map((_, index) => (
          <div key={index} className="border border-black w-80 px-7 py-1 mb-2">
            <input
              placeholder="Enter store rule"
              className="w-full outline-none focus:border-blue-500"
              type="text"
              value={rules[index]}
              onChange={(e) => updateRule(index, e.target.value)}
            />
          </div>
        ))}
        <ErrorMessage
          name="storeRules"
          component="div"
          className="text-red-600"
        />
        <div>
          <label
            htmlFor="additionalRulesUpload"
            className="w-80 h-10 border-2 border-dashed border-blue-300 mt-2 cursor-pointer flex items-center justify-center bg-blue-50 text-blue-500 text-center"
          >
            <button
              type="button"
              id="additionalRulesUpload"
              className="hidden"
              onClick={handleRulesCount}
            />
            + Add more rules
          </label>
        </div>
      </div>
    </div>
  );
};

export default DocumentSecondForm;
