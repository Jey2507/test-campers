import css from "../ItemComment/ItemComment.module.css"

export default function ItemComment({data}) {
    const {reviewer_name, reviewer_rating, comment} = data;

    const items = () => {
        return (
            for (let index = 0; index <= 5; index++) {
                <li>4</li>)
        }    
    }
    
    return (
        <>
        <div className={css.mainBox}>
            <div className={css.boxAvatar}>
                {reviewer_name.split("")[0]}
            </div>
            <div className={css.divName}>
                <h3 className={css.name}>{reviewer_name}</h3>
                <ul>
                    {items()}
                </ul>
            </div>
        </div>
         <p className={css.comment}>{comment}</p>
        </>
    )
}
