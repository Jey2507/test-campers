import { icons as sprite } from '../../assets/index.js';
import css from "../Logo/Logo.module.css"

export default function Logo() {
    return (
        <svg className={css.logo}>
            <use xlinkHref={`${sprite}#icon-logo`} />
        </svg>
    )
}
