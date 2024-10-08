import { Suspense, useEffect} from "react";
import css from "../DetailInfo/DetailInfo.module.css";
import { getTracksById } from "../../redux/track/operations.js";
import { icons as sprite } from "../../assets/index.js";
import { Outlet, useParams } from "react-router";
import Header from "../../components/Header/Header.jsx";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import { selectTracks } from "../../redux/track/selectors.js";
import { useDispatch, useSelector } from "react-redux";
import { Toaster } from "react-hot-toast";

export default function DetailInfo() {
  const { catalogId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTracksById(catalogId));
  }, [catalogId, dispatch]);

  const { currentItem } = useSelector(selectTracks);

  const arrayTrack = currentItem?.gallery || [];
  const count = currentItem?.reviews ? currentItem.reviews.length : 0;

  const getNavLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.activeLink);
  };

  if (!currentItem ) {
    return <div>Loading...</div>;
  }

  return (
    <Header>
      <div className={css.deatilBox}>
        <div>
          <h1 className={css.detailH}>{currentItem.name}</h1>
          <div className={css.itemDivSpan}>
            <span className={css.itemSpan}>
              <svg className={css.itemSvgStar}>
                <use xlinkHref={`${sprite}#icon-star`} />
              </svg>
              <p className={css.itemRating}>
                {currentItem.rating}({count} Reviews)
              </p>
            </span>
            <span className={css.itemSpan}>
              <svg className={css.itemSvgMap}>
                <use xlinkHref={`${sprite}#icon-map`} />
              </svg>
              <p className={css.itemLocation}>{currentItem.location}</p>
            </span>
          </div>
          <p className={css.itemPrice}>€{currentItem.price}.00</p>
        </div>
        {arrayTrack.length > 0 && (
          <ul className={css.detailList}>
            {arrayTrack.map((image) => (
              <li className={css.detailLi} key={image.thumb}>
                <img
                  className={css.detailItem}
                  src={image.original}
                  alt={"tracksPhoto"}
                />
              </li>
            ))}
          </ul>
        )}
        <p className={css.detailDescr}>{currentItem.description}</p>
        <nav className={css.navLink}>
          <NavLink className={getNavLinkClass} to="features">
            Features
          </NavLink>
          <NavLink className={getNavLinkClass} to="reviews">
            Review
          </NavLink>
        </nav>
        <div className={css.boxLine}>
          <Suspense>
            <Outlet />
          </Suspense>
        </div>
      </div>
      <Toaster position="top-right" containerStyle={{ zIndex: 9999 }}/>
    </Header>
  );
}
