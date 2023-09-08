import styles from "./Input.module.css"

const Input = ({updatedValue, value}) => {
    return (
        <>
        <p className={styles.heading}>Enter a value to add/substract</p>
        <input type="number" className={styles.inputbox} onChange={updatedValue} value = {value}/>
        </>
    )

}
export default Input;