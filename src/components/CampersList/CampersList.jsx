import css from "../CampersList/CampersList.module.css"
import CampersItem from "../CampersItem/CampersItem"

export default function CampersList({tracksItem}) {

    function handlePagination() {
        
    }

    return (
        <div>
            <ul className={css.listCampers}>
                {tracksItem.map(track => 
                    <li className={css.listItem} key={track.id}>
                        <CampersItem data={track} />
                    </li>
                )}
            </ul>
            <button className={css.button} onClick={() => handlePagination()}>Load more</button>
        </div>
    )
}