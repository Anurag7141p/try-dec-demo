import { ErrorMessage } from "formik";
import React, { useState, useRef, useEffect } from "react";
// import { supportedImageExtensions } from "../../../../utils/utils";

const AddProductAddImage = ({ setFieldValue, formikFieldValues }) => {
  // const [selectedImages, setSelectedImages] = useState([null, null, null]);
  // const [hoveredIndex, setHoveredIndex] = useState(null);
  // const replaceInputRef = useRef(null);
  // const [error, setError] = useState("");

  // useEffect(() => {
  //   if (
  //     formikFieldValues.selectedImages &&
  //     formikFieldValues?.selectedImages?.length == 3
  //   ) {
  //     setSelectedImages(formikFieldValues.selectedImages);
  //   }
  // }, []);

  // const handleFileChange = (event, replaceIndex) => {
  //   const reader = new FileReader();
  //   const file = event.target.files[0];

  //   const fileName = file.name.toLowerCase();
  //   const extension = fileName.split(".").pop();

  //   if (file.type.startsWith("image/")) {
  //     if (supportedImageExtensions.includes(extension)) {
  //       if (file.size <= 5 * 1024 * 1024) {
  //         reader.onloadend = () => {
  //           const newSelectedImages = [...selectedImages];

  //           if (replaceIndex !== null) {
  //             newSelectedImages[replaceIndex] = reader.result;
  //             setSelectedImages(newSelectedImages);
  //           } else {
  //             const emptyIndex = newSelectedImages.indexOf(null);
  //             if (emptyIndex !== -1) {
  //               newSelectedImages[emptyIndex] = reader.result;
  //               setSelectedImages(newSelectedImages);
  //             }
  //           }
  //         };

  //         if (file) {
  //           reader.readAsDataURL(file);
  //         }
  //         setError("");
  //       } else {
  //         setError("Image size should be less than 5MB");
  //       }
  //     } else {
  //       setError("Invalid image file extension");
  //     }
  //   } else {
  //     setError("File is not an image");
  //   }
  // };

  // const handleRemove = (index) => {
  //   const newSelectedImages = [...selectedImages];
  //   newSelectedImages[index] = null;
  //   setSelectedImages(newSelectedImages);
  // };

  // const handleReplace = (index) => {
  //   replaceInputRef.current.click();
  //   setHoveredIndex(index);
  // };

  // useEffect(() => {
  //   const allImagesSelected = selectedImages.every((img) => img !== null);

  //   if (allImagesSelected) {
  //     setFieldValue("selectedImages", selectedImages);
  //   } else {
  //     setFieldValue("selectedImages", []);
  //   }
  // }, [selectedImages]);

  return (
    <div className="">
      <div>
        <h1>Attach product image</h1>
        <h5 className="text-xs mt-1 text-gray-600">
          Attach jpg.png with size less than 4mb.
        </h5>
        <div className="flex flex-wrap w-2/2">
          <label
            htmlFor="fileInput"
            className="text-sm text-blue-400 border border-dashed border-blue-400 w-40 h-[110px] px-7 py-8 rounded-lg mt-4 mr-4 bg-blue-50 cursor-pointer"
          >
            <input
              type="file"
              id="fileInput"
              className="hidden"
              // onChange={(e) => handleFileChange(e, null)}
            />
            {/* <span className="inline-block w-4 h-4"></span> */}
            Click here to attach your files
          </label>

          {/* {selectedImages.map(
            (image, index) =>
              image && (
                <div
                  key={index}
                  className="flex relative text-sm text-blue-400 w-40 h-[110px] rounded-lg  mr-4 mt-4 cursor-pointer bg-blue-100"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <img
                    src={image}
                    alt={`Selected ${index + 1}`}
                    className="w-full h-full object-cover rounded-lg bg-blue-100"
                  />
                  {hoveredIndex === index && (
                    <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-gray-800 bg-opacity-60">
                      <button
                        className="text-black px-2 py-1 rounded-md bg-white mb-2"
                        onClick={() => handleRemove(index)}
                      >
                        Remove
                      </button>
                      <button
                        className="text-black px-2 py-1 rounded-md bg-white"
                        onClick={() => handleReplace(index)}
                      >
                        Replace
                      </button>
                    </div>
                  )}
                </div>
              )
          )}
          <ErrorMessage
            name="selectedImages"
            component="div"
            className="text-red-600"
          />
          <p className="text-red-500">{error}</p> */}

          {/* Additional boxes */}
          {/* {Array.from({ length: Math.max(0, 3 - selectedImages.length) }).map(
            (_, index) => (
              <div
                key={index}
                className={`flex text-sm text-blue-400 w-40 h-[110px] rounded-lg px-2 py-2 mr-4 mt-4 bg-blue-100`}
              >
                <label
                  htmlFor={`fileInput-${index}`}
                  className="w-full h-full cursor-pointer"
                >
                  <input
                    type="file"
                    id={`fileInput-${index}`}
                    className="hidden"
                    onChange={(e) => handleFileChange(e, index)}
                  />
                  <span className="inline-block w-4 h-4"></span>
                </label>
              </div>
            )
          )} */}
        </div>
        {/* Replace input for triggering file explorer */}
        <input
          type="file"
          // ref={replaceInputRef}
          className="hidden"
          // onChange={(e) => handleFileChange(e, hoveredIndex)}
        />
      </div>
    </div>
  );
};

export default AddProductAddImage;
