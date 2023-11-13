import { Formik } from "formik";

type FormikFormProps = {
  initialValues: any;
  onSubmit: any;
  validationSchema: any;
  children: any;
};

export default function FormikForm({
  initialValues,
  onSubmit,
  validationSchema,
  children,
}: FormikFormProps) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => <>{children}</>}
    </Formik>
  );
}
