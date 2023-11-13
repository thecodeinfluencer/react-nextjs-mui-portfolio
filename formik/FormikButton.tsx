import { LoadingButton } from "@mui/lab";
import { useFormikContext } from "formik";
import React from "react";

type FormikButtonProps = {
  children: any;
} & Omit<React.ComponentProps<typeof LoadingButton>, "children">;

export default function FormikButton({
  children,
  ...other
}: FormikButtonProps) {
  const formikContext = useFormikContext();

  return (
    <LoadingButton
      sx={{ my: 0.5 }}
      onClick={() => formikContext.handleSubmit()}
      {...other}
    >
      {children}
    </LoadingButton>
  );
}
