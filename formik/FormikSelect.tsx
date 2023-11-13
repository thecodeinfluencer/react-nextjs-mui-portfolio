import { MenuItem, TextField } from "@mui/material";
import { useFormikContext } from "formik";
import { useEffect } from "react";

type FormikSelectProps = {
  data: any;
  onSelectItem?: any;
  selectedItem?: any;
  name?: any;
} & Omit<
  React.ComponentProps<typeof TextField>,
  "data" | "onSelectItem" | "selectedItem" | "name"
>;

export default function FormikSelect({
  data,
  onSelectItem,
  selectedItem,
  name,
  ...other
}: FormikSelectProps) {
  const {
    errors,
    setFieldTouched,
    touched,
    handleChange,
    setFieldValue,
    values,
  } = useFormikContext<{ name: string }>();

  useEffect(() => {
    name && handleChange(name);
    selectedItem && setFieldValue(name, selectedItem);
  }, [handleChange, name, setFieldValue, selectedItem]);

  return (
    <TextField
      select
      variant="outlined"
      value={name && values[name as keyof typeof values]}
      style={{ width: "100%", marginTop: 8, marginBottom: 8 }}
      error={Boolean(
        name &&
          touched[name as keyof typeof touched] &&
          errors[name as keyof typeof errors]
      )}
      onChange={(e) => onSelectItem && onSelectItem(e.target.value)}
      helperText={
        !!(
          name &&
          touched[name as keyof typeof touched] &&
          errors[name as keyof typeof errors]
        ) && errors[name as keyof typeof errors]
      }
      onBlur={() => name && setFieldTouched(name)}
      {...other}
    >
      {data?.map((item: any) => {
        const value = item.value;
        return (
          <MenuItem
            key={value}
            value={value}
            onClick={() => setFieldValue(name, value)}
          >
            {item.label}
          </MenuItem>
        );
      })}
    </TextField>
  );
}
