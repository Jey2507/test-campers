import { icons as sprite } from '../../assets/index.js';
import css from "../CampersItem/CampersItem.module.css"

export default function CampersItem({data}) {
    const image = data.gallery[0]
    const count = data.reviews.length;

    const {AC, bathroom, kitchen, Tv, radio, refrigerator, microwave, gas, water} = data

    return (
        <div className={css.itemBox}>
            <img className={css.itemImg} src={image.original} alt={data.description} />
            <div className={css.itemBoxDiff}>
                <div className={css.itemBoxTwo}>
                    <h2 className={css.itemHTwo}>{data.name}</h2>
                    <span className={css.itemSpanPrice}>
                        <p className={css.itemHTwo}>€{data.price}.00</p>
                        <svg className={css.itemSvg}>
                            <use xlinkHref={`${sprite}#icon-heart`} />
                        </svg>
                    </span>
                </div>
                
                <div className={css.itemDivSpan}>
                    <span className={css.itemSpan}>
                        <svg className={css.itemSvgStar}>
                            <use xlinkHref={`${sprite}#icon-star`} />
                        </svg>
                        <p className={css.itemRating}>{data.rating}({count})</p>
                    </span>
                    <span className={css.itemSpan}>
                        <svg className={css.itemSvgMap}>
                            <use xlinkHref={`${sprite}#icon-map`} />
                        </svg>
                        <p className={css.itemLocation}>{data.location}</p>
                    </span>
                </div>
                <p className={css.itemDescr}>{data.description}</p>
                <ul>
                    
                </ul>
                <button className={css.itemButton}>Show more</button>
            </div>
        </div>
    )
}