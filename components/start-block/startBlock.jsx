import styles from "./startBlock.module.scss";
import { Parallax } from "react-parallax";
import Button from "../Button/button";

const StartBlock = (props) => {
  const image = "/starter-background.jpg";
  return (
    <>
      <Parallax
        placeholder={"blur"}
        bgImage={image}
        strength={200}
        className={styles.root}>
        <div style={{ height: "600px" }}>
          <div className={styles.content}>
            <p>
              Термопанели армированные с утеплением и гарантией 30 лет по цене
              производителя
            </p>
            <div className={styles.buttons}>
              <Button modal={1} styles={"button--narvi"}>
                Получить полное предложение
              </Button>
              <Button
                styles={"button--anthe"}
                onclick={props.setMore}
                more={props.more}>
                Подробнее
              </Button>
            </div>
          </div>
        </div>
      </Parallax>
    </>
  );
};

export default StartBlock;
