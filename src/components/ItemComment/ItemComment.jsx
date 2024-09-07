import css from "../ItemComment/ItemComment.module.css"
import { icons as sprite } from '../../assets/index.js';

export default function ItemComment({data}) {
    const {reviewer_name, reviewer_rating, comment} = data;

    const items = () => {
        let stars = [];
        for (let index = 0; index < 5; index++) {
            const newClassName = index < reviewer_rating ? css.newIcon : css.icon;
            
            stars.push(<li key={index}>
                <svg className={newClassName}>
                    <use xlinkHref={`${sprite}#icon-star`} />
                </svg>
            </li>);
        }
        
        return stars;
    };
    
    return (
        <>
        <div className={css.mainBox}>
            <div className={css.boxAvatar}>
                {reviewer_name.split("")[0]}
            </div>
            <div className={css.divName}>
                <h3 className={css.name}>{reviewer_name}</h3>
                <ul className={css.listComment}>
                    {items()}
                </ul>
            </div>
        </div>
         <p className={css.comment}>{comment}</p>
        </>
    )
}
