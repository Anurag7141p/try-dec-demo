
import { Formik, Form } from "formik";
import MobileBtn from "../store/mobileView/mobileBtn";
const MobileView = ({
  TopBlueBox,
  CenterForm,
  validationSchema,
  initialValues,
  handleSubmit,
  pages,
  currentPage,
  handlePrevPage,
  handleNextPage,
  Tittle,
  boxDiscription,
  buttonText,
  subTittle,
  showSingleButton,
  centertittle,
  showBottomBar,
  backarrow,

}) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isValid, setFieldValue }) => (
        <Form>
          <div>
            <div className='bg-custom-blue text-gray-50 rounded-b-xl relative '>
              <TopBlueBox
                Tittle={Tittle}
                boxDiscription={boxDiscription}
                subTittle={subTittle}
                currentPage={currentPage}
                pages={pages}
                centertittle={centertittle}
                showBottomBar={showBottomBar}
                backarrow={backarrow}
              />
            </div>
            <div className="font-medium">
              <CenterForm setFieldValue={setFieldValue} />
            </div>
            <div className="bottom-0 left-0 right-0 flex mt-3 px-4 md:px-8 py-4 md:py-6 fixed w-full justify-between rounded-t-2xl border border-4 bg-white">
              <MobileBtn
                isValid={isValid}
                pages={pages}
                currentPage={currentPage}
                handlePrevPage={handlePrevPage}
                handleNextPage={handleNextPage}
                buttonText={buttonText}
                showSingleButton={showSingleButton} 
              />
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default MobileView;
