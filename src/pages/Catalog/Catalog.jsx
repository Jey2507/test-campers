import { useEffect } from "react";
import CampersList from "../../components/CampersList/CampersList.jsx";
import Header from "../../components/Header/Header.jsx";
import SearchBar from "../../components/SearchBar/SearchBar.jsx";
import css from "../Catalog/Catalog.module.css";
import { getTracks } from "../../redux/track/operations.js";
import { useDispatch, useSelector } from "react-redux";
import { selectTracks } from "../../redux/track/selectors.js";

export default function Catalog() {
  const dispatch = useDispatch()
  const tracks = useSelector(selectTracks);

  useEffect(() => {
    dispatch(getTracks());
  }, [dispatch]);

  return (
    <>
      <Header>
        <div className={css.catalogDiv}>
          <SearchBar />
          <CampersList tracksItem={tracks} />
        </div>
      </Header>
    </>
  );
}
