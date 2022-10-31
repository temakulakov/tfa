import styles from "./callBlock.module.scss";
import {Parallax} from "react-parallax";
import Button from "../Button/button";

const CallBlock = () => {
    const image = "/call-background.jpg";
    return <Parallax bgImage={image} strength={200} bgImageStyle={{ opacity:  "100%"}} className={styles.root}>
        <div style={{height: "600px", }}>
            <div className={styles.content}>
                <p>Не знаете, что выбрать?</p>
                <h1>Позвоните нам или оставьте заявку любым удобным для Вас способом</h1>
                <p>Свяжитесь с нашим специалистом и он проконсультирует Вас!
                    Также Вы можете заказать онлайн замер и посчитать бюджет на
                    облицовку Вашего дома не выходя из дома и совершенно БЕСПЛАТНО уже сейчас!</p>
                <div className={styles.buttons}>
                    <Button styles={"button--narvi white"} >Получить полное
                    предложение</Button>

                </div>
            </div>
        </div>
    </Parallax>
}

export default CallBlock;