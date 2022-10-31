import styles from "./articleBlock.module.scss";
import Card from "../card/card";
import Button from "../Button/button";

const ArticleBlock = () => {
    return <>
        <div className={styles.root}>
            <h1 className={styles.head} >Полезные статьи</h1>
            <div className={styles.content}>
                <Card background={"/1cl.jpeg"} >Для чего нужна
                    наружная отделка дома</Card>
                <Card background={"/2cl.jpeg"} >Как выбрать
                    надежный фасад дома</Card>
                <Card background={"/3cl.jpeg"} >Какие материалы
                    выбрать для облицовки дома</Card>
            </div>
            <Button styles={"articles"}>Все статьи</Button>
        </div>
    </>
}

export default ArticleBlock;