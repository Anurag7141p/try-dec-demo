import { Formik, Form } from "formik";
import Navbar from "../reusable/navbar/homenav/navbar";
import Footer from "../reusable/footer/footer/footer";
const StoreLayoutDemo = ({
  FirstForm,
  SecondForm,
  BlueBox,
  validationSchema,
  initialValues,
  handleSubmit,
  pages,
  currentPage,
  handlePrevPage,
  handleNextPage,
  boxTittle,
  boxDiscription,
  buttonText,
  CalenderBox
}) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isValid, setFieldValue }) => (
        <Form>
          <div className="lg:w-[1536px] justify-center mx-auto">
          <Navbar/>

          <div className="flex flex-col md:flex-row ">
            {SecondForm ? (
              <>
                <div className="w-full md:w-1/3 md:ms-0 md:flex md:flex-col md:justify-end">
                  <FirstForm setFieldValue={setFieldValue} />
                </div>
                <div className="w-full md:w-1/3">
                  <SecondForm setFieldValue={setFieldValue} />
                </div>
                <div className="w-full md:w-1/3  bg-blue-700 p-2 ">
                  <BlueBox
                    boxTittle={boxTittle}
                    boxDiscription={boxDiscription}
                    currentPage={currentPage}
                    isValid={isValid}
                    pages={pages}
                    handlePrevPage={handlePrevPage}
                    handleNextPage={handleNextPage}
                    buttonText={buttonText}
                  />
                </div>{" "}
              </>
            ) : (
              <>
                <div className="w-full md:w-2/3 md:flex md:flex-col md:justify-end">
                  <FirstForm setFieldValue={setFieldValue} />
                </div>
                <div className="w-full md:w-1/3 bg-blue-700 p-2">
                <BlueBox
                    boxTittle={boxTittle}
                    boxDiscription={boxDiscription}
                    CalenderBox={CalenderBox}
                    isValid={isValid}
                    pages={pages}
                    handlePrevPage={handlePrevPage}
                    handleNextPage={handleNextPage}
                    buttonText={buttonText}
                  >
                  </BlueBox>
                </div>
              </>
            )}
          </div>
          <Footer/>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default StoreLayoutDemo;