import FilterComponent from "../FilterComponent/FilterComponent"
import css from "../Filters/Filters.module.css"
import {checkbox} from "../../inputs.js"
import { radio } from "../../inputs.js"

export default function Filters() {
    return (
        <div>
            <p className={css.filterDescr}>Filters</p>
            <div className={css.filterdiv}>
                <FilterComponent data={checkbox} text={"Vehicle equipment"} />
                <FilterComponent data={radio} text={"Vehicle type"}/>
            </div>
        </div>
    )
}