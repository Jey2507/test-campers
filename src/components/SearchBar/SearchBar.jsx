import Filters from "../Filters/Filters.jsx";
import Location from "../Location/Location.jsx";
import css from "../SearchBar/SearchBar.module.css"

export default function SearchBar() {
    return (
        <>
        <form className={css.form} action="">
            <Location />
            <Filters />
            <button className={css.button} type="submit">Search</button>
        </form>
        </>
    )
}