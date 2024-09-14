import css from "../ItemFilters/ItemFilters.module.css"
import { icons as sprite } from '../../assets/index.js';

export default function ItemFilters({categorie, icon}) {
    const firstLetter = categorie.slice(0,1)
    const otherLetters = categorie.slice(1)
    return (
        <div className={css.boxItem}>
            <svg className={css.icons} >
                <use xlinkHref={`${sprite}${icon}`} />
            </svg>
            <p className={css.title}><span className={css.span}>{firstLetter}</span>{otherLetters}</p>
        </div>
    )
}