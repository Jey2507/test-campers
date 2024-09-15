import css from "../Forms/Forms.module.css"
import { useId } from "react"
import DateField from "../DateField/DateField.jsx"
import { Field, Form, Formik } from "formik"
import * as Yup from "yup";
import toast from "react-hot-toast";

const email = {
    redexp: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
} 

const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "The name must consist of at least 3 characters")
      .max(40, "The name must contain a maximum of 40 characters")
      .required("Please fill in the field"),
    email: Yup.string()
      .min(6, "Email address must contain at least 6 characters")
      .max(30, "Email address must contain no more than 30 characters")
      .required("Please fill in the field")
      .matches(email.regexp, "Please enter a valid email address"),
    date: Yup.string().required("Please fill in the field"),
  });

const initialValues = {
    name: "",
    email: "",
    date: "",
    comment: "",
  }

  const handleSubmit = (values, actions) => {
    toast.success("Camper successfully booked!", {
      style: {
        color: "#101828",
        backgroundColor: "lightgreen",
      },
    });
    actions.resetForm();
  };

export default function Forms({children}) {

    const dateId = useId();
    const nameId = useId();
    const emailId = useId();
    const comentId = useId();

    return (
        <>
        {children}
        <div className={css.boxForm}>
            <h3 className={css.textForm}>Book your campervan now</h3>
            <p className={css.textDescr}>Stay connected! We are always ready to help you.</p>
            <Formik onSubmit={handleSubmit} initialValues={initialValues} validationSchema={FeedbackSchema}>
                <Form className={css.form} autoComplete="off">
                    <Field className={css.input} type="text" placeholder="Name*" label="name" name="name" id={nameId} required/>
                    <Field className={css.input} type="email" placeholder="Email*" label="email" name="email" id={emailId} required/>
                    <DateField name="date" id={dateId} required/>
                    <Field as="textarea" name="comment" className={css.textArea} id={comentId} placeholder="Comment" />
                    <button className={css.buttonForm} type="submit">Send</button>
                </Form>
            </Formik>
        </div>
        </>
    )
}