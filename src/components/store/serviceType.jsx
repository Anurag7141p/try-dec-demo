import { ErrorMessage } from "formik";
import { useState } from "react";

const ServiceType = ({ setFieldValue }) => {
    const [selectedData, setSelectedData] = useState("");
    const handleSelection = (data) => {
        setFieldValue("serviceType", data);
        setSelectedData(data);
    };

    return (
        <div className="h-screen flex flex-col justify-center items-center text-white">
            <div>
                <button
                    onClick={() => handleSelection("Product Rental")}
                    type="button"
                    className={` rounded h-16 me-10 w-auto px-5 hover:bg-blue-600 ${selectedData == "Product Rental" ? "bg-green-500" : "bg-blue-500"
                        }`}
                >
                    Product Rental
                </button>
                <button
                    type="button"
                    onClick={() => handleSelection("Advertising Boards")}
                    className={` rounded h-16 me-10 w-auto px-5 hover:bg-blue-600 ${selectedData == "Advertising Boards"
                        ? "bg-green-500"
                        : "bg-blue-500"
                        }`}
                >
                    Advertising Boards
                </button>
                <ErrorMessage
                    name="storeType"
                    component="div"
                    className="text-red-600"
                />
            </div>
        </div>
    );
};

export default ServiceType;
