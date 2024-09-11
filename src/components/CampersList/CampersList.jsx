import css from "../CampersList/CampersList.module.css"
import CampersItem from "../CampersItem/CampersItem"
import { useDispatch, useSelector } from "react-redux"
import { selectTracks } from "../../redux/track/selectors.js"
import { nextPage} from "../../redux/track/slice.js"
import { getTracks } from "../../redux/track/operations.js"

export default function CampersList({tracksItem}) {
    const dispatch = useDispatch()

    const {morePages} = useSelector(selectTracks)

    function handlePagination() {
        if (morePages) {
            dispatch(nextPage());
            dispatch(getTracks())
        }
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
            {morePages ? 
            <button className={css.button} onClick={handlePagination}>Load more</button> : null}
        </div>
    )
}