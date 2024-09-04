import css from "../TrackFeatures/TrackFeatures.module.css"

export default function TrackFeatures() {
    return (
        <>
        <div className={css.featuresBox}>
            <div>

            </div>
            <div>
                <h3 className={css.featuresH}>
                    Vehicle details
                </h3>
                <ul className={css.featuresList}>
                <li className={css.featuresItem}>
                    <p>Form</p>
                    <p>Panel truck</p>
                </li>
                <li className={css.featuresItem}>
                    <p>Length</p>
                    <p>11</p>
                </li>
                <li className={css.featuresItem}>
                    <p>Width</p>
                    <p>22</p>
                </li>
                <li className={css.featuresItem}>
                    <p>Height</p>
                    <p>33</p>
                </li>
                <li className={css.featuresItem}>
                    <p>Tank</p>
                    <p>44</p>
                </li>
                <li className={css.featuresItem}>
                    <p>Consumption</p>
                    <p>55</p>
                </li>
                </ul>
            </div>
        </div>
        </>
    )
}