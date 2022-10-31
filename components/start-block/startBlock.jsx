import styles from "./startBlock.module.scss";
import {Parallax} from "react-parallax";
import Button from "../Button/button";

const StartBlock = () => {
    const image = "/starter-background.jpg";
    return <Parallax bgImage={image} strength={200} className={styles.root}>
        <div style={{height: "600px"}}>
            <div className={styles.content}>
                <p>Термопанели армированные с утеплением
                    и гарантией 30 лет по цене производителя</p>
                <div className={styles.buttons}><Button styles={"button--narvi"}>Получить полное
                    предложение</Button>
                    <Button styles={"button--anthe"}>Подробнее</Button></div>
            </div>
        </div>
    </Parallax>
}

export default StartBlock;