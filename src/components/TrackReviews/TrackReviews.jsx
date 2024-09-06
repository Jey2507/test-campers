
import css from "../SearchBar/SearchBar.module.css"

import { useSelector } from "react-redux";
import { selectTracks } from "../../redux/track/selectors";

export default function TrackReviews() {
    const { currentItem } = useSelector(selectTracks);
    return (
        <>
            <ul>
                {currentItem.reviews.map((item) => 
                    <li id={item.reviewer_name}>
                        {comment}
                    </li>
                )}
            </ul>
        </>
    )
}