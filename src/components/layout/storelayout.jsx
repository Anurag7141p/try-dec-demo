import { Formik, Form } from "formik";

const StoreLayout = ({
  FormComponent,
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
  DubbleDiscription,
  error_message,
  handleSkip,
  clientId,
}) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isValid, setFieldValue, values }) => (
        <Form>
          <FormComponent
            setFieldValue={setFieldValue}
            error_message={error_message}
            isValid={isValid}
            handleSkip={handleSkip}
            clientId={clientId}
            formikFieldValues={values}
            //blue box
            boxTittle={boxTittle}
            boxDiscription={boxDiscription}
            currentPage={currentPage}
            pages={pages}
            handlePrevPage={handlePrevPage}
            handleNextPage={handleNextPage}
            buttonText={buttonText}
            DubbleDiscription={DubbleDiscription}
          />
        </Form>
      )}
    </Formik>
  );
};

export default StoreLayout;
