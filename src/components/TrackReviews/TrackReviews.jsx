import css from "../TrackReviews/TrackReviews.module.css"

import { useSelector } from "react-redux";
import { selectTracks } from "../../redux/track/selectors";
import ItemComment from "../ItemComment/ItemComment";

export default function TrackReviews() {
    const { currentItem } = useSelector(selectTracks);
    return (
        <>
            <ul className={css.listComment}>
                {currentItem.reviews.map((item) => 
                    <li key={item.reviewer_name}>
                        <ItemComment data={item} />
                    </li>
                )}
            </ul>
        </>
    )
}