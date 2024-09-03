import { useEffect, useState } from "react";
import CampersList from "../../components/CampersList/CampersList.jsx";
import Header from "../../components/Header/Header.jsx";
import SearchBar from "../../components/SearchBar/SearchBar.jsx";
import css from "../Catalog/Catalog.module.css"
import { getTracks } from "../../tracks.js";

export default function Catalog() {

    const [tracks, setTracks] = useState([]);

    useEffect(() => {
        async function getData() {
            const data = await getTracks();
            setTracks(data);
        }
        getData()
    },[])

    return (
        <>
            <Header>
                <div className={css.catalogDiv}>
                    <SearchBar />
                    <CampersList tracksItem={tracks}/>
                </div>
            </Header>
        </>
    )
}