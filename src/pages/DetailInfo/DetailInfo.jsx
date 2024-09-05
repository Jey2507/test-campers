import { Suspense, useEffect} from "react";
import css from "../DetailInfo/DetailInfo.module.css";
import { getTracksById } from "../../redux/track/operations.js";
import { icons as sprite } from "../../assets/index.js";
import { Outlet, useParams } from "react-router";
import Header from "../../components/Header/Header.jsx";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import { selectTrackById } from "../../redux/track/selectors.js";
import { useDispatch, useSelector } from "react-redux";

export default function DetailInfo() {
  const { catalogId } = useParams();
  const dispatch = useDispatch();

  const value = useSelector(selectTrackById);

  useEffect(() => {
    dispatch(getTracksById(catalogId));
  }, [catalogId, dispatch]);

  console.log(value)
  

  const arrayTrack = value?.gallery || [];
  const count = value?.reviews ? value.reviews.length : 0;


  const getNavLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.activeLink);
  };

  return (
    <Header>
      <div className={css.deatilBox}>
        <div>
          <h1 className={css.detailH}>{value.name}</h1>
          <div className={css.itemDivSpan}>
            <span className={css.itemSpan}>
              <svg className={css.itemSvgStar}>
                <use xlinkHref={`${sprite}#icon-star`} />
              </svg>
              <p className={css.itemRating}>
                {value.rating}({count} Reviews)
              </p>
            </span>
            <span className={css.itemSpan}>
              <svg className={css.itemSvgMap}>
                <use xlinkHref={`${sprite}#icon-map`} />
              </svg>
              <p className={css.itemLocation}>{value.location}</p>
            </span>
          </div>
          <p className={css.itemPrice}>€{value.price}.00</p>
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
        <p className={css.detailDescr}>{value.description}</p>
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
    </Header>
  );
}
