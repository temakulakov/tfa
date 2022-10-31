import styles from "./calcBlock.module.scss";
import {Parallax} from "react-parallax";
import Button from "../Button/button";

const CalcBlock = () => {
    const image = "/calc-background.jpg";
    return <Parallax bgImage={image} strength={200} className={styles.root}>
        <div style={{height: "600px"}}>
            <h1 className={styles.header}>Онлан калькулятор</h1>
            <p className={styles.desription}>Здесь Вы можете просчитать стоимость покупки материалов предварительно</p>
            <div className={styles.content}>
            <div className={styles.sectionL}>
                <h1>Дом</h1>
            </div>
            <div className={styles.sectionC}>
                <h1>14 280 ₸</h1>
                <div className={styles.btn}>
                <Button styles={"button--call"}>Позвонить</Button>
                <Button styles={"button--buy"}>Купить</Button>
                </div>
            </div>
            <div className={styles.sectionR}>
                <h1>Фасад</h1>
            </div>
            </div>
        </div>
    </Parallax>
}

export default CalcBlock;