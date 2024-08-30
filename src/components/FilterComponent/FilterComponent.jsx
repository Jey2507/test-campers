import css from "../FilterComponent/FilterComponent.module.css"
import Inputs from "../Inputs/Inputs.jsx"

export default function FilterComponent({data, text}) {
    return (
        <div>
            <h2 className={css.filterHTwo}>{text}</h2>
            <ul className={css.filterList}>
                {data.map(item => 
                    <li key={item.id}>
                         <Inputs data={item} />
                    </li>
                )}
            </ul>
        </div>
    )
}