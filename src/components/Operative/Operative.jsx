import { useState } from "react";
import Buttons from "../Buttons/Buttons";
import Input from "../Input/Input";
import Result from "../Result/Result";
import styles from "./Operative.module.css"

const Operative = () => {
    const [result, setResult] = useState(0);
    const [ip, setIp] = useState();
    const ipvalue = e => setIp(+e.target.value);
    const addClick = () => {
        setResult(result + ip);
        setIp("")
    };
    const subClick = () => {
        setResult(result - ip);
        setIp("")
    };
    return (
        <div className={styles.outerbox}>
        <Input updatedValue = {ipvalue} value = {ip}/>
        <Buttons addClickHandler = {addClick} subClickHandler = {subClick}/>
        <Result currentResult = {result}/>
        </div>
    )

}
export default Operative;