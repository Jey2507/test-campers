import { useField } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import css from "../DateField/DateField.module.css";

export default function DateField({ ...props }) {
  const [field, meta, helpers] = useField(props);

  return (
    <div>
      <DatePicker
        {...field}
        {...props}
        selected={(field.value && new Date(field.value)) || null}
        onChange={(date) => helpers.setValue(date)}
        dateFormat="dd.MM.yyyy"
        placeholderText="Booking date*"
        className={css.input}
      />
    </div>
  );
}