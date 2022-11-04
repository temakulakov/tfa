import styles from "./articleBlock.module.scss";
import Card from "../card/card";
import Button from "../Button/button";
import Link from "next/link";

const ArticleBlock = () => {
  return (
    <>
      <div className={styles.root}>
        <h1 className={styles.head}>Полезные статьи</h1>
        <div className={styles.content}>
          <Card link={"/articles"} background={"/1cl.jpeg"}>
            Для чего нужна наружная отделка дома
          </Card>
          <Card link={"/articles"} background={"/2cl.jpeg"}>
            Как выбрать надежный фасад дома
          </Card>
          <Card link={"/articles"} background={"/3cl.jpeg"}>
            Какие материалы выбрать для облицовки дома
          </Card>
        </div>
        <Link href={"/articles"}>
          <Button styles={"articles"}>Все статьи</Button>
        </Link>
      </div>
    </>
  );
};

export default ArticleBlock;
