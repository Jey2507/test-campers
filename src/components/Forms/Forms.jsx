import css from "../Forms/Forms.module.css"

export default function Forms({children}) {
    return (
        <>
        {children}
        <div className={css.boxForm}>
            <h3 className={css.textForm}>Book your campervan now</h3>
            <p className={css.textDescr}>Stay connected! We are always ready to help you.</p>
            <form className={css.form}>
                <input type="text" placeholder="Name*"/>
                <input type="email" placeholder="Email*"/>
                <input type="date" placeholder="Booking date*"/>
                <textarea className={css.textArea} placeholder="Comment" ></textarea>
                <button className={css.buttonForm} type="submit">Send</button>
            </form>
        </div>
        </>
    )
}