import { useSelector } from "react-redux";
import css from "../TrackFeatures/TrackFeatures.module.css"
import { selectTracks } from "../../redux/track/selectors.js";
import Forms from "../Forms/Forms";
import ListFilters from "../ListFilters/ListFilters.jsx";

export default function TrackFeatures() {

    const { currentItem } = useSelector(selectTracks);
    const {length, form, width, height, tank, consumption} = currentItem

    return (
        <>
        <Forms>
        <div className={css.featuresBox}>
            <ListFilters list={currentItem}/>
            <div>
                <h3 className={css.featuresH}>
                    Vehicle details
                </h3>
                <ul className={css.featuresList}>
                <li className={css.featuresItem}>
                    <p>Form</p>
                    <p>{form}</p>
                </li>
                <li className={css.featuresItem}>
                    <p>Length</p>
                    <p>{length}</p>
                </li>
                <li className={css.featuresItem}>
                    <p>Width</p>
                    <p>{width}</p>
                </li>
                <li className={css.featuresItem}>
                    <p>Height</p>
                    <p>{height}</p>
                </li>
                <li className={css.featuresItem}>
                    <p>Tank</p>
                    <p>{tank}</p>
                </li>
                <li className={css.featuresItem}>
                    <p>Consumption</p>
                    <p>{consumption}</p>
                </li>
                </ul>
            </div>
        </div>
        </Forms>
        </>
    )
}