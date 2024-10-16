import css from "../SearchBar/SearchBar.module.css"
import { icons as sprite } from '../../assets/index.js';
import { Field, Form, Formik } from "formik";
import { useId } from "react";
import { useDispatch } from "react-redux";
import { resetPage } from "../../redux/track/slice.js";
import { getTracks } from "../../redux/track/operations.js";
import toast from "react-hot-toast";
import { setFilterParams } from "../../redux/filter/slice.js";

const initialValues = {
    location: "",
    AC: false,
    transmission: "",
    kitchen: false,
    TV: false,
    bathroom: false,
    form: "",
  };

export default function SearchBar() {
    const dispatch = useDispatch();

    const cityId = useId();
    const acId = useId();
    const transmissionId = useId();
    const kitchenId = useId();
    const tvId = useId();
    const bathroomId = useId();

    const handleSubmit = (values, actions) => {

        dispatch(setFilterParams(values));
        dispatch(resetPage());
        dispatch(getTracks())
          .unwrap()
          .catch((error) => {
            toast("Sorry, no campers were found matching your criteria.", {
              style: {
                color: "#FFFFFF",
                backgroundColor: "#E44848",
              },
            });
          });
        actions.resetForm();
      };

    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ values, setFieldValue }) => (
            <Form className={css.form} action="">
                <div className={css.locationBox}>
                    <label className={css.locationDescr} htmlFor={cityId}>Location</label>
                    <div className={css.locationDiv}>
                        <svg className={css.map}>
                            <use xlinkHref={`${sprite}#icon-map`} />
                        </svg>
                        <Field className={css.locationInput} name="location" id={cityId} type="text" placeholder='City' />
                    </div>
                </div>
                <div> 
                    <p className={css.filterDescr}>Filters</p>
                    <h3 className={css.filterHTwo}>Vehicle equipment</h3>
                    <div className={css.filterdiv}>
                        <ul className={css.filterList}>
                            <li>
                                <label htmlFor={acId}>
                                    <Field className={css.input} type="checkbox" name="AC" id={acId} />
                                    <div className={css.inputBox}>
                                        <div className={css.inputDiv}>
                                            <svg className={css.icons}>
                                                <use xlinkHref={`${sprite}#icon-wind`} />
                                            </svg>
                                            <p className={css.inputsText}>AC</p>
                                        </div>
                                    </div>
                                </label>
                            </li>
                            <li>
                                <label htmlFor={transmissionId}>
                                    <Field
                                    className={css.input}
                                    type="checkbox"
                                    name="transmission"
                                    id={transmissionId}
                                    checked={values.transmission === "automatic"}
                                    onChange={() => setFieldValue("transmission", values.transmission === "automatic" ? "" : "automatic")}/>
                                    <div className={css.inputBox}>
                                        <div className={css.inputDiv}>
                                            <svg className={css.icons}>
                                                <use xlinkHref={`${sprite}#icon-diagram`} />
                                            </svg>
                                            <p className={css.inputsText}>Automatic</p>
                                        </div>
                                    </div>
                                </label>
                            </li>
                            <li>
                                <label htmlFor={kitchenId}>
                                    <Field className={css.input} type="checkbox" name="kitchen" id={kitchenId} />
                                    <div className={css.inputBox}>
                                        <div className={css.inputDiv}>
                                            <svg className={css.icons}>
                                                <use xlinkHref={`${sprite}#icon-cafe`} />
                                            </svg>
                                            <p className={css.inputsText}>Kitchen</p>
                                        </div>
                                    </div>
                                </label>
                            </li>
                            <li>
                                <label htmlFor={tvId}>
                                    <Field className={css.input} type="checkbox" name="TV" id={tvId} />
                                    <div className={css.inputBox}>
                                        <div className={css.inputDiv}>
                                            <svg className={css.icons}>
                                                <use xlinkHref={`${sprite}#icon-tv`} />
                                            </svg>
                                            <p className={css.inputsText}>Tv</p>
                                        </div>
                                    </div>
                                </label>
                            </li>
                            <li>
                                <label htmlFor={bathroomId}>
                                    <Field className={css.input} type="checkbox" name="bathroom" id={bathroomId} />
                                    <div className={css.inputBox}>
                                        <div className={css.inputDiv}>
                                            <svg className={css.icons}>
                                                <use xlinkHref={`${sprite}#icon-aqua`} />
                                            </svg>
                                            <p className={css.inputsText}>Bathroom</p>
                                        </div>
                                    </div>
                                </label>
                            </li>
                        </ul>
                        <h3 className={css.filterHTwo}>Vehicle type</h3>
                        <ul className={css.filterList}>
                            <li>
                                <label>
                                    <Field className={css.input} type="radio" name="form" value="panelTruck" />
                                    <div className={css.inputBox}>
                                        <div className={css.inputDiv}>
                                            <svg className={css.icons}>
                                                <use xlinkHref={`${sprite}#icon-block-small`} />
                                            </svg>
                                            <p className={css.inputsText}>Van</p>
                                        </div>
                                    </div>
                                </label>
                            </li>
                            <li>
                            <label>
                                <Field className={css.input} type="radio" name="form" value="fullyIntegrated" />
                                <div className={css.inputBox}>
                                        <div className={css.inputDiv}>
                                            <svg className={css.icons}>
                                                <use xlinkHref={`${sprite}#icon-block-medium`} />
                                            </svg>
                                            <p className={css.inputsText}>Fully Integrated</p>
                                        </div>
                                    </div>
                            </label>
                            </li>
                            <li>
                            <label>
                                <Field className={css.input} type="radio" name="form" value="alcove" />
                                <div className={css.inputBox}>
                                        <div className={css.inputDiv}>
                                            <svg className={css.icons}>
                                                <use xlinkHref={`${sprite}#icon-block-big`} />
                                            </svg>
                                            <p className={css.inputsText}>Alcove</p>
                                        </div>
                                    </div>
                            </label>
                            </li>
                        </ul>
                    </div>
                </div>
                <button className={css.button} type="submit">Search</button>
                </Form>
      )}
    </Formik>
  );
}