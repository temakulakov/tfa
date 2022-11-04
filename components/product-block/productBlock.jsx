import styles from "./productBlock.module.scss";
import Card from "../card/card";
import store from "../../store/store";

const ProductBlock = () => {
  return (
    <>
      <h1 className={styles.head}>Примеры фактур</h1>
      <div className={styles.root}>
        <div id={"scroller"} className={styles.content}>
          <Card
            id={0}
            onClick={() => {
              store.setNumber(1);
              store.setModal(2);
            }}
            background={"/classic.webp"}>
            Классика
          </Card>
          <Card
            id={1}
            onClick={() => {
              store.setNumber(2);
              store.setModal(2);
            }}
            background={"/travertin.jpeg"}>
            Под травертин
          </Card>
          <Card
            id={2}
            onClick={() => {
              store.setNumber(3);
              store.setModal(2);
            }}
            background={"/3d.jpeg"}>
            3Д фактура
          </Card>
        </div>
      </div>
    </>
  );
};

export default ProductBlock;
