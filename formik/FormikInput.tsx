import { TextField } from "@mui/material";
import { useFormikContext } from "formik";
import React from "react";

type FormikInputProps = {
  name?: any;
  type?: any;
  onSelectFiles?: any;
} & Omit<
  React.ComponentProps<typeof TextField>,
  "name" | "type" | "onSelectFiles"
>;

export default function FormikInput({
  name,
  type,
  onSelectFiles,
  ...other
}: FormikInputProps) {
  const { errors, setFieldTouched, setFieldValue, touched, values } =
    useFormikContext<{ name: string }>();

  return (
    <TextField
      fullWidth
      variant="outlined"
      type={type}
      style={{ marginTop: 8, marginBottom: 8 }}
      error={Boolean(
        name &&
          touched[name as keyof typeof touched] &&
          errors[name as keyof typeof errors]
      )}
      value={name && values[name as keyof typeof values]}
      onChange={(e: any) => {
        name && setFieldValue(name, e.target.value);
        type == "file" && onSelectFiles(e.target.files);
      }}
      onBlur={() => name && setFieldTouched(name)}
      helperText={
        !!(
          name &&
          touched[name as keyof typeof touched] &&
          errors[name as keyof typeof errors]
        ) && errors[name as keyof typeof errors]
      }
      {...other}
    />
  );
}
