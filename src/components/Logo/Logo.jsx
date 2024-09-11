import { Link } from 'react-router-dom';
import { icons as sprite } from '../../assets/index.js';
import css from "../Logo/Logo.module.css"

export default function Logo() {
    return (
        <Link to="/">
        <svg className={css.logo}>
            <use xlinkHref={`${sprite}#icon-logo`} />
        </svg>
        </Link>
    )
}
