import { useEffect, useState } from "react";
import css from "../DetailInfo/DetailInfo.module.css"
import { getTracksById } from "../../tracks";
import { icons as sprite } from '../../assets/index.js';
import { useParams } from "react-router";
import Header from "../../components/Header/Header.jsx";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

export default function DetailInfo() {
    const {catalogId} = useParams()
    const [detailInfo, setDetailInfo] = useState([]);

    useEffect(() => {
        async function getInfo() {
            try {
                const data = await getTracksById(catalogId);
                console.log(data)
                setDetailInfo(data);
            } catch (error) {
                console.log(error)
            }
        }
        getInfo()
    },[catalogId])

    const arrayTrack = detailInfo.gallery || [];
    const count = detailInfo.reviews ? detailInfo.reviews.length : 0; 

    const getNavLinkClass = ({ isActive }) => {
        return clsx(css.link, isActive && css.active);
      };

    return (
        <Header>
            <div className={css.deatilBox}>
                <div>
                    <h1 className={css.detailH}>{detailInfo.name}</h1>
                    <div className={css.itemDivSpan}>
                            <span className={css.itemSpan}>
                                <svg className={css.itemSvgStar}>
                                    <use xlinkHref={`${sprite}#icon-star`} />
                                </svg>
                                <p className={css.itemRating}>{detailInfo.rating}({count} Reviews)</p>
                            </span>
                            <span className={css.itemSpan}>
                                <svg className={css.itemSvgMap}>
                                    <use xlinkHref={`${sprite}#icon-map`} />
                                </svg>
                                <p className={css.itemLocation}>{detailInfo.location}</p>
                            </span>
                        </div>
                    <p className={css.itemPrice}>€{detailInfo.price}.00</p>
                </div>
                {arrayTrack.length > 0 && (
                    <ul className={css.detailList}>
                        {arrayTrack.map((image) =>
                            <li className={css.detailLi} key={image.thumb}>
                                <img className={css.detailItem} src={image.original} alt={"tracksPhoto"} />
                            </li>
                        )}
                    </ul>
                )}
                <p className={css.detailDescr}>{detailInfo.description}</p>
                <nav className={css.navLink}>
                      <NavLink className={getNavLinkClass} to="features">Features</NavLink>
                      <NavLink className={getNavLinkClass} to="reviews">Review</NavLink>
                </nav>

            </div>
        </Header>
    )
}