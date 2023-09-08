import styles from "./Buttons.module.css"

const Buttons = ({addClickHandler, subClickHandler}) => {
    return (
        <>
        <br />
        <button onClick={addClickHandler} className={styles.addbtn}>Addition</button>
        <br />
        <button onClick={subClickHandler} className={styles.subbtn}>Substraction</button>
        </>
    )
}
export default Buttons;