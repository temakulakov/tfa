import styles from "./articleBlock.module.scss";
import Card from "../card/card";

const ArticleBlock = () => {
    return <>
        <div className={styles.root}>
            <h1 className={styles.head} >Полезные статьи</h1>
            <div className={styles.content}>
                <Card background={"/1cl.jpeg"} style={{transform: "translateY(0)"}}>Для чего нужна
                    наружная отделка дома</Card>
                <Card background={"/2cl.jpeg"} style={{transform: "translateY(0)"}}>Как выбрать
                    надежный фасад дома</Card>
                <Card background={"/3cl.jpeg"} style={{transform: "translateY(0)"}}>Какие материалы
                    выбрать для облицовки дома</Card>
            </div>
        </div>
    </>
}

export default ArticleBlock;