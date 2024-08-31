import { useEffect, useState } from "react"
import { getTracks } from "../../tracks"
import css from "../CampersList/CampersList.module.css"
import CampersItem from "../CampersItem/CampersItem"

export default function CampersList() {
    const [tracks, setTracks] = useState([])

    useEffect(() => {
        async function getData() {
            const data = await getTracks();
            console.log(data,"dataa")
            setTracks(data)
        }
        getData()
    },[])

    return (
        <ul className={css.listCampers}>
            {tracks.map(track => 
                <li className={css.listItem} key={track.id}>
                    <CampersItem data={track} />
                </li>
            )}
        </ul>
    )
}