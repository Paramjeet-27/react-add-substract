import styles from "./Result.module.css"

const Result = ({currentResult}) => {
    return (
        <>
        <p className={styles.result}><b>Result: </b><span>{currentResult}</span></p>
        </>
    )
}
export default Result;