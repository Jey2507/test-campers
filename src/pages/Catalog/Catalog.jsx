import CampersList from "../../components/CampersList/CampersList.jsx";
import Header from "../../components/Header/Header.jsx";
import SearchBar from "../../components/SearchBar/SearchBar.jsx";
import css from "../Catalog/Catalog.module.css"

export default function Catalog() {
    return (
        <>
            <Header>
                <div className={css.catalogDiv}>
                    <SearchBar />
                    <CampersList />
                </div>
            </Header>
        </>
    )
}