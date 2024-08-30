import { icons as sprite } from '../../assets/index.js';
import css from "../Location/Location.module.css"

export default function Location() {
    return (
        <div className={css.locationBox}>
            <p className={css.locationDescr}>Location</p>
            <div className={css.locationDiv}>
                <svg className={css.map}>
                    <use xlinkHref={`${sprite}#icon-map`} />
                </svg>
                <input className={css.locationInput} type="text" placeholder='City' />
            </div>
        </div>
    )
}